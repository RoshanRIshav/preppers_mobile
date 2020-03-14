import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import ProfileScreen from '../screens/ProfileScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import InventoryScreen from '../screens/InventoryScreen';

import InventoryOverview from '../components/InventoryOverview';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Discussion';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    tabBarVisible: false,
    headerTitle: getHeaderTitle(route),
    headerStyle: getHeaderStyle(route),
    headerTitleStyle: getHeaderTitleStyle(route)
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      <BottomTab.Screen
        name="Discussion"
        component={DiscussionScreen}
        options={{
          title: 'Discussion',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />
      <BottomTab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title: 'Inventory',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-clipboard" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Profile':
      return 'My Prepper Profile';
    case 'Discussion':
      return 'Forum';
    case 'Inventory':
      return 'Dashboard';
  }
}

function getHeaderStyle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  const styles = {
    backgroundColor: '#0D47A1',
  };

  return styles;
  switch (routeName) {
    case 'Profile':
      return { backgroundColor: '#0D47A1' };
    case 'Discussion':
      return { backgroundColor: '#0D47A1' };
    case 'Inventory':
      return { backgroundColor: '#0D47A1' };
  }
}

function getHeaderTitleStyle(route) {
  const styles = {
    color: 'white',
    paddingBottom: 15,
    textAlign: 'left'
  };
  return styles;
}
