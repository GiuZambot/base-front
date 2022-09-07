import { AxiosResponse } from 'axios';
import { Api } from './api.service';

export const getUsers = async (filters?: UserFilters): Promise<AxiosResponse<ResponseData<User[]>>> => {
  return (await Api).Get('/users', filters);
};

export const getAllUsers = async (filters?: UserFilters): Promise<AxiosResponse<ResponseData<User[]>>> => {
  return (await Api).Get('/users/allUsers', filters);
};

export const createUser = async (UserForm: UserForm) => {
  return (await Api).Post('/users', UserForm);
}

export const updateUser = async (UserForm: User) => {
  return (await Api).Put('/users', UserForm);
}

export const setDelegateForUser = async (delegatingUserId: string, delegateUserId: string) => {
  return (await Api).Put(`/users/${delegatingUserId}/delegate/?delegateId=${delegateUserId}`, {});
}

export const removeDelegateForUser = async (delegatingUserId: string) => {
  return (await Api).Delete(`/users/${delegatingUserId}/delegate/`);
}
