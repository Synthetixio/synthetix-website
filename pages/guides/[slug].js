import Head from 'next/head';
import { GuidesPageLayout } from 'src/components';

import PageBuilder from '../../src/components/SanityPageBuilder/_PageBuilder';
import client from '../../src/lib/sanity';

const Guide = ({ guide, navDocs }) => {
	// next/prev prep work
	//const allDocsOrdered = jp.query(navDocs, '$..docs[*]');
	let allDocsOrdered = [];
	navDocs.map((doc) => {
		let cat = doc.title;
		doc.docs.map((node) =>
			allDocsOrdered.push({
				cat: cat,
				...node,
			})
		);
	});

	let nextDoc = null;
	let prevDoc = null;
	allDocsOrdered.map(function (doc, index, elements) {
		if (doc.slug.current === guide.slug.current) {
			nextDoc = elements[index + 1];
			prevDoc = elements[index - 1];
		}
	});

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

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.params;
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

export default Guide;
