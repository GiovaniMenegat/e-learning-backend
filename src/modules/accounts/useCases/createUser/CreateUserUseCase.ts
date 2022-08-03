import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";



class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {};
    
    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({
            name,
            email,
            password
        });
    }
}

export {CreateUserUseCase}