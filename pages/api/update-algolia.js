import indexer, { flattenBlocks } from 'sanity-algolia';
import client from '../../src/lib/sanity';
import algolia from '../../src/lib/algolia';

const handler = (req, res) => {
	if (req.headers['content-type'] !== 'application/json') {
		res.status(400);
		res.json({ message: 'Bad request' });
		return;
	}

	const algoliaIndex = algolia.initIndex('pages');

	const sanityAlgolia = indexer(
		{
			build: {
				index: algoliaIndex,
				projection: `{
					title,
					"path": slug.current,
					"body": pt::text(pageBuilder[]->body),
					publishedAt,
					"updatedAt": _updatedAt
				      }`,
			},
		},
		(document) => {
			switch (document._type) {
				case 'build':
					return {
						title: document.title,
						path: document.path,
						publishedAt: document.publishedAt,
						updatedAt: document.updatedAt,
						body: document.body,
					};
				default:
					return document;
			}
		}
	);
	return sanityAlgolia.webhookSync(client, req.body).then(() => res.status(200).send('ok'));
};

export default handler;
