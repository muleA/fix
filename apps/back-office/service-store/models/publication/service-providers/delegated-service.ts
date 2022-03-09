export default interface DelegatedService{
    id: string;  
    providerId: string;  
    serviceId: string;  
    title: string;  
    dispatchingRule: string;  
    status: string;  
    createdAt: Date;  
    updatedAt: Date;  
}