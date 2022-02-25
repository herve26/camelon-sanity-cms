import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config'].includes(listItem.getId())

export const getDefaultDocumentNode = Structure.getDefaultDocumentNode;
const items = Structure.getFilteredDocumentTypeListItems();

export default () =>
  // S.list()
  //   .title('Site')
  //   .items([
  //     S.documentListItem().id('global-config').schemaType('site-config').title('Site config'),
  //     S.documentTypeListItem('page').title('Pages'),
  //     S.documentTypeListItem('route').title('Routes'),
  //     ...S.documentTypeListItems().filter(hiddenDocTypes),
  //   ])
  S.list()
  .id('__root__')
  .title('Content')
  .items(items)

