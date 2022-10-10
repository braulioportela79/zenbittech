import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
   
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
