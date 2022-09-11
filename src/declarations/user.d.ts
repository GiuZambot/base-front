interface User {
  id?: string;
  name: string;
  address: string;
  bornin: string;
  tel: string;
  category: string;
  coment: string;
  email: string;
  created_at?: string;
  senha?: string | null;
}

interface LoginForm {
  email: string;
  senha: string;
}
