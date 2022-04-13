import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
`

export const Category = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  margin: 30px 0;
`

export const CategoryImage = styled.div`
  background: url(${(props) => props.src});
  background-size: cover;
  width: 75px;
  height: 75px;
`

export const CategoryTitle = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  text-align: center;
`

export const MenuTitle = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  padding: 0 5px;
`

export const Box = styled.div`
  display: flex;
`

export const ProductBox = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 10px;
  margin: 0 15px;
  box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 10px;
`

export const ProductDetail = styled.div`
  margin: 5px;
  padding: 10px;
`

export const ProductImage = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  background: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
`

export const ProductName = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin: 5px 0;
`

export const ProductDescription = styled.p`
  font-size: 0.75em;
  font-weight: 300;
`

export const ProductPrice = styled.p`
  font-size: 0.85em;
  font-weight: 500;
`

export const QuoteBox = styled.div`
  width: 100%;
  height: 200px;
  margin: 2px;
  padding: 15px 3px;
`
