import { Container, TimeBox, Box, QuoteBox, Title } from "./InfoStyled"

const InfoComponent = () => {
  return (
    <Container>
      <Title>PUASA BRO!</Title>
      <Box>
        <TimeBox>TEST SATU</TimeBox>
        <TimeBox>TEST DUA</TimeBox>
      </Box>
      <Box>
        <QuoteBox>
          <video
            controls
            width="100%"
            height="100%"
            autoPlay="autoplay"
            src="./assets/intro.mp4"
            type="video/mp4"
          ></video>
        </QuoteBox>
      </Box>
      <Box>
        <TimeBox>HELLO BRO!</TimeBox>
        <TimeBox>HELLO BRO!</TimeBox>
        <TimeBox>HELLO BRO!</TimeBox>
      </Box>
    </Container>
  )
}

export default InfoComponent
