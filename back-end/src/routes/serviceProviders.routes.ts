import { Router } from 'express';
import { CreateServiceProviderController } from '../modules/useCases/createServiceProvider/CreateServiceProviderController';

const serviceProvidersRoutes = Router();

const createServiceProviderController = new CreateServiceProviderController();

serviceProvidersRoutes.post('/', createServiceProviderController.handle);

export { serviceProvidersRoutes };