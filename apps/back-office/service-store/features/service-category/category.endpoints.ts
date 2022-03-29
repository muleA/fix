const CategoryEndpoints = {
  getCategorys: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categories/get-categories`,
  createCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categories/create-category`,
  updateCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categories/update-category/`,
  deleteCategory: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/categories/delete-category/`,
};
export default CategoryEndpoints;
