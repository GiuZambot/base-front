import CustomCircularProgress from '../../CustomCircularProgress';
import UserAddDialog from '../UserAddDialog';
import { Container } from './styles';
import { getAllUsers } from '../../../services/user.service';
import { handleSearch } from '../../methods';
import { Input, notification, Table, TablePaginationConfig } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { ColumnType } from 'antd/lib/table';

const UserConfiguration = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'test',
      email: 'test',
      birthDate: '10/12/1979',
      cel: 'test',
      address: 'test'
    },
    {
      id: '2',
      name: 'test2',
      email: 'test2',
      birthDate: '10/12/1979',
      cel: 'test2',
      address: 'test2'
    },
    {
      id: '3',
      name: 'test3',
      email: 'test3',
      birthDate: '10/12/1979',
      cel: 'test3',
      address: 'test3'
    },
  ]);
  const [pagination, setPagination] = useState({ page: 1, maxItensPage: 10 });
  const [pages, setPages] = useState({ maxPage: 0, totalSize: 0, itensSize: 0 });
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getAllUsers(
        {
          page: pagination.page,
          MaxItensPage: pagination.maxItensPage,
          search
        }
      );
      setUsers(data.resultList);
      setPages(
        {
          maxPage: +Math.ceil((data.totalSize / pagination.maxItensPage)).toFixed(0),
          totalSize: data.totalSize,
          itensSize: data.totalList
        }
      );
    } catch (error) {
      notification.error(
        { message: 'Não foi possível carregar a lista de usuários...' }
      )
    } finally {
      setLoading(false);
    }
  }, [pagination, search]);

  useEffect(() => {
    //fetchUsers();
  }, [fetchUsers]);

  const handlePagination = ({ current = 1, pageSize = 10 }: TablePaginationConfig) => {
    setPagination({ page: current, maxItensPage: pageSize });
  }

  const columns: ColumnType<User>[] = [
    {
      title: 'Nome',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'E-mail',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Telefone',
      key: 'cel',
      dataIndex: 'cel',
    }, {
      title: 'Nascimento',
      key: 'birthDate',
      dataIndex: 'birthDate',
    }, {
      title: 'Endereço',
      key: 'address',
      dataIndex: 'address',
    }
  ];

  return (
    <Container>
      <CustomCircularProgress show={loading} />
      <div className='user-search-container'>
        <div className='user-search-input'>
          <Input
            onChange={(event) => handleSearch({ event, setSearch, setPagination })}
            className='search-user'
            placeholder='Pesquisar ..'
          />
        </div>
        <UserAddDialog fetchUsers={fetchUsers} />
      </div>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{
          position: ["bottomCenter"],
          current: pagination.page,
          total: pages.totalSize,
        }}
        onChange={handlePagination}
        scroll={{ x: "max-content" }}
      />
    </Container >
  );
}

export default UserConfiguration;
