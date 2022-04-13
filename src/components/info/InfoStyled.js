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

export const Box = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  align-items: center;
`

//untuk 3 zona waktu
export const TimeBox = styled.div`
  width: 100%;
  background: tomato;
  height: 120px;
  margin: 5px;
  padding: 10px 15px;
  box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 5px 15px -6px rgba(0, 0, 0, 0.75);
`

//untuk quotes lebaran puasa
export const QuoteBox = styled.div`
  width: 100%;
  height: 200px;
  margin: 2px;
  padding: 15px 3px;
`
