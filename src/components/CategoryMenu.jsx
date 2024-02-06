import React from 'react';
import {AppstoreOutlined, CalendarOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu, Input, Button, Dropdown,Checkbox} from 'antd';

const {SubMenu} = Menu;

const getPriceSubMenu = () => (
    <Menu>
        <Menu.Item key="price-inputs">
            <Input placeholder="Min Price" style={{marginBottom: '8px'}}/>
        </Menu.Item>
        <Menu.Item key="price-inputss">
            <Input placeholder="Max Price" style={{marginBottom: '8px'}}/>
            <Button type="primary" block>
                Submit
            </Button>
        </Menu.Item>
        <Menu.Item key="price-inputsss">
            <Button type="primary" block>
                Submit
            </Button>
        </Menu.Item>
    </Menu>
);
const options = [
    {label: '0.6 кВт (2)', value: '0.6кВт'},
    {label: '0.9 кВт (20)', value: '0.9кВт'},
    {label: '10,000₽ -  20,000₽', value: '10000₽-20000₽'},
    {label: '20,000₽ -  50,000₽', value: '20000₽-50000₽'},
    {label: '50,000₽ -  100,000₽', value: '50000₽-100000₽'},
];
export const CategoryMenu = ({ isOpen, onCategoryChange }) => {
    const handleMenuClick = (item) => {
        onCategoryChange(item.key, item.item.props.title);
    };

    return isOpen ? (
        <>
            <br />
            <br />
            <Menu
                style={{
                    width: 350,
                }}
                defaultSelectedKeys={["1"]}
                mode={"inline"}
                theme={"light"}
                selectable={true}
                triggerSubMenuAction={"click"}
                onClick={handleMenuClick}
            >
                <Menu.Item key="Стройка" icon={<MailOutlined/>}>
                    Стройка
                </Menu.Item>
                <Menu.Item key="Сад и досуг" icon={<CalendarOutlined/>}>
                    Сад и досуг
                </Menu.Item>
                <Menu.Item key="Техника" icon={<AppstoreOutlined/>}>
                    Техника
                </Menu.Item>
                <SubMenu key="sub1-2" title="Уход за растениями и выращивание растений" icon={<AppstoreOutlined />}>
                    <Menu.Item key="Садовые шланги и аксессуары" title="Уход за растениями и выращивание растений">
                        Садовые шланги и аксессуары
                    </Menu.Item>
                    <Menu.Item key="Option 6" title="Уход за растениями и выращивание растений">
                        Option 6
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Three" icon={<SettingOutlined/>}>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Цена" icon={<AppstoreOutlined/>} popupClassName="price-submenu">
                    {getPriceSubMenu()}
                </SubMenu>
                <SubMenu key="sub4" title="Мощность" icon={<AppstoreOutlined/>} popupClassName="price-submenu">
                    <Menu.Item key="checkbox-group">
                        <Checkbox.Group
                            options={options}
                            defaultValue={['Apple']}
                        /> </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title="Производитель" icon={<AppstoreOutlined/>} popupClassName="price-submenu">
                    {getPriceSubMenu()}
                </SubMenu>
            </Menu>
        </>
    ) : null;
};

