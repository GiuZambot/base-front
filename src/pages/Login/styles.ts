import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  #loginForm {
    border: 1px solid #BBB;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .ant-btn-submit {
    justify-self: end;
  }
`;
