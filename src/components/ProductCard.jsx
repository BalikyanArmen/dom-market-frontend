import React from 'react';
import { Card, Rate, Typography } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import productImage from "../assets/product.png";
import {chooseProduct, selectCategory} from "../toolkit/productSlice.js";
import {CategoryPageLinks} from "./CategoryPageLinks.jsx";

const { Meta } = Card;

const customCardStyle = {
    display: 'flex',
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    flex: '1 0 0',
    borderRadius: '6px',
    border: '1px solid rgba(0, 0, 0, 0.04)',
    background: '#FFF',
};

export default function ProductCard({ id, title, description, price, rating, reviews, image }) {
    const dispatch = useDispatch();

    const handleProductClick = () => {
        dispatch(chooseProduct({ id, title, description, price, rating, reviews, productImage }));
        dispatch(selectCategory({data:[id,title]}))
    };
    return (
        <Link to={`/product/?${id}-${title}`} style={{ textDecoration: 'none' }} onClick={handleProductClick}>
            <Card
                style={customCardStyle}
                cover={<img alt="Product Image" src={productImage} />}
            >
                <Meta
                    title={title}
                    description={
                        <>
                            <Typography.Paragraph>{description}</Typography.Paragraph>
                            <Typography.Paragraph>Price: {price}</Typography.Paragraph>
                            <Typography.Text>Rating: <Rate disabled defaultValue={rating} /></Typography.Text>
                            <Typography.Text>Reviews: {reviews}</Typography.Text>
                        </>
                    }
                />
            </Card>
        </Link>
    );
}
