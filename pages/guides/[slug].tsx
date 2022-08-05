import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { GuidesPageLayout } from 'src/components';
import { OrderedDoc } from 'src/components/Build/BuildPageLayout';
import PageBuilder from '../../src/components/SanityPageBuilder/_PageBuilder';
import { client } from '../../src/lib/sanity';
interface GuideProps {
	guide: Guide;
	navDocs: { title: string; docs: OrderedDoc[] }[];
}
interface Guide {
	_updatedAt: string;
	category: string;
	categorySlug: { _type: string; current: string };
	pageBuilder: {
		_key: string;
		_type: string;
		steps?: any[];
		body?: any[];
		style: string;
		title: string;
	}[];
	mainImage: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	title: string;
	subTitle: string;
	subPos: boolean;
}

const GuidePage = ({ guide, navDocs }: GuideProps) => {
	console.log(guide, navDocs);
	const allDocsOrdered = navDocs
		.map((doc) => {
			const cat = doc.title;
			const result: OrderedDoc[] = [];
			doc.docs.forEach((node) => {
				result.push({
					...node,
					cat,
				});
			});
			return result;
		})
		.flat();

	const currentIndex = allDocsOrdered.findIndex((doc) => doc.slug.current === guide.slug.current);
	const nextDoc = currentIndex >= 0 ? allDocsOrdered[currentIndex + 1] : allDocsOrdered[0];
	const prevDoc =
		currentIndex >= 0
			? allDocsOrdered[currentIndex - 1]
			: allDocsOrdered[allDocsOrdered.length - 1];

	return (
		<>
			<Head>
				<title>Synthetix - Guides</title>
			</Head>
			<GuidesPageLayout
				navDocs={navDocs}
				updatedAt={guide._updatedAt}
				mainImage={guide.mainImage}
				title={guide.title}
				subTitle={guide.subTitle}
				subPos={guide.subPos}
				nextDoc={nextDoc}
				prevDoc={prevDoc}
			>
				<PageBuilder pageBuilder={guide.pageBuilder} />
			</GuidesPageLayout>
		</>
	);
};

export async function getStaticPaths() {
	const paths = await client.fetch(`*[_type == "guide" && defined(slug.current)][].slug.current`);

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	// It's important to default the slug so that it doesn't return "undefined"
	let slug = '';
	if (context.params && context.params?.slug) {
		slug = context.params.slug?.toString();
	}
	const guide = await client.fetch(
		`
    *[_type == "guide" && slug.current == $slug]
    {
	slug,
	title,
	subTitle,
	subPos,
	mainImage,
	"category": category->title,
	"categorySlug": category->slug,
	"pageBuilder": pageBuilder[]{
		_type == 'guideCarouselBlock' => {
			...,
			guides[]-> {
				...,
				tags[]->
			}
		},
		_type != 'guideCarouselBlock' => @,
	},
	_updatedAt,
	}[0]
  `,
		{ slug }
	);

	const navDocs = await client.fetch(`
  *[_type == "guideCategory"]|order(orderRank){
    title,
    'docs': *[_type=='guide' && references(^._id)]|order(orderRank){ title, slug }
  }
  `);
	return {
		props: {
			guide,
			navDocs,
		},
	};
}

export default GuidePage;
