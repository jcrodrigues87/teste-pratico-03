import { Request, Response } from 'express';

import { ListServiceProviderService } from './ListServiceProviderService';

class ListServiceProviderController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listServiceProviderService = new ListServiceProviderService();

      const result = await listServiceProviderService.execute();

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ "Error": err.message });
    }
  }
}

export { ListServiceProviderController };