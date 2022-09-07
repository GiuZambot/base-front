import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`

height: 100vh;

padding: 40pt 0;
background:#fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.div-image-error {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 70%;
  width: 100%;
  background-position: center;
  margin-top: 20pt;
}

.content-box {
  text-align: center;
  margin-top: 30pt;
}

.message-error {
  text-align: center;
  font-weight: bold;
  color: #892000;
  margin: 0pt !important;
}
`;

export const BackButton = styled(Button)`
background-color: #b11f24;
color: '#fff';
`;
