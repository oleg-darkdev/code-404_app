import extractLinkAndTitle from './extractLinkAndTitle';


function structureCategoryData(codesCategory) {
  return {
    title: codesCategory.title,
    shortDesc: codesCategory.shortDesc,
    id: codesCategory.id,
    categories: extractLinkAndTitle(codesCategory.allCodes)
  };
}

export default structureCategoryData;
