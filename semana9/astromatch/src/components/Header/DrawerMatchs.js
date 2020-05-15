import React from 'react';
import { Drawer } from '@material-ui/core';
import MenuMatchMobile from '../Matchs/MenuMatchMobile';

const DrawerMatchs = (props) => {
    return (
        <Drawer
            variant={"persistent"}
            anchor={"left"}
            open={props.open}
        >
            <MenuMatchMobile close={props.close}/>
        </Drawer>
    )
}

export default DrawerMatchs;