import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { ServiceProvider } from './ServiceProvider';

@Entity('contact')
class Contact {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'service_provider_id' })
  @ManyToOne(() => ServiceProvider)
  service_provider: ServiceProvider;

  @Column()
  service_provider_id: string;

  @Column()
  name: string;

  @Column()
  department: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Contact };