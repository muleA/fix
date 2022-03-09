import Address from "./address";
import ContactInfo from "./contact-info";

export default interface ServiceOwner{

    id: string;
    shortName: string;
    fullName: string;
    sector: string;
    contactInfo: ContactInfo;
    address: Address;
    code: string;
    organizationId: string;
    organizationName: string;
   
}
