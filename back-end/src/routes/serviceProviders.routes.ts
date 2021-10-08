import { Router } from 'express';
import { CreateContactController } from '../modules/useCases/createContact/CreateContactController';
import { CreateServiceProviderController } from '../modules/useCases/createServiceProvider/CreateServiceProviderController';

const serviceProvidersRoutes = Router();

const createServiceProviderController = new CreateServiceProviderController();
const createContactController = new CreateContactController();

serviceProvidersRoutes.post('/', createServiceProviderController.handle);
serviceProvidersRoutes.post('/contact/:id', createContactController.handle);

export { serviceProvidersRoutes };