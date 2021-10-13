
import { ServiceProviderRepository } from '../../repositories/ServiceProviderRepository'

class ListServiceProviderService {
  async execute() {
    const serviceProviderRepository = new ServiceProviderRepository();

    const result = serviceProviderRepository.list();

    return result;
  }
}

export { ListServiceProviderService };