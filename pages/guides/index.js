import Head from 'next/head';
import { GuidesPageLayout } from 'src/components';

import PageBuilder from '../../src/components/SanityPageBuilder/_PageBuilder';
import client from '../../src/lib/sanity';

const GuideIndex = ({ settings, navDocs, guideTags }) => {
	return (
		<>
			<Head>
				<title>Synthetix - Guides</title>
			</Head>
			<GuidesPageLayout
				navDocs={navDocs}
				updatedAt={settings._updatedAt}
				mainImage={settings.guideLPBanner}
				title={'User Guide Hub'}
				subTitle={'Synthetix'}
				subPos={false}
			>
				<PageBuilder guideTags={guideTags} pageBuilder={settings.guideLPBuilder} />
			</GuidesPageLayout>
		</>
	);
};

export async function getStaticProps() {
	const settings = await client.fetch(`
		*[_type == "settings"]{
			...,
			"guideLPBuilder": guideLPBuilder[]{
				_type == 'guideCarouselBlock' => {
					...,
					guides[]-> {
						...,
						tags[]->
					}
				},
				_type != 'guideCarouselBlock' => @,
			},
		}[0]
	`);

	const navDocs = await client.fetch(`
		*[_type == "guideCategory"]|order(orderRank){
			title,
			'docs': *[_type=='guide' && references(^._id)]|order(orderRank){ title, slug }
		}
 	`);

	const guideTags = await client.fetch(`
		*[_type == "guide"]{
			tags[]->
		}
 	 `);
	return {
		props: {
			settings,
			navDocs,
			guideTags,
		},
	};
}

export default GuideIndex;
