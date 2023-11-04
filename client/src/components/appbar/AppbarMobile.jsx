import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../contex/ui";
import { AppConatiner, AppHeader } from "../../styles/appbar";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppConatiner>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppHeader textAlign={"center"} variant="h4">
       Sigona Welfare
      </AppHeader>
      <IconButton >
        <SearchIcon onClick={() => setShowSearchBox(true)}/>
      </IconButton>
      <Actions matches={matches} />
    </AppConatiner>
  );
}