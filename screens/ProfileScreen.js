import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles/profile-screen.js';
import TabBarIcon from '../components/TabBarIcon';


export default function ProfileScreen () {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TabBarIcon name="md-person" />
    </ScrollView>
  );
}
