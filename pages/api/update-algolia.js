import indexer, { flattenBlocks } from 'sanity-algolia';
import client from '../../src/lib/sanity';
import algolia from '../../src/lib/algolia';

export default function handler(req, res) {
	const sanityAlgolia = indexer(
		{
			build: {
				index: algolia.initIndex('pages'),
			},
			guide: {
				index: algolia.initIndex('pages'),
			},
		},
		(document) => {
			switch (document._type) {
				case 'build':
					return {
						title: document.title,
						path: document.slug.current,
						publishedAt: document.publishedAt,
						updatedAt: document._updatedAt,
						body: flattenBlocks(document.pageBuilder),
					};
				case 'guide':
					return {
						title: document.title,
						subTitle: document.subTitle,
						path: document.slug.current,
						publishedAt: document.publishedAt,
						updatedAt: document._updatedAt,
						body: flattenBlocks(document.pageBuilder),
					};
				default:
					throw new Error(`Unknown type: ${document.type}`);
			}
		}
	);

	return sanityAlgolia.webhookSync(client, req.body).then(() => res.status(200).send('ok'));
}
