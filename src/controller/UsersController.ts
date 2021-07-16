import { Request, Response } from "express";
import { UsersRepository } from "../Repository/UsersRepository";

class UsersController {
  
  create = async (request: Request, response: Response) => {
    const usersRepository = new UsersRepository();
    
    await usersRepository.create(request.body);

    return response.json('User created');

  }
}

export { UsersController }