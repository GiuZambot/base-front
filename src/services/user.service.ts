import { Api } from './api.service';

export const getUser = async (id: string): Promise<User> => {
  return (Api).Get(`/usuario/${id}`);
};

export const getAllUsers = async (): Promise<User[]> => {
  return (Api).Get('/usuarios');
};

export const createUser = async (UserForm: User) => {
  return (Api).Post('/usuario', UserForm);
}

export const updateUser = async (UserForm: User) => {
  return (Api).Put('/usuario', UserForm);
}

export const login = async (loginForm: LoginForm) => {
  return (Api).Post('/login', loginForm);
}
