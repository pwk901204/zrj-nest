/*
 * @Author: wkpan2
 * @Date: 2021-08-07 17:47:48
 * @LastEditTime: 2021-08-24 16:54:56
 * @Description:
 */

import { PhotoEntity } from 'src/modules/photo/entities/phote.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column('varchar')
  password: string;

  @Column()
  status: boolean;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: [];
}
