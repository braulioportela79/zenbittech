import { BaseEntity } from 'typeorm';
export declare class Feedback extends BaseEntity {
    id: string;
    updatedAt: Date;
    user_name: string;
    user_email: string;
    message: string;
}
