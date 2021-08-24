/*
 * @Author: wkpan2
 * @Date: 2021-08-23 10:01:44
 * @LastEditTime: 2021-08-24 16:26:33
 * @Description:
 */

import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photo')
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.photos)
  user: UserEntity;

  @Column({ type: 'varchar', length: 80 })
  url: string;
}
