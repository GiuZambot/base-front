import { Button, Form, Input, notification } from "antd";
import { Container } from './styles';
import { login } from '../../services/user.service';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  localStorage.clear();

  const handleLogin = async (loginForm: LoginForm) => {
    try {
      const { data } = await login(loginForm);
      localStorage.setItem("token", data);
      navigate('/users');
    } catch (error) {
      notification.error({ message: 'Erro ao realizar o login, verifique os dados e tente novamente' });
    }
  }

  return (
    <Container>
      <h2>Fazer Login</h2>
      <Form
        form={form}
        name='loginForm'
        onFinish={handleLogin}
      >
        <Form.Item name='email' label='E-mail' >
          <Input type='email' />
        </Form.Item>
        <Form.Item name='senha' label='Senha' >
          <Input type='password' />
        </Form.Item>
        <Button type='primary' htmlType='submit' > Entrar </Button>
      </Form>
    </Container>
  );
}

export default Login;
