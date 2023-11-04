import React from 'react';
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumIcon from '@mui/icons-material/Forum';
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from '../../styles/appbar';
import { Colors } from '../../styles/theme';
const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center',color: matches && Colors.secondary }}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary  }}>
            <NotificationsNoneIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary  }}>
            <ForumIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
