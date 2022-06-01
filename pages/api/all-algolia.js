import { sanityAlgolia } from './update-algolia';
import { client } from '../../src/lib/sanity';

// Fetch the _id of all the documents we want to index
const types = ['guide', 'build'];
const query = `* [_type in $types && !(_id in path("drafts.**"))][]._id`;

client
	.fetch(query, { types })
	.then((ids) =>
		sanityAlgolia.webhookSync(client, { ids: { created: ids, updated: [], deleted: [] } })
	);
