import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 1000;
`

export const Announcement = () => {
  return (
    <Container>
        Some discounts
    </Container>
  )
}
export default Announcement