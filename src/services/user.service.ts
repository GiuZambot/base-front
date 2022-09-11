import { buildApi } from "./api.service";

export const getUser = async (id: string): Promise<User> => {

  return buildApi().Get(`/usuario/${id}`);
};

export const getAllUsers = async (): Promise<User[]> => {
  return buildApi().Get('/usuarios');
};

export const createUser = async (UserForm: User) => {
  return buildApi().Post('/usuario', UserForm);
}

export const updateUser = async (UserForm: User) => {
  return buildApi().Put('/usuario', UserForm);
}

export const login = async (loginForm: LoginForm) => {
  return buildApi().Post('/login', loginForm);
}
