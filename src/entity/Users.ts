import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
