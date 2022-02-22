import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { DelegatedService } from '../../domain/serviceProviders/DelegatedService';

/**
 *A class which contains proporties of DelegatedService that used to receive paramamer values to be updated in the database
 */
export class UpdateDelegatedServiceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: string;
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  providerId: string;
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  serviceId: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dispatchingRule: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: string;
  /**
   *A method that mapes  UpdateDelegatedServiceDto object data to  DelegatedService domain object
   *@returns DelegatedService domain object which contains DelegatedService  information
   */
  static fromDTO(
    delegatedServiceDto: UpdateDelegatedServiceDto
  ): DelegatedService {
    const delegatedService: DelegatedService = new DelegatedService();

    delegatedService.id = delegatedServiceDto.id;

    delegatedService.providerId = delegatedServiceDto.providerId;

    delegatedService.serviceId = delegatedServiceDto.serviceId;

    delegatedService.title = delegatedServiceDto.title;

    delegatedService.dispatchingRule = delegatedServiceDto.dispatchingRule;

    delegatedService.status = delegatedServiceDto.status;

    return delegatedService;
  }
}
/**
 *A class wich contains proporties of DelegatedService that used to receive paramamer values to be saved to database
 *
 */
export class CreateDelegatedServiceDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  providerId: string;
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  serviceId: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dispatchingRule: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  status: string;
  /**
   *A method that mapes  CreateDelegatedServiceDto object data to  DelegatedService domain object
   *@returns DelegatedService domain object which contains DelegatedService  information
   */
  static fromDTO(
    delegatedServiceDto: CreateDelegatedServiceDto
  ): DelegatedService {
    const delegatedService: DelegatedService = new DelegatedService();

    delegatedService.providerId = delegatedServiceDto.providerId;

    delegatedService.serviceId = delegatedServiceDto.serviceId;

    delegatedService.title = delegatedServiceDto.title;

    delegatedService.dispatchingRule = delegatedServiceDto.dispatchingRule;

    delegatedService.status = delegatedServiceDto.status;
    return delegatedService;
  }
}
