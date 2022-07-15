import React from 'react'
import styled from 'styled-components'
import { Categories } from '../data.js'
import CategoryItem from './CategoryItem'


const Container = styled.div`
    display: flex;
    padding: 20px;
`

const Categories = () => {
  return (
    <Container>
        {Categories.map((item)=>(
            <CategoryItem item={item}></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories