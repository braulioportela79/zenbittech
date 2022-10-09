import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ name: 'user_name', type: 'varchar', length: 100 })
  user_name: string;

  @Column({ name: 'user_email', type: 'varchar', length: 100 })
  user_email: string;

  @Column({ name: 'message', type: 'varchar', length: 255 })
  message: string;
}
