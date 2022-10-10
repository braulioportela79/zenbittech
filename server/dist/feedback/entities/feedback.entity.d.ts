import { BaseEntity } from 'typeorm';
export declare class Feedback extends BaseEntity {
    id: string;
    updatedAt: Date;
    name: string;
    email: string;
    message: string;
}
