import { Request, Response } from "express";
import { CreateServiceProviderService } from "./CreateServiceProviderService";


class CreateServiceProviderController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { cnpj, corporate_name, opening_date, phone, email, cep } = req.body;

      const createServiceProviderService = new CreateServiceProviderService();

      await createServiceProviderService.execute({ cnpj, corporate_name, opening_date, phone, email, cep });

      return res.status(201).send();

    } catch (err) {
      console.error(err);
      return res.status(400).json(err.message);
    }
  }
}

export { CreateServiceProviderController };