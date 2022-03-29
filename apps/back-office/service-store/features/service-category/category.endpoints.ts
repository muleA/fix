const CategoryEndpoints = {
  getCategorys: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categorys/get-categorys`,
  createCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categorys/create-category/`,
  updateCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categorys/update-category/`,
  deleteCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categorys/delete-category`,
};
export default CategoryEndpoints;
