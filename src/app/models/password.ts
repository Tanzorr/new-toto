export interface Password {
  id: string | number;
  name: string;
  description: string;
  createdAt: Date | '';
  updatedAt: Date | '';
  vault_id: string | number;
}

export class CreatePassword {
  name: string = '';
  value: string = '';
  description: string = '';
  vault_id: string | number = '';
}
