/*Feature - Classification
Service category definition (CRUD)
REQ_P - Associate a service to predefined categories based on some events / activities  with or without account info
*/
export default interface Category {
  id: string;
  name: string;
  description: string;
  code: string;
  parentId?: string;

}
/*
Feature - Classification
Tag definition for service filtering (CRUD)
REQ_P - Associate a service to a predefined tag(s)
*/

