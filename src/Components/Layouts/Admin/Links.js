import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export let links = [
    {
        key: '/dashboard/',
        icon: <VideoCameraOutlined />,
        label: <NavLink to={'/dashboard/'}>Yangiliklar</NavLink>,
    },
    {
        key: '/dashboard/categoriyes',
        icon: <UploadOutlined />,
        label: <NavLink to={'/dashboard/categoriyes'}>Kategoriyalar</NavLink>,
    },
    {
        key: '/dashboard/users',
        icon: <UserOutlined />,
        label: <NavLink to={'/dashboard/users'}>Foydalanuvchilar</NavLink>,
    },
]