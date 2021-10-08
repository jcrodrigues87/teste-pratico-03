import { ICreateContactDTO } from "../../dtos/ICreateContactDTO";
import { ContactRepository } from "../../repositories/ContactRepository";


class CreateContactService {
  async execute({ service_provider_id, name, department, email }: ICreateContactDTO): Promise<void> {
    const contactRepository = new ContactRepository();

    await contactRepository.create({
      service_provider_id,
      name,
      department,
      email
    });
  }
}

export { CreateContactService };