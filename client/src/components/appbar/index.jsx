import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AppbarDeskTop from "./AppbarDeskTop"
import AppbarMobile from './AppbarMobile'


const AppBar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <>
            {matches ? <AppbarMobile matches={matches}/> : <AppbarDeskTop matches={matches}/>}
        </>
    )
}

export default AppBar