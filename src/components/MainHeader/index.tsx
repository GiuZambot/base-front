import logOutIcon from '../../assets/logout.svg';
import styled from 'styled-components';
import { Layout, Popconfirm } from 'antd';
import { UsersIcon } from '../../assets/icons/ComponentIcons';

const HeaderLayout = styled(Layout.Header)`
  background-color: #475055;
  display: flex;
  justify-content: space-between;
  color: white;

  div {
    gap: 15px;
    display: flex;
  }
`;

const MainHeader = () => {
  return (
    <HeaderLayout>
      <UsersIcon size={70} />
      <div>
        <span>Olá!</span>
        <Popconfirm
          title="Deseja mesmo sair?"
          okText="Sim"
          cancelText="Não"
        >
          <img src={logOutIcon} alt="Ícone de Logout" width="10%" />
        </Popconfirm>
      </div>
    </HeaderLayout>
  );
}

export default MainHeader;
