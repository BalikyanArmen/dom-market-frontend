import React from "react";
import styled from "@emotion/styled";
import SearchInput from "./SearchInput.jsx";
import {Link, useNavigate} from "react-router-dom";


const frameData = ['Стройка', 'Сад и досуг', 'Техника', 'Все для дома', 'Кухня', 'Ванная комната', 'Строительное оборудование']

export function NavBar() {
    const navigate = useNavigate();

    return (
        <RootWrapper>
            <Container>
                <Row>
                    <ColMd4>
                        <Button>
                            <Icon>
                                <Icon_0001>
                                    <LocationOn xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgba(255, 255, 255, 0.8)"
                                              d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"/>
                                    </LocationOn>
                                </Icon_0001>
                            </Icon>
                            <H6>
                                Москва
                            </H6>
                        </Button>
                        <BtnSm20>
                            <IcnSettingsIcnXs>
                                <Vector xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                          d="M3.65447 1.32829C3.59544 1.25236 3.52092 1.18985 3.43587 1.14492C3.35082 1.09999 3.25719 1.07368 3.16119 1.06772C3.06519 1.06176 2.96902 1.07629 2.87907 1.11036C2.78912 1.14442 2.70744 1.19724 2.63947 1.26529L1.60547 2.30029C1.12247 2.78429 0.944471 3.4693 1.15547 4.0703C2.03121 6.55788 3.45577 8.81639 5.32347 10.6783C7.1854 12.546 9.4439 13.9705 11.9315 14.8463C12.5325 15.0573 13.2175 14.8793 13.7015 14.3963L14.7355 13.3623C14.8035 13.2943 14.8563 13.2127 14.8904 13.1227C14.9245 13.0327 14.939 12.9366 14.933 12.8406C14.9271 12.7446 14.9008 12.6509 14.8558 12.5659C14.8109 12.4808 14.7484 12.4063 14.6725 12.3473L12.3655 10.5533C12.2843 10.4904 12.19 10.4467 12.0895 10.4256C11.989 10.4044 11.8851 10.4064 11.7855 10.4313L9.59547 10.9783C9.30315 11.0514 8.99689 11.0475 8.70652 10.967C8.41614 10.8866 8.15154 10.7324 7.93847 10.5193L5.48247 8.06229C5.26924 7.84933 5.1148 7.58478 5.03418 7.29439C4.95357 7.00401 4.94954 6.6977 5.02247 6.4053L5.57047 4.2153C5.59538 4.11569 5.59734 4.01173 5.57621 3.91126C5.55507 3.81079 5.51139 3.71642 5.44847 3.63529L3.65447 1.32829ZM1.88447 0.511295C2.05947 0.336244 2.2697 0.200425 2.50121 0.112856C2.73272 0.0252871 2.98021 -0.0120282 3.22725 0.00338804C3.47429 0.0188043 3.71522 0.0865995 3.93405 0.202272C4.15288 0.317944 4.3446 0.478846 4.49647 0.674295L6.29047 2.98029C6.61947 3.4033 6.73547 3.9543 6.60547 4.4743L6.05847 6.6643C6.03019 6.77772 6.03172 6.89654 6.06291 7.0092C6.0941 7.12187 6.15388 7.22456 6.23647 7.3073L8.69347 9.76429C8.77631 9.84705 8.87916 9.90694 8.99202 9.93813C9.10488 9.96933 9.22389 9.97076 9.33747 9.9423L11.5265 9.3953C11.7831 9.33113 12.0509 9.32615 12.3098 9.38072C12.5686 9.43529 12.8116 9.54799 13.0205 9.71029L15.3265 11.5043C16.1555 12.1493 16.2315 13.3743 15.4895 14.1153L14.4555 15.1493C13.7155 15.8893 12.6095 16.2143 11.5785 15.8513C8.93965 14.9228 6.54374 13.4121 4.56847 11.4313C2.58776 9.45631 1.07708 7.06075 0.148471 4.4223C-0.213529 3.3923 0.111471 2.2853 0.851471 1.54529L1.88547 0.511295L1.88447 0.511295Z"/>
                                </Vector>
                            </IcnSettingsIcnXs>
                            <H6_0001>
                                +7(909) 623-22-33
                            </H6_0001>
                        </BtnSm20>
                    </ColMd4>
                    <ColMd4_0001>
                        <NaN_0001>
                            Интернет магазин инструментов
                        </NaN_0001>
                    </ColMd4_0001>
                    <Left>
                        <Button_0001>
                            <H6>
                                Контакты
                            </H6>
                        </Button_0001>
                    </Left>
                </Row>
            </Container>
            <Frame15>
                <_4>
                    <Frame13>
                        <Logo onClick={()=>navigate("/")}>
                            <NaN_0002>
                                Строй Дом Маркет
                            </NaN_0002>
                        </Logo>
                        <SearchInput/>
                        {/*<InputHeader>*/}
                        {/*    <Button_0002>*/}
                        {/*        <H6_0003>*/}
                        {/*            Все*/}
                        {/*        </H6_0003>*/}
                        {/*        <Icon>*/}
                        {/*            <Icon_0003>*/}
                        {/*                <ChevronRight xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                    <path fill="black"*/}
                        {/*                          d="M4.175 5.575L0.275 1.675C0.0916667 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916667 0.458333 0.275 0.275C0.458333 0.0916667 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916667 1.675 0.275L6.275 4.875C6.375 4.975 6.44583 5.08333 6.4875 5.2C6.52917 5.31667 6.55 5.44167 6.55 5.575C6.55 5.70833 6.52917 5.83333 6.4875 5.95C6.44583 6.06667 6.375 6.175 6.275 6.275L1.675 10.875C1.49167 11.0583 1.25833 11.15 0.975 11.15C0.691667 11.15 0.458333 11.0583 0.275 10.875C0.0916667 10.6917 0 10.4583 0 10.175C0 9.89167 0.0916667 9.65833 0.275 9.475L4.175 5.575Z"/>*/}
                        {/*                </ChevronRight>*/}
                        {/*            </Icon_0003>*/}
                        {/*        </Icon>*/}
                        {/*    </Button_0002>*/}
                        {/*    <NaN_0003>*/}
                        {/*        Поиск*/}
                        {/*    </NaN_0003>*/}
                        {/*</InputHeader>*/}
                        <Frame11>
                            <Button_0003>
                                <Icon>
                                    <Icon_0001>
                                        <Person xmlns="http://www.w3.org/2000/svg">
                                            <path fill="white"
                                                  d="M9 9C7.7625 9 6.70313 8.55938 5.82188 7.67813C4.94063 6.79688 4.5 5.7375 4.5 4.5C4.5 3.2625 4.94063 2.20312 5.82188 1.32188C6.70313 0.440625 7.7625 0 9 0C10.2375 0 11.2969 0.440625 12.1781 1.32188C13.0594 2.20312 13.5 3.2625 13.5 4.5C13.5 5.7375 13.0594 6.79688 12.1781 7.67813C11.2969 8.55938 10.2375 9 9 9ZM0 15.75L0 14.85C0 14.2125 0.164062 13.6266 0.492188 13.0922C0.820312 12.5578 1.25625 12.15 1.8 11.8688C2.9625 11.2875 4.14375 10.8516 5.34375 10.5609C6.54375 10.2703 7.7625 10.125 9 10.125C10.2375 10.125 11.4563 10.2703 12.6562 10.5609C13.8562 10.8516 15.0375 11.2875 16.2 11.8688C16.7438 12.15 17.1797 12.5578 17.5078 13.0922C17.8359 13.6266 18 14.2125 18 14.85L18 15.75C18 16.3687 17.7797 16.8984 17.3391 17.3391C16.8984 17.7797 16.3687 18 15.75 18L2.25 18C1.63125 18 1.10156 17.7797 0.660938 17.3391C0.220313 16.8984 0 16.3687 0 15.75ZM2.25 15.75L15.75 15.75L15.75 14.85C15.75 14.6438 15.6984 14.4563 15.5953 14.2875C15.4922 14.1187 15.3562 13.9875 15.1875 13.8938C14.175 13.3875 13.1531 13.0078 12.1219 12.7547C11.0906 12.5016 10.05 12.375 9 12.375C7.95 12.375 6.90937 12.5016 5.87812 12.7547C4.84687 13.0078 3.825 13.3875 2.8125 13.8938C2.64375 13.9875 2.50781 14.1187 2.40469 14.2875C2.30156 14.4563 2.25 14.6438 2.25 14.85L2.25 15.75ZM9 6.75C9.61875 6.75 10.1484 6.52969 10.5891 6.08906C11.0297 5.64844 11.25 5.11875 11.25 4.5C11.25 3.88125 11.0297 3.35156 10.5891 2.91094C10.1484 2.47031 9.61875 2.25 9 2.25C8.38125 2.25 7.85156 2.47031 7.41094 2.91094C6.97031 3.35156 6.75 3.88125 6.75 4.5C6.75 5.11875 6.97031 5.64844 7.41094 6.08906C7.85156 6.52969 8.38125 6.75 9 6.75Z"/>
                                        </Person>
                                    </Icon_0001>
                                </Icon>
                                <H6_0004>
                                    Войти
                                </H6_0004>
                            </Button_0003>
                            <Button_0004>
                                <Icon>
                                    <Icon_0001>
                                        <ShoppingCart xmlns="http://www.w3.org/2000/svg">
                                            <path fill="white"
                                                  d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18C4 17.45 4.19583 16.9792 4.5875 16.5875C4.97917 16.1958 5.45 16 6 16C6.55 16 7.02083 16.1958 7.4125 16.5875C7.80417 16.9792 8 17.45 8 18C8 18.55 7.80417 19.0208 7.4125 19.4125C7.02083 19.8042 6.55 20 6 20ZM16 20C15.45 20 14.9792 19.8042 14.5875 19.4125C14.1958 19.0208 14 18.55 14 18C14 17.45 14.1958 16.9792 14.5875 16.5875C14.9792 16.1958 15.45 16 16 16C16.55 16 17.0208 16.1958 17.4125 16.5875C17.8042 16.9792 18 17.45 18 18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20ZM5.15 4L7.55 9L14.55 9L17.3 4L5.15 4ZM4.2 2L18.95 2C19.3333 2 19.625 2.17083 19.825 2.5125C20.025 2.85417 20.0333 3.2 19.85 3.55L16.3 9.95C16.1167 10.2833 15.8708 10.5417 15.5625 10.725C15.2542 10.9083 14.9167 11 14.55 11L7.1 11L6 13L17 13C17.2833 13 17.5208 13.0958 17.7125 13.2875C17.9042 13.4792 18 13.7167 18 14C18 14.2833 17.9042 14.5208 17.7125 14.7125C17.5208 14.9042 17.2833 15 17 15L6 15C5.25 15 4.68333 14.6708 4.3 14.0125C3.91667 13.3542 3.9 12.7 4.25 12.05L5.6 9.6L2 2L1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0L2.625 0C2.80833 0 2.98333 0.05 3.15 0.15C3.31667 0.25 3.44167 0.391667 3.525 0.575L4.2 2Z"/>
                                        </ShoppingCart>
                                    </Icon_0001>
                                </Icon>
                                <H6_0004>
                                    Корзина
                                </H6_0004>
                                <Badge>
                                    <Text>
                                        1
                                    </Text>
                                </Badge>
                            </Button_0004>
                        </Frame11>
                    </Frame13>
                </_4>
                <_2>
                    <Button_0005>
                        <Icon>
                            <Icon_0001>
                                <Menu xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                          d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10L17 10C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12L1 12ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5L17 5C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7L1 7ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0L17 0C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2L1 2Z"/>
                                </Menu>
                            </Icon_0001>
                        </Icon>
                        <H6_0006>
                            Каталог товаров
                        </H6_0006>
                    </Button_0005>
                    {frameData.map((item, index) => (
                        <div id={index}>
                            <Tab onClick={()=>console.log("Hey")}>
                                <Text_0001>
                                    {item}
                                </Text_0001>
                            </Tab>
                        </div>
                    ))}
                </_2>
            </Frame15>
        </RootWrapper>
    )
}

const RootWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background: rgb(35, 166, 240);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
`;

const Container = styled.div`
    height: 48px;
    overflow: hidden;
    background: rgb(37, 43, 66);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    align-self: stretch;
    flex-shrink: 0;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0px 24px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
`;

const ColMd4 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 10px;
    width: 463px;
    height: 46px;
    box-sizing: border-box;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: none;
    gap: 4px;
    border-radius: 4px;
    height: 30px;
    box-sizing: border-box;
    padding: 2px 12px;
    background: transparent;
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
`;

const Icon_0001 = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
`;

const LocationOn = styled.svg`
    width: 16px;
    height: 20px;
    position: absolute;
    left: 4px;
    top: 2px;
    right: 4px;
    bottom: 2px;
`;

const H6 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: initial;
    line-height: 22px;
    text-align: center;
`;

const BtnSm20 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex: none;
    gap: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
`;

const IcnSettingsIcnXs = styled.div`
    width: 16px;
    height: 16px;
    overflow: hidden;
    position: relative;
`;

const Vector = styled.svg`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
`;

const H6_0001 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    line-height: 24px;
    text-align: left;
`;

const ColMd4_0001 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 10px;
    width: 463px;
    box-sizing: border-box;
    padding: 10px;
`;

const NaN_0001 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    line-height: 24px;
    text-align: left;
`;

