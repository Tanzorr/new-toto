import { User } from './user';

export interface SharedAccess {
  id: string | number;
  user_id: User['id'];
  accessible_type: string;
  accessible_id: string | number;
}