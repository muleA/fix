export default interface Review{
    id: string;
    title: string;
    body: string;
    serviceId: string;
    userId: string;
    status: string;
    likes: number;
    likesDetail: Like[];
}
interface Like{
    id: string;
    reviewId: string;
    userId: string;
    createdAt: Date;
 
}