import { ApiProperty } from '@nestjs/swagger';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';

/**
 *A class which contains proporties of Location that used to put data to be returned to client
 *
 */
export class LocationPresenter {
  @ApiProperty()
  city: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  landmark: string;
  /**
   *A constructor which copy  Location domain object Property value to  LocationPresenter properties
   */
  constructor(location: ProviderLocation) {
    this.city = location.city;

    this.latitude = location.latitude;

    this.longitude = location.longitude;

    this.landmark = location.landmark;
  }
}
