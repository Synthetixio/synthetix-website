import Head from 'next/head';
import jp from 'jsonpath';
import slugify from 'slugify';
import { BuildPageLayout } from 'src/components';
import PageBuilder from '../../src/components/SanityPageBuilder/PageBuilder';
import { client } from '../../src/lib/sanity';
import {
	BuildPageLayoutProps,
	OrderedDoc,
} from 'src/components/Build/BuildPageLayout';
import { GetStaticPropsContext } from 'next';
import { TableBlockProps } from 'src/components/SanityPageBuilder/TableBlock';
import { StepsBlockProps } from 'src/components/SanityPageBuilder/StepsBlock';
import { Tag } from 'src/components/Guides/Tags';

interface BuildProps {
	build: Build;
	navDocs: { title: string; docs: OrderedDoc[] }[];
}

export interface Guide {
	category: { _ref: string; _type: string };
	icon: { _type: string; asset: { _ref: string; _type: string } };
	introText: string;
	mainImage: { _type: string; asset: { _ref: string; _type: string } };
	pageBuilder: {
		_key: string;
		_type: string;
		body: {
			children: {
				marks: string[];
				text: string;
				_key: string;
				_type: string;
			}[];
			markDefs: unknown[];
			style: string;
			_key: string;
			_type: string;
		}[];
		disabled: boolean;
		title: string;
		caption?: string;
		asset?: { _ref: string };
		accordions?: { heading: string; body: any }[];
	};
	publishAt: string;
	slug: { _type: string; current: string };
	subPos: boolean;
	subTitle: string;
	tags: Tag[];
	title: string;
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
}

export interface Build {
	_updatedAt: string;
	_createdAt?: string;
	_id?: string;
	_rev?: string;
	_type?: string;
	category: string;
	categorySlug: { _type: string; current: string };
	guideLPBanner?: {
		_type: string;
		asset: { _ref: string; _type: string };
	};
	guideLPBuilder: Build['pageBuilder'];
	pageBuilder: PageBuilderProps[];
	slug: { _type: string; current: string };
	title: string;
}

export interface PageBuilderChildren {
	marks: string[];
	text: string;
	_key: string;
	_type: string;
}

export interface PageBuilderProps {
	_key: string;
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	style?: string;
	steps: StepsBlockProps['steps'];
	body: {
		children?: PageBuilderChildren[];
		asset?: {
			_ref: string;
			_type: string;
		};
		markDefs: { href: string; _key: string; _type: string }[];
		listItem?: string;
		style: string;
		_key?: string;
		_type: string;
		code?: string;
	}[];
	table?: TableBlockProps['table'];
	url?: string;
	disabled: boolean;
	title: string;
	caption?: string;
	asset?: { _ref: string };
	accordions?: { heading: string; body: any }[];
	iconText?: string;
	icon?: { asset: { _ref: string; _type: string } };
	iconLinkText?: string;
	iconLinkURL?: string;
	guideLPBanner: {
		_type: string;
		asset: { _ref: string; _type: string };
	};
	columns?: PageBuilderProps[];
	guides: Guide[];
}

const BuildPage = ({ build, navDocs }: BuildProps) => {
	//gather headings from all portable text
	const headingsQuery = jp.query(
		build,
		'$..body[?(@.style=="h1" || @.style=="h2" || @.style=="h3" || @.style=="h4" )]',
	);
	const headings: BuildPageLayoutProps<OrderedDoc>['headings'] =
		headingsQuery.map(heading => ({
			style: heading.style,
			text: heading.children[0].text,
			slug: slugify(heading.children[0].text, { lower: true }),
		}));

	const allDocsOrdered = navDocs
		.map(doc => {
			const cat = doc.title;
			const result: OrderedDoc[] = [];
			doc.docs.forEach(node => {
				result.push({
					...node,
					cat,
				});
			});
			return result;
		})
		.flat();

	const currentIndex = allDocsOrdered.findIndex(
		doc => doc.slug.current === build.slug.current,
	);
	const nextDoc =
		currentIndex >= 0 ? allDocsOrdered[currentIndex + 1] : allDocsOrdered[0];
	const prevDoc =
		currentIndex >= 0
			? allDocsOrdered[currentIndex - 1]
			: allDocsOrdered[allDocsOrdered.length - 1];

	return (
		<>
			<Head>
				<title>Synthetix - Build</title>
			</Head>
			<BuildPageLayout
				headings={headings}
				navDocs={navDocs}
				nextDoc={nextDoc}
				prevDoc={prevDoc}
				updatedAt={build._updatedAt}
			>
				<PageBuilder pageBuilder={build.pageBuilder} />
			</BuildPageLayout>
		</>
	);
};

export async function getStaticPaths() {
	const paths: Record<string, string>[] = await client.fetch(
		`*[_type == "build" && defined(slug.current)][].slug.current`,
	);

	return {
		paths: paths.map(slug => ({ params: { slug } })),
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	// It's important to default the slug so that it doesn't return "undefined"
	let slug = '';
	if (context.params && context.params?.slug) {
		slug = context.params.slug?.toString();
	}
	const build = await client.fetch(
		`
    *[_type == "build" && slug.current == $slug]
    {
	slug,
	title,
	"category": category->title,
	"categorySlug": category->slug,
	pageBuilder,
  _updatedAt,
      }[0]
  `,
		{ slug },
	);

	const navDocs = await client.fetch(`
  *[_type == "buildCategory"]|order(orderRank){
    title,
    'docs': *[_type=='build' && references(^._id)]|order(orderRank){ title, slug }
  }
  `);
	return {
		props: {
			build,
			navDocs,
		},
	};
}

export default BuildPage;
