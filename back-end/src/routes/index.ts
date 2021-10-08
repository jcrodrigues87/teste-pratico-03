import { Router } from 'express';

import { serviceProvidersRoutes } from './serviceProviders.routes'

const router = Router();

router.use('/providers', serviceProvidersRoutes);

export { router };