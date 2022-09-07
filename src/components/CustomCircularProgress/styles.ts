import styled from 'styled-components';

interface ContainerProps {
  styles?: string;
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props => props.show ? 'flex' : 'none')};
  flex: 1;
  justify-content: center;
  align-items: center; 
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background: #fff;
  z-index: 25;
  ${(props => props.styles)}
`;
