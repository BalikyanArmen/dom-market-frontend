import React, {useState} from "react";
import styled from "@emotion/styled";
import SearchInput from "./SearchInput.jsx";
import {useNavigate} from "react-router-dom";
import {CatalogMenu} from "./CatalogMenu.jsx";
import LoginDialog from "./Login.jsx";
import {BasketDialog} from "./popups/Basket.jsx";
import {useSelector} from "react-redux";

const frameData = ['Стройка', 'Сад и досуг', 'Техника', 'Все для дома', 'Кухня', 'Ванная комната', 'Строительное оборудование'];
const navbarLinks = ['Стройка', 'Сад и досуг', 'Техника', 'Все для дома', 'Кухня', 'Ванная комната', 'Строительное оборудование']


export function NavBar() {
    const navigate = useNavigate();
    const [uiState, setUIState] = useState({
        isCatalogOpen: false,
        isDialogOpen: false,
        isBasketOpen: false,
        searchValue: "",
        showDropdown: false,
        mainCatalogMenu: false,
        secondCatalogMenu: false,
        thirdCatalogMenu: false,
        secondCatalogMenuValue:"",
        thirdCatalogMenuValue:"",
    });
    const basketProducts = useSelector((state) => state.product.basketProducts);

    const handleToggleUIState = (key) => {
        setUIState(prevState => ({...prevState, [key]: !prevState[key]}));
    };

    const handleSearchInputChange = (event) => {
        const {value} = event.target;
        setUIState(prevState => ({...prevState, searchValue: value}));
    };

    const handleCatalogMenuClick = (menu,title) => {
        setUIState(prevState => ({
            ...prevState,
            secondCatalogMenu: menu === "main" ? !prevState.secondCatalogMenu  : prevState.secondCatalogMenu,
            thirdCatalogMenu: menu === "secondCatalog" ? !prevState.thirdCatalogMenu : prevState.thirdCatalogMenu
        }));
        if(menu === "main"){
            setUIState(prevState => ({
                ...prevState,
                secondCatalogMenuValue:title,
            }));
        }else{
            setUIState(prevState => ({
                ...prevState,
                thirdCatalogMenuValue:title,
            }));
        }
    };

    return (
        <div className="main-navbar-container">
            <div className="address-contact-part">
                <div className="address-section">
                    <div style={{display: "flex"}}>
                        <img src="../../public/location.png" width="24" height="24"/>
                        <span style={{fontSize: '19px'}}>
                            Москва
                        </span>
                    </div>
                    <div style={{display: "flex", marginLeft: "5px"}}>
                        <img src="../../public/callIcon.svg" width="20" height="20"/>
                        <span style={{fontSize: '19px'}}>
                            +7(909) 623-22-33
                        </span>
                    </div>
                </div>
                <div className="navbar-main-title">
                    <div>
                        Интернет магазин инструментов
                    </div>
                </div>
                <div className="contacts-section">
                    <div>
                        Контакты
                    </div>
                </div>
            </div>
            <div className="navbar-content">
                <div className="navbar-content-actions">
                    <div className="navbar-content-actions-title" onClick={() => navigate("/")}>
                        <h2>Строй Дом Маркет</h2>
                    </div>
                    <div className="navbar-content-actions-search">
                        <div style={{position: "relative"}}>
                            <button
                                className="search-option-btn"
                                onClick={() => handleToggleUIState("showDropdown")}
                                style={{display: "flex"}}
                            >
                                <span style={{fontSize: "14px"}}>Все</span>
                                <img src="../../public/ArrowBottom.png" width={20} height={20}/>
                            </button>
                            {uiState.showDropdown && (
                                <div className="dropdown-content">
                                    {frameData.map((option, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-option"
                                            onClick={() => handleDropdownOptionClick(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input
                            className="search-input"
                            type="text"
                            placeholder="Поиск"
                            value={uiState.searchValue} // Bind input value to state
                            onChange={handleSearchInputChange} // Call function on input change
                        /></div>
                    <div className="navbar-content-actions-login_basket">
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                             onClick={() => handleToggleUIState("isDialogOpen")}>
                            <img src="../../public/person.png" width={24} height={24}/>
                            <span style={{marginTop: "5px"}}>
                                Войти
                            </span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                             onClick={() => handleToggleUIState("isBasketOpen")}>
                            <div style={{position: "relative"}}>
                                <img src="../../public/Basket.png" width={24} height={24} alt="Basket icon"/>
                                <div className="basket-number">
                                    {basketProducts.length}
                                </div>
                            </div>
                            <span>Корзина</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-content-navigation">
                    <div className="navbar-content-navigation-main-catalog">
                        <div style={{position: "relative"}}>
                            <button
                                onClick={() => {
                                    setUIState(prevState => ({
                                        ...prevState,
                                        mainCatalogMenu: !prevState.mainCatalogMenu,
                                        secondCatalogMenu: false,
                                        thirdCatalogMenu: false
                                    }));
                                }}
                                style={{
                                    display: "flex",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    color: "white"
                                }}
                            >
                                <img src="../../public/BurgerIcon.png" width={20} height={20}/>
                                <span>Каталог товаров</span>
                            </button>
                            {uiState.mainCatalogMenu && (
                                <div className="dropdown-content-catalog">
                                    {frameData.map((option, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-option"
                                            onClick={() => handleCatalogMenuClick("main",option)}
                                        >
                                            {option}
                                            <img src="../../public/chevron_right.png" width={20} height={20}/>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {uiState.mainCatalogMenu && uiState.secondCatalogMenu && (
                                <div className="dropdown-content-catalog-second">
                                    <span className="dropdown-content-catalog-title">{uiState.secondCatalogMenuValue}</span>
                                    {frameData.map((option, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-option"
                                            onClick={() => handleCatalogMenuClick("secondCatalog",option)}
                                        >
                                            {option}
                                            <img src="../../public/chevron_right.png" width={20} height={20}/>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {uiState.mainCatalogMenu &&  uiState.secondCatalogMenu && uiState.thirdCatalogMenu && (
                                <div className="dropdown-content-catalog-third">
                                    <span className="dropdown-content-catalog-title">{uiState.thirdCatalogMenuValue}</span>
                                    {frameData.map((option, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-option"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                    </div>

                    {['Стройка', 'Сад и досуг', 'Техника', 'Все для дома', 'Кухня', 'Ванная комната', 'Строительное оборудование'].map((option, index) => (
                        <div
                            key={index}
                            className="navbar-content-navigation-navbar-links"
                            onClick={() => navigate(`navlink${index}`)}
                        >
                            {option}
                        </div>
                    ))}

                </div>
            </div>
            <LoginDialog isDialogOpen={uiState.isDialogOpen} handleClose={() => handleToggleUIState("isDialogOpen")}/>
            <BasketDialog isOpen={uiState.isBasketOpen} handleClose={() => handleToggleUIState("isBasketOpen")}/>
        </div>
    )
}