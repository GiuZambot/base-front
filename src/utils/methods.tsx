import axios from 'axios';

export const checkErrors = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const { errors } = error.response?.data as APIErrors;
    if (Array.isArray(errors)) {
      return (errors || []).join();
    }
  }
  return 'Ocorreu um erro não esperado.';
}
