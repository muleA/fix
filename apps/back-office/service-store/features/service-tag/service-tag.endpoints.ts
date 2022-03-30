export const ServiceTagEndPoints = {
  getTags: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/tags/get-tags`,
  createTag: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/tags/create-tag/`,
  updateTag: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/tags/update-tag/`,
  deleteTag: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/tags/delete-tag/`,
};
