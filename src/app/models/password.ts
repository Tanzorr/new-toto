export interface Password {
  id: string | number;
  name: string;
  description: string;
  createdAt: Date | '';
  updatedAt: Date | '';
  vault_id: string | number;
}
