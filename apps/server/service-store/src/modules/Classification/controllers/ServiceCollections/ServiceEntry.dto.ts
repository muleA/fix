import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsNumber, IsString } from 'class-validator';
import { ServiceEntry } from '../../domain/serviceCollections/ServiceEntry';

/**
*A class which contains proporties of ServiceEntry that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceEntryDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceCollectionId: string;
  /**
*A method that mapes  UpdateServiceEntryDto object data to  ServiceEntry domain object
*@returns ServiceEntry domain object which contains ServiceEntry  information
*/
  static fromDTO(serviceEntryDto: UpdateServiceEntryDto): ServiceEntry {
    const serviceEntry: ServiceEntry = new ServiceEntry();
    serviceEntry.id = serviceEntryDto.id;
    serviceEntry.serviceId = serviceEntryDto.serviceId;
    serviceEntry.serviceCollectionId = serviceEntryDto.serviceCollectionId;



    return serviceEntry;
  }
}
/**
*A class wich contains proporties of ServiceEntry that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceEntryDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceId: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  serviceCollectionId: string;
  /**
*A method that mapes  CreateServiceEntryDto object data to  ServiceEntry domain object
*@returns ServiceEntry domain object which contains ServiceEntry  information
*/
  static fromDTO(serviceEntryDto: CreateServiceEntryDto): ServiceEntry {
    const serviceEntry: ServiceEntry = new ServiceEntry();
    serviceEntry.id = serviceEntryDto.id;
    serviceEntry.serviceId = serviceEntryDto.serviceId;
    serviceEntry.serviceCollectionId = serviceEntryDto.serviceCollectionId;

    return serviceEntry;
  }
}