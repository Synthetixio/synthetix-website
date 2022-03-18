import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { GrDocumentConfig } from 'react-icons/gr';
import { RiGuideFill } from 'react-icons/ri';

export default () =>
	S.list()
		.title('Home')
		.items([
			S.listItem()
				.title('Build')
				.icon(GrDocumentConfig)
				.child(
					S.list()
						.title('Build Documents & Catagories')
						.items([
							orderableDocumentListDeskItem({
								type: 'build',
								title: 'Build Documents',
							}),
							orderableDocumentListDeskItem({
								type: 'buildCategory',
								title: 'Build Catagories',
							}),
						])
				),
			S.listItem()
				.title('Guide')
				.icon(RiGuideFill)
				.child(
					S.list()
						.title('Guide Documents & Catagories')
						.items([
							orderableDocumentListDeskItem({
								type: 'guide',
								title: 'Guide Documents',
							}),
							orderableDocumentListDeskItem({
								type: 'guideCategory',
								title: 'Guide Catagories',
							}),
						])
				),
			S.divider(),
			//...S.documentTypeListItems(),
		]);
