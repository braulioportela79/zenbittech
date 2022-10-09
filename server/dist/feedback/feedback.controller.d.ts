import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(createFeedbackDto: CreateFeedbackDto): Promise<import("./entities/feedback.entity").Feedback>;
    findAll(): Promise<import("./entities/feedback.entity").Feedback[]>;
    findOneBy(id: string): Promise<import("./entities/feedback.entity").Feedback>;
    update(id: string, updateFeedbackDto: UpdateFeedbackDto): Promise<import("./entities/feedback.entity").Feedback>;
    remove(id: string): Promise<import("./entities/feedback.entity").Feedback>;
}
