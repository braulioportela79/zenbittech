import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
   
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @IsNotEmpty()
  user_email: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
