import { Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { HeroContainer, HeroContent, HeroDesription, HeroImage, HeroReadMoreButton, HeroTitle } from "../../styles/hero"
import heroImage from '../../assets/logo.jpg'
const Hero = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <HeroContainer>
      <HeroImage src={heroImage} />
        <HeroContent>
            {/* <Typography variant="h6">
                Sigon Welfare Aim
            </Typography> */}
            <HeroTitle variant="h2">Sigona Welfare Aim</HeroTitle>
            <HeroDesription variant="subtitle">
            Welcome to sigona welfare Group where you get all the information
          partaining the sigona welfare contributions. You will be able to see
          members contribitoon as well as your contributon. The group goal is to
          raise monetry contribution to families whre there is s deceased
          member. Every member over the age of 24 years is supposed to
          contribute ksh. 200 without fail. The aim is to ease the burden
          associated funeral arrangements.
            </HeroDesription>
            <HeroReadMoreButton color="primary">Ream more...</HeroReadMoreButton>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero