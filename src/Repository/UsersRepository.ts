import { EntityRepository, getMongoRepository, MongoRepository, Repository } from "typeorm";
import { Users } from "../entity/Users";

interface IUser {
  firstName: string,
  lastName: string
}

@EntityRepository(Users)
class UsersRepository {

  private usersRepository: MongoRepository<Users>;

  constructor(){
     this.usersRepository = getMongoRepository(Users);
  }

  create = async ({ firstName, lastName }: IUser )=> {
    const user = this.usersRepository.create({
      firstName,
      lastName
    });

    await this.usersRepository.save(user);
  }
}

export { UsersRepository };