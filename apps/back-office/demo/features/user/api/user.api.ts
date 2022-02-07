import { httpService } from '@presence/react/core';
import { Url } from '../../../models/url';
import { urlEndpoint } from './api.endpoint';

export const getAllUrlsApi = (query: string) => {
  return httpService
    .get(`${urlEndpoint.getAllUrls}?${query}`)
    .then((response) => {
      return response.data.items;
    });
};
export const createUrlApi = (url: Url) => {
  return httpService.post(urlEndpoint.createUrl, url).then((response) => {
    return response.data;
  });
};

export const updateUrlApi = (url: Url) => {
  return httpService
    .put(urlEndpoint.updateUrl + url.id, url)
    .then((response) => {
      return response.data;
    });
};

export const deleteUrlApi = (urlId: string) => {
  return httpService.delete(urlEndpoint.deleteUrl + urlId).then((response) => {
    return response.data;
  });
};
