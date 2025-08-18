export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  refreshToken?: string | null;
}
