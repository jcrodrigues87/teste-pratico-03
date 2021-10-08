import { getRepository, Repository } from 'typeorm';
import { ServiceProvider } from '../entities/ServiceProvider';
import { ICreateServiceProviderDTO } from '../dtos/ICreateServiceProviderDTO';

class ServiceProviderRepository {
  private repository: Repository<ServiceProvider>;

  constructor() {
    this.repository = getRepository(ServiceProvider);
  }

  async create({ cnpj, corporate_name, opening_date, phone, email, cep, address }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProvider = this.repository.create({
      cnpj,
      corporate_name,
      opening_date,
      phone,
      email,
      cep,
      address
    });

    await this.repository.save(serviceProvider);
  }
}

export { ServiceProviderRepository };