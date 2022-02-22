import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUUID, IsString } from 'class-validator';
import { ServiceDependency } from '../../domain/ServiceDependencys/serviceDependency';

/**
*A class which contains proporties of ServiceDependency that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceDependencyDto {

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
  dependsOn: string;

  @ApiProperty()
  @IsString()
  type: string;

  /**
*A method that mapes  UpdateServiceDependencyDto object data to  ServiceDependency domain object
*@returns ServiceDependency domain object which contains ServiceDependency  information
*/
  static fromDTO(serviceDependencyDto: UpdateServiceDependencyDto): ServiceDependency {
    const serviceDependency: ServiceDependency = new ServiceDependency();

    serviceDependency.id = serviceDependencyDto.id;



    serviceDependency.serviceId = serviceDependencyDto.serviceId;



    serviceDependency.dependsOn = serviceDependencyDto.dependsOn;



    serviceDependency.type = serviceDependencyDto.type;


    return serviceDependency;
  }
}
/**
*A class wich contains proporties of ServiceDependency that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceDependencyDto {

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
  dependsOn: string;

  @ApiProperty()
  @IsString()
  type: string;

  /**
*A method that mapes  CreateServiceDependencyDto object data to  ServiceDependency domain object
*@returns ServiceDependency domain object which contains ServiceDependency  information
*/
  static fromDTO(serviceDependencyDto: CreateServiceDependencyDto): ServiceDependency {
    const serviceDependency: ServiceDependency = new ServiceDependency();

    serviceDependency.id = serviceDependencyDto.id;

    serviceDependency.serviceId = serviceDependencyDto.serviceId;

    serviceDependency.dependsOn = serviceDependencyDto.dependsOn;

    serviceDependency.type = serviceDependencyDto.type;
    return serviceDependency;
  }
}