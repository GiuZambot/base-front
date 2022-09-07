import {
  Button,
  Form,
  Input,
  Modal,
  notification
} from 'antd';
import { createUser, updateUser } from '../../../services/user.service';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';

interface UserAddDialogProps {
  fetchUsers: () => void;
  user?: User;
}

const UserAddDialog = ({ fetchUsers, user }: UserAddDialogProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [form] = Form.useForm();

  const handleSaveUser = async (values: User) => {
    try {
      if (!values.email) {
        notification.warning({
          message: "É preciso ao menos o e-mail para salvar um registro"
        });
        return;
      }
      const UserData: User = {
        name: values.name,
        address: values.address,
        bornin: values.bornin,
        tel: values.tel,
        category: values.category,
        coment: values.coment,
        email: values.email
      };

      if (!!values.id) {
        await updateUser(UserData);
      } else {
        await createUser(UserData);
      }
      setShowDialog(false);
      fetchUsers()
    } catch (error) {
      notification.error({
        message: 'Não foi possível salvar usuário',
      }
      );
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowDialog(true)}
        className='primary-button'
      >
        {user?.id ? <EditOutlined /> : "Cadastrar Pessoa"}
      </Button>
      <Modal
        closable
        onCancel={() => setShowDialog(false)}
        visible={showDialog}
        footer={false}
        destroyOnClose={true}
      >
        <h2>Cadastro de pessoa</h2>
        <Form
          form={form}
          name='npsRatingsForm'
          onFinish={handleSaveUser}
          initialValues={user}
        >
          <Form.Item name='id'>
            <Input hidden />
          </Form.Item>
          <Form.Item name='name'>
            <Input allowClear={true} placeholder='Nome' />
          </Form.Item>
          <Form.Item name='address'>
            <Input allowClear={true} placeholder='Endereço' />
          </Form.Item>
          <Form.Item name='bornin'>
            <Input allowClear={true} placeholder='Nascimento' />
          </Form.Item>
          <Form.Item name='tel'>
            <Input allowClear={true} placeholder='Telefone' />
          </Form.Item>
          <Form.Item name='category'>
            <Input allowClear={true} placeholder='Categoria' />
          </Form.Item>
          <Form.Item name='email'>
            <Input allowClear={true} placeholder='E-mail' />
          </Form.Item>
          <Form.Item name='coment'>
            <Input allowClear={true} placeholder='Observação' />
          </Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            data-testid='btn-submit'
          >
            Salvar
          </Button>

        </Form>
      </Modal>
    </>
  );

}

export default UserAddDialog;
