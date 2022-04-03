import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

// Role
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';

// Menu
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import "./adminlayout.scss";

const AdminLayout = () => {
    return (
        <div className="admin">
            <Sidebar
                logo="Admin"
                roleList={[
                    {
                        id: 1,
                        icon: <AdminPanelSettingsOutlinedIcon className="icon" />,
                        name: "Admin",
                        link: "/admin"
                    },
                    {
                        id: 2,
                        icon: <ManageAccountsOutlinedIcon className="icon" />,
                        name: "Manager",
                        link: "/manager"
                    },
                    {
                        id: 3,
                        icon: <AccountBoxOutlinedIcon className="icon" />,
                        name: "Translator",
                        link: "/translator"
                    },
                    {
                        id: 4,
                        icon: <SupervisedUserCircleOutlinedIcon className="icon" />,
                        name: "Member",
                        link: "/member"
                    }
                ]}

                menuList={[
                    {
                        id: 1,
                        icon: <PersonOutlineOutlinedIcon className="icon" />,
                        name: "User",
                        link: "user"
                    },
                    {
                        id: 2,
                        icon: <CommentOutlinedIcon className="icon" />,
                        name: "Comment",
                        link: "comment"
                    }
                ]}
            />
            <div className="adminContainer">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;