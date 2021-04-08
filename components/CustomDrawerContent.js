import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Avatar } from 'react-native-elements';

const avatar = require('../assets/avatar.jpg')

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView>
      <Avatar rounded size="xlarge" source={avatar} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
