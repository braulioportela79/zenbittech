import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';
export declare class FeedbackService {
    private readonly repository;
    constructor(repository: Repository<Feedback>);
    create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
    findAll(): Promise<Feedback[]>;
    findOneBy(id: string): Promise<Feedback>;
    update(id: string, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback>;
    remove(id: string): Promise<Feedback>;
}
