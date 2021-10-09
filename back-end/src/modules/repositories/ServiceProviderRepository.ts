import { getRepository, Repository } from 'typeorm';
import { ServiceProvider } from '../entities/ServiceProvider';
import { ICreateServiceProviderDTO } from '../dtos/ICreateServiceProviderDTO';

class ServiceProviderRepository {
  private repository: Repository<ServiceProvider>;

  constructor() {
    this.repository = getRepository(ServiceProvider);
  }

  async create({ cnpj, corporate_name, opening_date, phone, email, cep }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProvider = this.repository.create({
      cnpj,
      corporate_name,
      opening_date,
      phone,
      email,
      cep
    });

    await this.repository.save(serviceProvider);
  }

  async findByEmail(email: string): Promise<ServiceProvider> {
    const serviceProvider = this.repository.findOne({ email });
    return serviceProvider;
  }

  async list(): Promise<Array<ServiceProvider>> {
    return await this.repository.find();
  }
}

export { ServiceProviderRepository };