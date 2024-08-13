import { httpCodesList, structureCategoryData, findCodeById } from '$shared';


export function load({ params }) {
  const idCategory = params.category,
    codesData = findCodeById(httpCodesList.allCodes, idCategory),
    categoryData = structureCategoryData(httpCodesList);

	return {
    codesData: codesData,
    categoryData: categoryData
	};
}
