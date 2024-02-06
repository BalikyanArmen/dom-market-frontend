import {List, Pagination, Row, Col, Space, Typography} from "antd";
import React, {useState} from "react";
import {CategoryPageLinks} from "../components/CategoryPageLinks.jsx";
import BasicSelect from "../components/BasicSelect.jsx";
import ProductCard from "../components/ProductCard.jsx";
import {CategoryMenu} from "../components/CategoryMenu.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../toolkit/productSlice.js";

const {Item} = List;

const products = new Array(50).fill({
    title: "Решетка-гриль FORESTER",
    description: "Решетка для рыбы. Решетка - гриль FORESTER 240х440мм",
    price: "560₽",
    rating: 4.5,
    reviews: "45 отзывов",
    image: "https://placehold.co/200x200.png?text=Product+Image",
});

const pageSize = 20; // Number of products per page

export const CategoryPage = () => {
    const selectedCategories = useSelector((state) => state.product.selectedCategories);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalProducts = products.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (mainCategory, subCategory) => {
        dispatch(selectCategory({data:[mainCategory, subCategory]}))
    };

    console.log(selectedCategories)
    return (
        <Row gutter={16} style={{padding: "15px"}}>
            <Col span={6}>
                <CategoryPageLinks selectedCategories={selectedCategories}/>
                <CategoryMenu isOpen={true} onCategoryChange={handleCategoryChange}/>
            </Col>
            <Col span={18}>
                <Row justify="space-between" align="middle" style={{marginBottom: "15px"}}>
                    <Col>
                        <Typography.Title level={4} style={{marginBottom: 0}}>
                            {selectedCategories[selectedCategories.length - 1] || "Сад и досуг"}
                        </Typography.Title>
                        <Typography.Text style={{color: "#000", fontSize: "13px"}}>
                            {totalProducts} товаров
                        </Typography.Text>
                    </Col>
                    <Col>
                        <BasicSelect/>
                    </Col>
                </Row>
                <List
                    grid={{gutter: 16, column: 4}}
                    dataSource={currentProducts}
                    renderItem={(product, index) => (
                        <Item key={index}>
                            <ProductCard {...product} />
                        </Item>
                    )}
                />
                <Space align="center" style={{marginTop: "105px"}}>
                    <Pagination total={totalProducts} pageSize={pageSize} current={currentPage}
                                onChange={handlePageChange}/>
                </Space>
            </Col>
        </Row>
    );
};
