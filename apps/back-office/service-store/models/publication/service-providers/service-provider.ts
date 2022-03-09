import Address from "../service-owners/address";
import DelegatedService from "./delegated-service";
import ServiceProviderLocation from "./location";

export interface ServiceProvider{
    id:string;
    serviceId:string;
    Code:string;
	shortName:string;
	fullName:string
	sector:string;
    contactInfo:string
	Geolocation:string 
	servicedispatchingrules:string 
    location: ServiceProviderLocation;  
    address: Address;  
    delegatedServices: DelegatedService[];  
    code: string;  
    organizationId: string;  
    organizationName: string;  
 
  }