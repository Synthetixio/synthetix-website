// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './objects/blockContent';
import buildCategory from './buildCategory';
import guideCategory from './guideCategory';
import build from './build';
import guide from './guide';
import author from './author';

import * as componentItems from './components';
import componentDefaultFields from './components/_componentDefaultFields';
import components from './components/components';

import pageBuilder from './objects/pageBuilder';
import pageBuilderColumns from './objects/pageBuilderColumns';
import accordion from './objects/accordion';
import imgCarousel from './objects/imgCarousel';
import step from './objects/step';
import mainImage from './objects/mainImage';

const allComponents = Object.values(componentItems).map((component) => {
	return { ...component, fields: componentDefaultFields.concat(component.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes
		.concat([
			// The following are document types which will appear
			// in the studio.
			build,
			buildCategory,
			guide,
			guideCategory,
			author,
			// When added to this list, object types can be used as
			// { type: 'typename' } in other document schemas
			blockContent,
			accordion,
			imgCarousel,
			step,
			mainImage,

			pageBuilder,
			pageBuilderColumns,
			components,
		])
		.concat(allComponents),
});
