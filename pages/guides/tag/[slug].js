import Head from 'next/head';
import { TagsPageLayout } from 'src/components';

import client from '../../../src/lib/sanity';

const Guides = ({ guides, navDocs, tag }) => {
	//console.log(tag);

	return (
		<>
			<Head>
				<title>Synthetix - Guides</title>
			</Head>
			<TagsPageLayout
				navDocs={navDocs}
				updatedAt={tag._updatedAt}
				title={tag.title}
				subTitle={tag.introText}
				guides={guides}
			></TagsPageLayout>
		</>
	);
};

export async function getStaticPaths() {
	const paths = await client.fetch(`*[_type == "tag" && defined(slug.current)][].slug.current`);

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.params;
	const guides = await client.fetch(
		`
		*[_type == "guide" && count((tags[]->slug.current)[@ in [$slug]]) > 0]
		{
			slug,
			title,
			introText,
			icon,
			tags[]->,
			_updatedAt,
		}
		`,
		{ slug }
	);

	const tag = await client.fetch(
		`
		*[_type == "tag" && slug.current == $slug]
		{
			slug,
			title,
			introText,
			color,
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
			guides,
			navDocs,
			tag,
		},
	};
}

export default Guides;
