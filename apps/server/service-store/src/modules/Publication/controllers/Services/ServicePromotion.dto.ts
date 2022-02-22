import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { ServicePromotion } from '../../domain/ServicePromotions/servicePromotion';

/**
*A class which contains proporties of ServicePromotion that used to receive paramamer values to be updated in the database
*/
export class UpdateServicePromotionDto {

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
  @IsDate()
  from: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  to: Date;


  /**
*A method that mapes  UpdateServicePromotionDto object data to  ServicePromotion domain object
*@returns ServicePromotion domain object which contains ServicePromotion  information
*/
  static fromDTO(servicePromotionDto: UpdateServicePromotionDto): ServicePromotion {
    const servicePromotion: ServicePromotion = new ServicePromotion();

    servicePromotion.id = servicePromotionDto.id;



    servicePromotion.serviceId = servicePromotionDto.serviceId;



    servicePromotion.from = servicePromotionDto.from;



    servicePromotion.to = servicePromotionDto.to;


    return servicePromotion;
  }
}
/**
*A class wich contains proporties of ServicePromotion that used to receive paramamer values to be saved to database
*
*/
export class CreateServicePromotionDto {

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
  @IsDate()
  from: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  to: Date;


  /**
*A method that mapes  CreateServicePromotionDto object data to  ServicePromotion domain object
*@returns ServicePromotion domain object which contains ServicePromotion  information
*/
  static fromDTO(servicePromotionDto: CreateServicePromotionDto): ServicePromotion {
    const servicePromotion: ServicePromotion = new ServicePromotion();

    servicePromotion.id = servicePromotionDto.id;

    servicePromotion.serviceId = servicePromotionDto.serviceId;

    servicePromotion.from = servicePromotionDto.from;

    servicePromotion.to = servicePromotionDto.to;
    return servicePromotion;
  }
}