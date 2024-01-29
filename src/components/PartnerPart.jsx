// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import { IconButton, Menu, MenuItem } from "@mui/material";
// import { MoreVert, ChevronRight } from "@mui/icons-material";
//
const categories = [
    "Стройка",
    "Сад и досуг",
    "Техника",
    "Всё для дома",
    "Кухня",
    "Ванная комната",
    "Подборки",
];
//
// const middleColumnCategories = [
//     "Садовая мебель",
//     "Товары для полива",
//     "Уход за растениями и выращивание растений",
//     "Павильоны, тенты и зонты",
//     "Изгороди и ограждения",
//     "Порядок в саду",
//     "Велосипеды",
//     "Мангалы, грили, барбекю",
//     "Товары для полива",
// ];
//
// const rightColumnCategories = [
//     "Садовые шланги и аксессуары (187)",
//     "Системы полива (142)",
//     "Переходники и соединители для шлангов (12)",
//     "Наконечники и пистолеты для полива (240)",
//     "Изгороди и ограждения (21)",
// ];
//
// const PartnersPart = () => {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [openMenus, setOpenMenus] = useState([false, false, false]);
//
//     const handleOpenMenu = (event, index) => {
//         setAnchorEl(event.currentTarget);
//         setOpenMenus((prevMenus) =>
//             prevMenus.map((_, i) => (i <= index ? true : false))
//         );
//     };
//
//     const handleCloseMenu = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <Container sx={{ display: "flex", padding: 0, gap: 2, margin: 20 }}>
//             <div className="w-1/4 bg-gray-100 p-5">
//                 <IconButton onClick={(e) => handleOpenMenu(e, 0)}>
//                     <MoreVert />
//                 </IconButton>
//                 <Menu
//                     anchorEl={anchorEl}
//                     open={openMenus[0]}
//                     onClose={handleCloseMenu}
//                 >
//                     {categories.map((category, index) => (
//                         <MenuItem key={index} onClick={(e) => handleOpenMenu(e, 1)}>
//                             {category} <ChevronRight />
//                         </MenuItem>
//                     ))}
//                 </Menu>
//             </div>
//
//             <div className="w-1/4 bg-gray-100 p-5">
//                 <Menu
//                     anchorReference="anchorPosition"
//                     anchorPosition={{ top: 0, left: 300 }}
//                     open={openMenus[1]}
//                     onClose={handleCloseMenu}
//                 >
//                     {middleColumnCategories.map((middleCategory, index) => (
//                         <MenuItem key={index} onClick={(e) => handleOpenMenu(e, 2)}>
//                             {middleCategory} <ChevronRight />
//                         </MenuItem>
//                     ))}
//                 </Menu>
//             </div>
//
//             <div className="w-1/4 bg-gray-100 p-5">
//                 <Menu
//                     anchorReference="anchorPosition"
//                     anchorPosition={{ top: 0, left: 600 }}
//                     open={openMenus[2]}
//                     onClose={handleCloseMenu}
//                 >
//                     {rightColumnCategories.map((rightCategory, index) => (
//                         <MenuItem key={index} onClick={handleCloseMenu}>
//                             {rightCategory}
//                         </MenuItem>
//                     ))}
//                 </Menu>
//             </div>
//         </Container>
//     );
// };
//
// export default PartnersPart;
import React from 'react';
import {AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined,} from '@ant-design/icons';
import {Menu} from 'antd';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Стройка', '1', <MailOutlined />),
    getItem('Сад и досуг', '2', <CalendarOutlined />),
    getItem('Техника', 'sub1', <AppstoreOutlined />, [
        getItem('Садовая мебель', '3'),
        getItem('Товары для полива', '4'),
        getItem('Уход за растениями и выращивание растений', 'sub1-2', null, [
            getItem('Садовые шланги и аксессуары', '5'),
            getItem('Option 6', '6')
        ]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
        </a>,
        'link',
        <LinkOutlined />,
    ),
];
export const CatalogMenu = ({isOpen}) => {
    return (
        isOpen ? <>
            {/*<Divider type="vertical" />*/}
            <br/>
            <br/>
            <Menu
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={"vertical"}
                theme={"light"}
                items={items}
                selectable={true}
                // inlineCollapsed={true}
                triggerSubMenuAction={"click"}
            />
        </> : null
    );
}
