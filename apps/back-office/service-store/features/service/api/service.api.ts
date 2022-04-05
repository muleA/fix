import axios from 'axios';
import ServiceEndpoints from '../service.endpoints';
import Service from '../../../models/publication/services/service';

export const getServices = () => {
  return axios
    .get(ServiceEndpoints.getServices)
    .then((response) => response.data.items)
    .catch((err) => console.log(err));
};

export const getService = (id: string) => {
  return axios
    .get(`${ServiceEndpoints.getService}/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const createService = (service: Service) => {
  return axios
    .post(ServiceEndpoints.createService, service)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const updateService = (service: Service) => {
  return axios
    .post(ServiceEndpoints.updateService, service)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const deleteService = (id: string) => {
  return axios
    .delete(`${ServiceEndpoints.deleteService}/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
