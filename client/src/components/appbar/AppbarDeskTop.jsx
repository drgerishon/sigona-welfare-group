import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { AppConatiner, AppHeader, MyList, ActionIconsContainerDesktop,ActionIconsContainerMobile } from '../../styles/appbar';
import { useUIContext } from '../../contex/ui';

const AppbarDeskTop = ({ matches }) => {
  const {  setShowSearchBox } = useUIContext();

  return (
      <AppConatiner>
        <AppHeader>Sigona Welfare </AppHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="About" />
          <ListItemText primary="Members" />
          <ListItemText primary="Updates" />
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon onClick={() => setShowSearchBox(true)}/>
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions matches={matches}/>
      </AppConatiner>
  );
};

export default AppbarDeskTop;
