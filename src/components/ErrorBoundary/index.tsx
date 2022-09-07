import { BackButton, Container } from './styles';
import {
  Component,
  ComponentClass,
  ErrorInfo,
  ReactNode
} from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
  navigate: Function;
}

interface State {
  hasError: boolean;
  goBack: boolean;
}

const withRouter = (ComponentProp: ComponentClass) => {
  return (props: any) => {
    const navigate = useNavigate();
    return (
      <ComponentProp {...props} navigate={navigate} />
    );
  };
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      goBack: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  handleToMainPage() {
    this.props.navigate('/periods');
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <h2 className='message-error'>
            Oops! Algo deu errado.
          </h2>
          <div className='div-image-error' />
          <BackButton onClick={() => this.handleToMainPage()}>
            Voltar para o início
          </BackButton>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
