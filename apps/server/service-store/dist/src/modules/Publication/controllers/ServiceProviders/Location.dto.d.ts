import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
export declare class UpdateLocationDto {
    city: string;
    latitude: number;
    longitude: number;
    landmark: string;
    static fromDTO(locationDto: UpdateLocationDto): ProviderLocation;
}
export declare class CreateLocationDto {
    city: string;
    latitude: number;
    longitude: number;
    landmark: string;
    static fromDTO(locationDto: CreateLocationDto): ProviderLocation;
}
