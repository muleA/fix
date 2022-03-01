import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsString, IsDecimal } from 'class-validator';
import { ServiceFee } from '../../domain/services/ServiceFee';


/**
*A class which contains proporties of ServiceFee that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceFeeDto {

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  id: string;

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  fee: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  createdBy: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  updatedBy: string;

  /**
*A method that mapes  UpdateServiceFeeDto object data to  ServiceFee domain object
*@returns ServiceFee domain object which contains ServiceFee  information
*/
  static fromDTO(serviceFeeDto: UpdateServiceFeeDto): ServiceFee {
    const serviceFee: ServiceFee = new ServiceFee();

    serviceFee.id = serviceFeeDto.id;



    serviceFee.serviceId = serviceFeeDto.serviceId;



    serviceFee.fee = serviceFeeDto.fee;



    serviceFee.currency = serviceFeeDto.currency;



    serviceFee.description = serviceFeeDto.description;



    serviceFee.createdBy = serviceFeeDto.createdBy;



    serviceFee.updatedBy = serviceFeeDto.updatedBy;



    return serviceFee;
  }
}
/**
*A class wich contains proporties of ServiceFee that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceFeeDto {

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  id: string;

  @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  fee: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  createdBy: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  updatedBy: string;

  /**
*A method that mapes  CreateServiceFeeDto object data to  ServiceFee domain object
*@returns ServiceFee domain object which contains ServiceFee  information
*/
  static fromDTO(serviceFeeDto: CreateServiceFeeDto): ServiceFee {
    const serviceFee: ServiceFee = new ServiceFee();

    serviceFee.id = serviceFeeDto.id;

    serviceFee.serviceId = serviceFeeDto.serviceId;

    serviceFee.fee = serviceFeeDto.fee;

    serviceFee.currency = serviceFeeDto.currency;

    serviceFee.description = serviceFeeDto.description;

    serviceFee.createdBy = serviceFeeDto.createdBy;

    serviceFee.updatedBy = serviceFeeDto.updatedBy;
    return serviceFee;
  }
}