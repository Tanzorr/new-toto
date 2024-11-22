export interface Vault {
  id: string | number;
  name: string;
  description: string;
  createdAt: Date | '';
  updatedAt: Date | '';
  user_id: string | number;
}
