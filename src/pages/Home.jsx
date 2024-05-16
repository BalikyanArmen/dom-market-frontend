import React, {useState} from "react";
import {Box, IconButton} from "@mui/material";
import CategoryCard from "../components/ProductCard.jsx";
import arrowLeft from "../assets/ArrowLeft.svg";
import arrowRight from "../assets/ArrowRight.svg";
import Typography from "@mui/material/Typography";
import {NewProducts} from "../components/NewProducts.jsx";
import PopularProducts from "../components/PopularProducts.jsx";
import {PartnersPart} from "../components/PartnersPart.jsx";
import {DeliveryPoint} from '../components/popups/DeliveryPoint.jsx'
import {MyAdress} from "../components/popups/MyAdress.jsx";
import {Link} from "react-router-dom";
import {Card, Rate} from "antd";
import productImage from "../assets/product.png";

export default function Home() {
    const products = new Array(33).fill({
        title: "Решетка-гриль FORESTER",
        description: "Решетка для рыбы. Решетка - гриль FORESTER 240х440мм",
        price: "560₽",
        rating: 4.5,
        reviews: "45 отзывов",
        image: "https://placehold.co/200x200.png?text=Product+Image",
    });
    const [deliveryPoint, setDeliveryPoint] = useState(false)
    const [myAddress, setMyAddress] = useState(false)


    return (
        <Box sx={{
            padding: "15px"
        }}>
            <NewProducts
                products={[{image: "../../public/Banner.png"}, {image: "https://placehold.co/200x200.png?text=Product+Image"}, {image: "https://placehold.co/200x200.png?text=Product+Image"}]}
                cardsInRow={1}/>
            <NewProducts title={"Новинки"} products={products}/>
            <PopularProducts title={"Популярные категории"}/>
            <PartnersPart/>
            <NewProducts title={"Хиты продаж"} products={products}/>
            <DeliveryPoint isOpen={deliveryPoint} titleText="Пункты выдачи" handleClose={() => setDeliveryPoint(false)}
                           headingText=" Выберите пункт выдачи, куда будут отправлены ваши покупки"/>
            <MyAdress isOpen={myAddress} titleText="Мой адресс" handleClose={() => setMyAddress(false)}
                      headingText=" Напишите адресс, куда будут отправлены ваши покупки"/>
        </Box>
    );
}
