import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { createElement } from "react";
import { UsersIcon } from "../../assets/icons/ComponentIcons";

interface NPSMenuProps {
  menuCollapse: boolean,
  setMenuCollapse: Function
}

const MainMenu = ({ menuCollapse, setMenuCollapse }: NPSMenuProps) => {
  const items = [
    {
      label: menuCollapse ? "Expandir" : "Fechar",
      key: 'hamburguer',
      icon: createElement(menuCollapse ? MenuUnfoldOutlined : MenuFoldOutlined),
      onClick: () => setMenuCollapse(!menuCollapse)
    },
    {
      label: <Link to="users">Pessoas</Link>,
      key: 'base',
      icon: <UsersIcon size={20} />,
    },
  ];

  return (
    <Menu
      mode="vertical"
      defaultSelectedKeys={["base"]}
      items={items}
    />
  )
}

export default MainMenu;
