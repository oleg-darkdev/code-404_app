import { ftpCodesList, structureCategoryData, findCodeById } from '$shared';


export function load({ params }) {

  const idCategory = params.category,
    codesData = findCodeById(ftpCodesList.allCodes, idCategory),
    categoryData = structureCategoryData(ftpCodesList);

	return {
    codesData: codesData,
    categoryData: categoryData
	};
}
