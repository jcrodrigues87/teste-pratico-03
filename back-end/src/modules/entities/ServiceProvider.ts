import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('service_provider')
class ServiceProvider {
  @PrimaryColumn()
  id: string;

  @Column()
  cnpj: string;

  @Column()
  corporate_name: string;

  @Column()
  opening_date: Date;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  cep: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ServiceProvider };