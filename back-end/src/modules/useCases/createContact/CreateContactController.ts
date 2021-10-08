import { Request, Response } from "express";

import { CreateContactService } from "./CreateContactService";


class CreateContactController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, department, email } = req.body;

      const createContactService = new CreateContactService();

      await createContactService.execute({
        service_provider_id: id,
        name,
        department,
        email
      });

      return res.status(201).send();

    } catch (err) {
      console.error(err);
      return res.status(400).json({ "Error": err.message });
    }

  }
}

export { CreateContactController };