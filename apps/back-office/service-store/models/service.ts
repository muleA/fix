import Image from "./image";
import Qualification from "./qualification";
import Version from "./version";
import Instruction from "./instruction";
import Language from "./language";
import ApplicationForm from "./application_form";
export default interface service{
    Id:string;
    Name:string;
    Description:string;
    Code:string;
    FQName:string;
    Images:Image[];
    Qualifications:Qualification[];
    Versions:Version[];
    Instructions:Instruction[];
    Languages:Language[];
    ApplicationForms:ApplicationForm[];
    Status:"Draft"|"Approve"|"Adjust"|"Reject";
    IsPublic:boolean;
}

