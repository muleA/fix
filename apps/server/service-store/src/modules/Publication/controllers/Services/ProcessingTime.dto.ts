import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProcessingTime } from '../../domain/services/ProcessingTime';


/**
*A class which contains proporties of ProcessingTime that used to receive paramamer values to be updated in the database
*/
export class UpdateProcessingTimeDto {

  @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  time: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsString()
  description: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;

  /**
*A method that mapes  UpdateProcessingTimeDto object data to  ProcessingTime domain object
*@returns ProcessingTime domain object which contains ProcessingTime  information
*/
  static fromDTO(processingTimeDto: UpdateProcessingTimeDto): ProcessingTime {
    const processingTime: ProcessingTime = new ProcessingTime();

    processingTime.id = processingTimeDto.id;



    processingTime.serviceId = processingTimeDto.serviceId;



    processingTime.time = processingTimeDto.time;



    processingTime.currency = processingTimeDto.currency;



    processingTime.description = processingTimeDto.description;



    processingTime.updatedBy = processingTimeDto.updatedBy;


    return processingTime;
  }
}
/**
*A class wich contains proporties of ProcessingTime that used to receive paramamer values to be saved to database
*
*/
export class CreateProcessingTimeDto {

  @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  id: string;

  @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  serviceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  time: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty()
  @IsString()
  description: string;

  // @ApiProperty() 
  // @IsNotEmpty()
  // @IsUUID()// will un comment when we build the user management
  createdBy: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsUUID() // will un comment when we build the user management
  updatedBy: string;

  /**
*A method that mapes  CreateProcessingTimeDto object data to  ProcessingTime domain object
*@returns ProcessingTime domain object which contains ProcessingTime  information
*/
  static fromDTO(processingTimeDto: CreateProcessingTimeDto): ProcessingTime {
    const processingTime: ProcessingTime = new ProcessingTime();

    processingTime.id = processingTimeDto.id;

    processingTime.serviceId = processingTimeDto.serviceId;

    processingTime.time = processingTimeDto.time;

    processingTime.currency = processingTimeDto.currency;

    processingTime.description = processingTimeDto.description;

    processingTime.createdBy = processingTimeDto.createdBy;

    processingTime.updatedBy = processingTimeDto.updatedBy;
    return processingTime;
  }
}