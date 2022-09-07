interface ResponseData<T> {
  resultList: T;
  totalSize: number;
  totalList: number;
}
interface KeyValue {
  [key: string]: string;
}

interface Pagination {
  page: number;
  maxItensPage: number;
}

interface Pages {
  maxPage: number;
  totalSize: number;
  itensSize: number;
}

interface HandleSearch {
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  setSearch: Dispatch<React.SetStateAction<string>>;
  setPagination: Dispatch<React.SetStateAction<Pagination>>;
  setRefreshTable?: Dispatch<React.SetStateAction<boolean>>;
}

type APIErrors = {
  errors: string[]
}
