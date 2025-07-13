import { idToUuid } from "notion-utils";

interface CollectionView {
  blockIds?: string[];
  collection_group_results?: {
    blockIds?: string[];
  };
}

interface CollectionQuery {
  [key: string]: {
    [viewId: string]: CollectionView;
  };
}

export default function getAllPageIds(
  collectionQuery: CollectionQuery,
  viewId?: string,
) {
  const views = Object.values(collectionQuery)[0];
  let pageIds: string[] = [];

  if (viewId) {
    const vId = idToUuid(viewId);
    pageIds = views[vId]?.blockIds || [];
  } else {
    const pageSet = new Set<string>();
    Object.values(views).forEach((view: CollectionView) => {
      view?.collection_group_results?.blockIds?.forEach((id: string) =>
        pageSet.add(id),
      );
    });
    pageIds = [...pageSet];
  }

  return pageIds;
}
