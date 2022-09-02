import indexer from 'sanity-algolia';
import { client } from '../../src/lib/sanity';
import { WebhookBody } from 'sanity-algolia/dist/types';
import algoliasearch from 'algoliasearch';

export const algolia = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
	process.env.NEXT_ALGOLIA_ADMIN_KEY!
);

const algoliaIndex = algolia.initIndex('pages');

export const sanityAlgolia = indexer(
	{
		build: {
			index: algoliaIndex,
			projection: `{
				title,
				"path": slug.current,
				"body": pt::text(pageBuilder[].body[]),
				publishedAt,
				"updatedAt": _updatedAt
			      }`,
		},
		guide: {
			index: algoliaIndex,
			projection: `{
				title,
				"path": slug.current,
				"body": pt::text(pageBuilder[].body[]),
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
			case 'guide':
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

const handler = (
	req: { headers: { 'content-type': string }; body: WebhookBody },
	res: { status: (status: number) => { send: (msg: string) => void }; json: (obj: object) => void }
) => {
	if (req.headers['content-type'] !== 'application/json') {
		res.status(400);
		res.json({ message: 'Bad request' });
		return res;
	}

	return (
		sanityAlgolia
			// @TODO DEV remove client as any when type bug is fixed
			.webhookSync(client as any, req.body)
			.then(() => res.status(200).send('ok'))
			.catch((error) => {
				console.error(error);
			})
	);
};

export default handler;
