import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
export declare class LocationPresenter {
    city: string;
    latitude: number;
    longitude: number;
    landmark: string;
    constructor(location: ProviderLocation);
}
