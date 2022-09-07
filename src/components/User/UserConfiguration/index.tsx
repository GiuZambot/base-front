import UserAddDialog from '../UserAddDialog';
import { ColumnType } from 'antd/lib/table';
import { Container } from './styles';
import { getAllUsers } from '../../../services/user.service';
import { notification, Table } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnFilterItem } from 'antd/lib/table/interface';

export const objectMapSet = <T extends object, U extends keyof T>(arrayOfObjects: T[], field: U): T[] => {
  const map = new Map();
  arrayOfObjects.forEach((x) => map.set(`${x[field]}`, x));
  const set: T[] = [];
  map.forEach((x) => set.push(x));
  return set;
}

const UserConfiguration = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      notification.error(
        { message: 'Não foi possível carregar a lista de usuários...' }
      )
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const names: User[] = objectMapSet<User, keyof User>(users, "name");
  const namesFilter: ColumnFilterItem[] = names.map((x: User) => ({ text: x.name, value: x.name }));

  const emailFilter: ColumnFilterItem[] = names.map((x: User) => ({ text: x.email, value: x.email }));

  const cat: User[] = objectMapSet<User, keyof User>(users, "category");
  const catFilter: ColumnFilterItem[] = cat.map((x: User) => ({ text: x.category, value: x.category }));

  const columns: ColumnType<User>[] = [
    {
      title: 'Nome',
      key: 'name',
      dataIndex: 'name',
      sorter: (a: User, b: User) => a.name > b.name ? -1 : 1,
      filterSearch: true,
      filters: namesFilter,
      onFilter: (value: string | number | boolean, record: User) => record.name === value,
      filterIcon: () => <SearchOutlined />,
    },
    {
      title: 'E-mail',
      key: 'email',
      dataIndex: 'email',
      filterSearch: true,
      filters: emailFilter,
      onFilter: (value: string | number | boolean, record: User) => record.email === value,
      filterIcon: () => <SearchOutlined />,
    },
    {
      title: 'Telefone',
      key: 'tel',
      dataIndex: 'tel',
    },
    {
      title: 'Nascimento',
      key: 'bornin',
      dataIndex: 'bornin',
    },
    {
      title: 'Endereço',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Categoria',
      key: 'category',
      dataIndex: 'category',
      filterSearch: true,
      filters: catFilter,
      onFilter: (value: string | number | boolean, record: User) => record.category === value,
      filterIcon: () => <SearchOutlined />,
    },
    {
      title: 'Observação',
      key: 'coment',
      dataIndex: 'coment',
    },
    {
      title: 'Editar',
      key: 'edit',
      render: (valor: any, user: User) =>
        <UserAddDialog
          user={user}
          fetchUsers={fetchUsers}
        />
    },

  ];

  return (
    <Container>
      <div className='user-search-container'>
        <UserAddDialog fetchUsers={fetchUsers} />
      </div>
      <Table
        loading={loading}
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{
          position: ["bottomCenter"]
        }}
        scroll={{ x: "max-content" }}
      />
    </Container >
  );
}

export default UserConfiguration;
