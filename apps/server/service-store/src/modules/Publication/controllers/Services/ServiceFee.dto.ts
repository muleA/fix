import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsDecimal } from 'class-validator';
import { ServiceFee } from '../../domain/ServiceFees/serviceFee';

/**
*A class which contains proporties of ServiceFee that used to receive paramamer values to be updated in the database
*/
export class UpdateServiceFeeDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
  @IsString()
  description: string;

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


    return serviceFee;
  }
}
/**
*A class wich contains proporties of ServiceFee that used to receive paramamer values to be saved to database
*
*/
export class CreateServiceFeeDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
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
  @IsString()
  description: string;

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
    return serviceFee;
  }
}