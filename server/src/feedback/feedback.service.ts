import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly repository: Repository<Feedback>,
  ) {}

  create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = this.repository.create(createFeedbackDto);
    return this.repository.save(feedback);
  }

  findAll(): Promise<Feedback[]> {
    return this.repository.find();
  }

  findOneBy(id: string): Promise<Feedback> {
    return this.repository.findOneBy({ id });
  }

  async update(
    id: string,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback> {
    const feedback = await this.repository.preload({
      id: id,
      ...updateFeedbackDto,
    });
    if (!feedback) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(feedback);
  }

  async remove(id: string) {
    const feedback = await this.findOneBy(id);
    return this.repository.remove(feedback);
  }
}
