import { Entity, Column, OneToMany } from 'typeorm';

import BaseEntity from '~/entities/base.entity';

import AvatarEntity from './avatar.entity';

@Entity()
export default class BackpackEntity extends BaseEntity {
  @Column()
  address: string;

  @OneToMany(() => AvatarEntity, (avatar) => avatar.backpack, {
    cascade: ['insert', 'update'],
  })
  avatars: AvatarEntity[];
}
