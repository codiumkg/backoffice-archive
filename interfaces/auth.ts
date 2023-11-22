export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  MANAGER = "MANAGER",
  TEACHER = "TEACHER",
}
export interface ILogin {
  username: string;
  password: string;
}

export interface IUserData {
  username: string;
  role: Role;
}
