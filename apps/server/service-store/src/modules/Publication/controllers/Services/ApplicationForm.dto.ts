import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsFQDN, IsString, MaxLength } from 'class-validator';
import { ApplicationForm } from '../../domain/ApplicationForms/applicationForm';

/**
*A class which contains proporties of ApplicationForm that used to receive paramamer values to be updated in the database
*/
export class UpdateApplicationFormDto {

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsFQDN()
  formUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  taskName: string;
  /**
*A method that mapes  UpdateApplicationFormDto object data to  ApplicationForm domain object
*@returns ApplicationForm domain object which contains ApplicationForm  information
*/
  static fromDTO(applicationFormDto: UpdateApplicationFormDto): ApplicationForm {
    const applicationForm: ApplicationForm = new ApplicationForm();

    applicationForm.title = applicationFormDto.title;



    applicationForm.formUrl = applicationFormDto.formUrl;



    applicationForm.status = applicationFormDto.status;



    applicationForm.taskName = applicationFormDto.taskName;


    return applicationForm;
  }
}
/**
*A class wich contains proporties of ApplicationForm that used to receive paramamer values to be saved to database
*
*/
export class CreateApplicationFormDto {

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsFQDN()
  formUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  taskName: string;
  /**
*A method that mapes  CreateApplicationFormDto object data to  ApplicationForm domain object
*@returns ApplicationForm domain object which contains ApplicationForm  information
*/
  static fromDTO(applicationFormDto: CreateApplicationFormDto): ApplicationForm {
    const applicationForm: ApplicationForm = new ApplicationForm();

    applicationForm.title = applicationFormDto.title;

    applicationForm.formUrl = applicationFormDto.formUrl;

    applicationForm.status = applicationFormDto.status;

    applicationForm.taskName = applicationFormDto.taskName;
    return applicationForm;
  }
}