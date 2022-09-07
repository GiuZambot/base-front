import ErrorBoundary from './components/ErrorBoundary';
import MainHeader from './components/MainHeader';
import MainMenu from './components/MainMenu';
import UsersPage from './pages/Users';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { ContentLayout, OuterLayout } from './styles/styles';
import { Layout } from 'antd';
import { useState } from 'react';

const AppRoutes = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const { Footer, Sider } = Layout;
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MainHeader />
        <OuterLayout>
          <Sider
            width={140}
            theme="light"
            collapsed={menuCollapse}
            collapsedWidth={50}
          >
            <MainMenu
              menuCollapse={menuCollapse}
              setMenuCollapse={setMenuCollapse} />
          </Sider>
          <Layout>
            <ContentLayout>
              <Routes>
                <Route path='users' element={<UsersPage />} />
                <Route path='*' element={<Navigate to='users' />} />
              </Routes>
            </ContentLayout>
            <Footer style={{ textAlign: "center" }}>Base - @Bex</Footer>
          </Layout>
        </OuterLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRoutes;
