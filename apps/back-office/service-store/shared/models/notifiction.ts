export default interface NotificationModel {
    type:"success" | "info" | "danger";
    show:boolean;
    message: string;
    childeren?:unknown
}