export declare abstract class CommonEntity {
    createdBy: string;
    updatedBy?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    deletedBy?: string;
}
