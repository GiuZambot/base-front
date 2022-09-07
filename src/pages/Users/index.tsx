import { BackBox, PageContainer } from '../../styles/styles';
import UsersConfiguration from '../../components/User/UserConfiguration';
const UsersPage = () => {
  return (
    <PageContainer>
      <h1>Usuários</h1>
      <BackBox>
        <UsersConfiguration />
      </BackBox>
    </PageContainer>
  );
}

export default UsersPage;
