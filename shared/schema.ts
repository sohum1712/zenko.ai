export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

export interface InsertUser {
  username: string;
  email: string;
}
