import { Progress } from 'antd';
import { Container } from './styles';

interface CircularProgressProps {
  styles?: string;
  show?: boolean;
}

const CustomCircularProgress = ({ styles, show = false }: CircularProgressProps) => {
  return (
    <Container styles={styles} show={show}>
      <Progress />
    </Container >
  );
};

export default CustomCircularProgress;
