interface User {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  address: string;
  cel: string;
}

interface UserForm extends Partial<User> {
  id?: string;
  companyUnit?: {
    name: string;
  }
  password?: string;
}

interface UserFilters {
  page?: number;
  MaxItensPage?: number;
  search?: string;
  Adulthood?: boolean;
}
