import styled from 'styled-components';
import { Layout } from 'antd';

export const OuterLayout = styled(Layout)`
  margin: 0;
  min-height: calc(100% - 64px);
`;

export const ContentLayout = styled(Layout.Content)`
  padding: 2% 3%;
`;

export const BackBox = styled.div`
  padding: 2%;
  border: none;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 12px;
`;

export const PageContainer = styled.section`
  .container {
    display: flex;
    align-items: stretch;
    margin-top: 24px;
  }
  h1 {
    font-size: 32px;
    font-weight: 400;
    color: #1B262C;
    margin-bottom: 2%;
  }
  p {
    margin: 10px;
    font-size: 12px;
    line-height: 14px;
    color: #75797E;
    text-align: right;
  }
`;
