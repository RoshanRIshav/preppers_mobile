import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { SearchBar } from 'react-native-elements'
import InventoryTile from '../components/InventoryTile';
import InventoryOverview from '../components/InventoryOverview';
import styles from './styles/inventory-screen.js';

const inventory = [];
export default class InventoryScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'HELRKAJDS'
  }
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  populateInventory() {
    data.forEach(function(i) {
      inventory.push(
        <View>
          <InventoryTile name={i.name} items={i.items} />
        </View>
      );
    });
  }


  render() {
    this.populateInventory();
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <InventoryOverview />

        {inventory}



      </ScrollView>
    );
  }
}


// TODO: remove mock data
const data = [
  {
    'name': 'Food',
    'items': [
      {
        'name': 'Canned Food - Small',
        'count': 40,
        'metric': 'STOCK'
      },
      {
        'name': 'Canned Food - Large',
        'count': 12,
        'metric': 'STOCK'
      },
      {
        'name': 'Rice',
        'count': 92,
        'metric': 'WEIGHT_KG'
      },
      {
        'name': 'Dried Fruit - Mangos',
        'count': 8,
        'metric': 'STOCK'
      },
      {
        'name': 'Dried Fruit - Bananas',
        'count': 17,
        'metric': 'STOCK'
      },
      {
        'name': 'Bottled Water',
        'count': 290,
        'metric': 'STOCK'
      }
    ]
  },
  {
    'name': 'Supplies',
    'items': [
      {
        'name': 'Duct Tape',
        'count': 5,
        'metric': 'STOCK'
      },
      {
        'name': 'Soap',
        'count': 1,
        'metric': 'STOCK'
      }
    ]
  },
  {
    'name': 'Medicine',
    'items': [
      {
        'name': 'Bandages',
        'count': 21,
        'metric': 'STOCK'
      },
      {
        'name': 'Rubbing Alcohol',
        'count': 8,
        'metric': 'STOCK'
      },
      {
        'name': 'Ointment',
        'count': 4,
        'metric': 'STOCK'
      }
    ]
  },
  {
    'name': 'Equipment',
    'items': []
  }
]
