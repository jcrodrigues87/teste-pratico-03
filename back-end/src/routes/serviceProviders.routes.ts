import { Router } from 'express';
import { CreateContactController } from '../modules/useCases/createContact/CreateContactController';
import { CreateServiceProviderController } from '../modules/useCases/createServiceProvider/CreateServiceProviderController';
import { ListServiceProviderController } from '../modules/useCases/listServiceProvider/ListServiceProviderController';

const serviceProvidersRoutes = Router();

const createServiceProviderController = new CreateServiceProviderController();
const createContactController = new CreateContactController();
const listServiceProviderController = new ListServiceProviderController();

serviceProvidersRoutes.post('/', createServiceProviderController.handle);
serviceProvidersRoutes.get('/', listServiceProviderController.handle);
serviceProvidersRoutes.post('/contact/:id', createContactController.handle);

export { serviceProvidersRoutes };