import { ApiProperty } from '@nestjs/swagger';
import { ApplicationForm } from '../../domain/services/ApplicationForm';

 
/**
*A class which contains proporties of ApplicationForm that used to put data to be returned to client
*
*/
export class ApplicationFormPresenter {
     
@ApiProperty()
title: string;
  
@ApiProperty()
formUrl: string;
  
@ApiProperty()
status: string;
  
@ApiProperty()
taskName: string;
/**
*A constructor which copy  ApplicationForm domain object Property value to  ApplicationFormPresenter properties
*/
constructor(applicationForm: ApplicationForm) {
  
this.title = applicationForm.title;  

  
this.formUrl = applicationForm.formUrl;  

  
this.status = applicationForm.status;  

  
this.taskName = applicationForm.taskName;  

  
    
  }
}