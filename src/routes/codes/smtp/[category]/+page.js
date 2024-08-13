import { smtpCodesList, structureCategoryData, findCodeById } from '$shared';


export function load({ params }) {
  const idCategory = params.category,
    codesData = findCodeById(smtpCodesList.allCodes, idCategory),
    categoryData = structureCategoryData(smtpCodesList);

	return {
    codesData: codesData,
    categoryData: categoryData
	};
}
