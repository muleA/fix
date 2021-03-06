import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProviderLocation } from '../../domain/ServiceProviders/ProviderLocation';
/**
 *A class which contains proporties of Location that used to receive paramamer values to be updated in the database
 */
export class UpdateLocationDto {
  @ApiProperty()
  city: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  landmark: string;
  /**
   *A method that mapes  UpdateLocationDto object data to  Location domain object
   *@returns Location domain object which contains Location  information
   */
  static fromDTO(locationDto: UpdateLocationDto): ProviderLocation {
    const location: ProviderLocation = new ProviderLocation();

    location.city = locationDto.city;

    location.latitude = locationDto.latitude;

    location.longitude = locationDto.longitude;

    location.landmark = locationDto.landmark;

    return location;
  }
}
/**
 *A class wich contains proporties of Location that used to receive paramamer values to be saved to database
 *
 */
export class CreateLocationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @ApiProperty()
  landmark: string;
  /**
   *A method that mapes  CreateLocationDto object data to  Location domain object
   *@returns Location domain object which contains Location  information
   */
  static fromDTO(locationDto: CreateLocationDto): ProviderLocation {
    const location: ProviderLocation = new ProviderLocation();

    location.city = locationDto.city;

    location.latitude = locationDto.latitude;

    location.longitude = locationDto.longitude;

    location.landmark = locationDto.landmark;
    return location;
  }
}
