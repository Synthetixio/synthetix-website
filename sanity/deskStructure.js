import S from '@sanity/desk-tool/structure-builder';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { GrDocumentConfig } from 'react-icons/gr';

export default () =>
	S.list()
		.title('Home')
		.items([
			S.listItem()
				.title('Build Documents')
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
			S.divider(),
			...S.documentTypeListItems(),
		]);
