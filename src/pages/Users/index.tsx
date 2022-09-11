import UsersConfiguration from '../../components/User/UserConfiguration';
import { BackBox, PageContainer } from '../../styles/styles';

const UsersPage = () => {
  const token = localStorage.getItem('token');

  return (
    !!token ?
      <PageContainer>
        <h1>Usuários</h1>
        <BackBox>
          <UsersConfiguration />
        </BackBox>
      </PageContainer>
      :
      <h1>Página Restrita: faça o login para acessar</h1>
  );
}

export default UsersPage;