const Left = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 8px;
    width: 463px;
    height: 46px;
    box-sizing: border-box;
    padding: 10px;
`;

const Button_0001 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    flex: none;
    gap: 10px;
    border-radius: 4px;
    height: 30px;
    box-sizing: border-box;
    padding: 2px 4px;
`;

const Frame15 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    box-sizing: border-box;
    padding: 16px 0px;
    flex-shrink: 0;
`;

const _4 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    box-sizing: border-box;
    padding: 0px 38px;
    flex-shrink: 0;
`;

const Frame13 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    box-sizing: border-box;
    flex-shrink: 0;
`;

const Logo = styled.div`
    width: 220px;
    height: 48px;
    position: relative;
`;

const NaN_0002 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 20px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    text-align: left;
    position: absolute;
    left: 0px;
    top: 8px;
`;

const InputHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 12px;
    border: solid 1px rgb(230, 230, 230);
    border-radius: 5px;
    width: 944px;
    height: 48px;
    background: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
`;

const Button_0002 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    background: rgb(235, 235, 235);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
    padding: 0px 8px;
    flex-shrink: 0;
`;

const H6_0003 = styled.span`
    color: rgba(0, 0, 0, 0.8);
    text-overflow: ellipsis;
    font-size: 13px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    text-align: center;
    width: 26px;
`;

