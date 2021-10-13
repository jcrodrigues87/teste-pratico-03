import { getRepository, Repository } from 'typeorm';
import { Contact } from '../entities/Contact';
import { ICreateContactDTO } from '../dtos/ICreateContactDTO';

class ContactRepository {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = getRepository(Contact);
  }

  async create({ service_provider_id, name, department, email }: ICreateContactDTO): Promise<void> {
    const contact = this.repository.create({
      service_provider_id,
      name,
      department,
      email
    });

    await this.repository.save(contact);
  }
}

export { ContactRepository };