import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

// untuk penyemangat ayang
export const Title = styled.p`
  font-size: 2.3em;
  font-weight: 500;
  margin: 0;
  padding: 15px 3px;
`

export const MenuTitle = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  padding: 0 5px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`

export const ProductBox = styled.div`
  width: 100%;
  height: 275px;
  border-radius: 5px;
  margin: 0 5px;
  box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
`

export const ProductDetail = styled.div`
  margin: 5px;
  padding: 10px;
`

export const ProductImage = styled.div`
  width: 100%;
  height: 100px;
  background: url(${(props) => props.src});
  background-size: cover;
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
