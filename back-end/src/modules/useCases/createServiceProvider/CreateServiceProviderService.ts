import { ICreateServiceProviderDTO } from "../../dtos/ICreateServiceProviderDTO";
import { ServiceProviderRepository } from "../../repositories/serviceProviderRepository";


class CreateServiceProviderService {
  async execute({ cnpj, corporate_name, opening_date, phone, email, cep }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProviderRepository = new ServiceProviderRepository();

    await serviceProviderRepository.create({
      cnpj,
      corporate_name,
      opening_date,
      phone,
      email,
      cep
    });
  }
}

export { CreateServiceProviderService };