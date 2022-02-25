import { Logger } from "@nestjs/common";
import { Like } from "./like";

export class Review {
    constructor() { }
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    likesDetail: Like[];
    
async createLike(createLike: Like) {
        this.likesDetail.push(createLike);
        Logger.log(this.likesDetail);

    }
    async deleteLike(likeId: string) {
        this.likesDetail = this.likesDetail.filter(element => element.id != likeId);
    }
}
