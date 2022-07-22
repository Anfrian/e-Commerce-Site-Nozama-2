import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Products from "../components/Products";

const Container = styled.div `

`
const Filter = styled.div `

`
const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1 `
    margin: 20px;
`
const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    fontweight: 600;
`
const Select = styled.select`
    padding:10px;
    margin-right: 20px;
`
const Option = styled.option`
    
`

const ProductList = () => {
    return (
        <Container>
            <NavBar></NavBar>
            <Announcement></Announcement>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products
                    </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products
                    </FilterText>
                    <Select>
                        <Option selected> Newest </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    )
}

export default ProductList;