
import { createUser } from '../../../services/user.service';
import { Button, Modal, notification } from 'antd';
import { useState } from 'react';

interface UserAddDialogProps {
  fetchUsers: () => void;
}

const UserAddDialog = ({ fetchUsers }: UserAddDialogProps) => {
  const [userForm, setUserForm] = useState<UserForm>({
    name: '',
    email: '',
    password: '',
  });
  const [showDialog, setShowDialog] = useState(false);

  const handleSaveUser = async () => {
    try {
      if (
        !userForm.name ||
        !userForm.email
      ) {
        setShowDialog(false);
        notification.info(
          { message: 'É necessário preencher todos os campos para criar novo usuário.' }
        );
        return;
      }

      const UserData = {
        name: userForm.name,
        email: userForm.email,
        birthDate: new Date(2000, 1, 1).toISOString(),
      };

      await createUser(UserData);
      fetchUsers();
      setUserForm({});
      setShowDialog(false);
    } catch (error) {
      notification.error(
        { message: 'Não foi possível salvar usuário, verifique os campos e tente novamente.' }
      );
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowDialog(true)}
        className='primary-button'
      >
        Cadastrar Pessoa
      </Button>
      <Modal
        visible={showDialog}
      >
      </Modal>
    </>
  );

}

export default UserAddDialog;