const Icon_0003 = styled.div`
    overflow: hidden;
    position: absolute;
    left: 24px;
    top: 0px;
    right: -24px;
    bottom: 0px;
`;

const ChevronRight = styled.svg`
    width: 7px;
    height: 11px;
    position: absolute;
    left: 7px;
    top: 9px;
    right: 11px;
    bottom: 4px;
    transform: rotate(-90deg);
    transform-origin: top left;
`;

const NaN_0003 = styled.span`
    color: rgba(0, 0, 0, 0.6);
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: initial;
    text-align: center;
`;

const Frame11 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex: none;
    gap: 8px;
    box-sizing: border-box;
`;

const Button_0003 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    align-self: stretch;
    box-sizing: border-box;
    padding: 2px 12px;
    flex-shrink: 0;
`;

const Person = styled.svg`
    width: 18px;
    height: 18px;
    position: absolute;
    left: 3px;
    top: 3px;
    right: 3px;
    bottom: 3px;
`;

const H6_0004 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: initial;
    text-align: center;
`;

const Button_0004 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 2px 12px;
`;

const ShoppingCart = styled.svg`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 1px;
    top: 2px;
    right: 3px;
    bottom: 2px;
`;

const Badge = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: none;
    border-radius: 100px;
    background: rgb(255, 0, 0);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
    padding: 0px 7px;
`;

const Text = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: Roboto, sans-serif;
    font-weight: initial;
    line-height: 20px;
    text-align: left;
`;

const _2 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    box-sizing: border-box;
    padding: 0px 40px;
    flex-shrink: 0;
`;

const Button_0005 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: none;
    gap: 4px;
    border-radius: 4px;
    height: 42px;
    background: linear-gradient(-90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    box-sizing: border-box;
    padding: 10px 12px;
`;

const Menu = styled.svg`
    width: 18px;
    height: 12px;
    position: absolute;
    left: 3px;
    top: 6px;
    right: 3px;
    bottom: 6px;
`;

const H6_0006 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    line-height: 22px;
    text-align: center;
`;

const Frame14 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    align-self: stretch;
    box-sizing: border-box;
    flex-shrink: 0;
`;

const Tab = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: none;
    height: 42px;
    box-sizing: border-box;
    padding: 1px 8px;
    background: transparent;
    border: none;
`;

const Text_0001 = styled.span`
    color: rgba(255, 255, 255, 0.95);
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: initial;
    line-height: 22px;
    text-align: left;
`;

