export interface User {
  id: number;
  name: string;
  email: string;
}

export type Users = User[];
export type UserId = User['id'];
