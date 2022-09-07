import styled from 'styled-components';

interface SizeIconProps {
  size: number;
}

export const SizeIcon = styled.span<SizeIconProps>`
  width: ${props => props.size}px;
  display: inline-block;
`;
