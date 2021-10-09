import { ICreateServiceProviderDTO } from "../../dtos/ICreateServiceProviderDTO";
import { ServiceProviderRepository } from "../../repositories/serviceProviderRepository";


class CreateServiceProviderService {
  async execute({ cnpj, corporate_name, opening_date, phone, email, cep }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProviderRepository = new ServiceProviderRepository();

    const serviceProvider = await serviceProviderRepository.findByEmail(email);

    if (serviceProvider) {
      throw new Error("This e-mail already in use!");
    }

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