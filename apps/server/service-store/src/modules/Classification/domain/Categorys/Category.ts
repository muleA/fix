import { ServiceEntity } from "src/modules/Publication/persistence/services/service.entity";

export class Category {
    constructor() { }
    id: string;
    name: string;
    description: string;
    code: string;
    parentId: string;
    services: ServiceEntity[];
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;

}