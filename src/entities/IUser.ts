export interface IUserID {
  id: number;
}

export interface IUserUsername {
  username: string;
}

export interface IUserEmail {
  email: string;
}

export interface IUserLogin extends IUserEmail {
  password: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserRegister extends IUserUsername, IUserEmail{}

export default interface IUser extends IUserID, IUserUsername, IUserLogin{}