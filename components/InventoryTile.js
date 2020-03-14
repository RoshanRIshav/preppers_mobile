import * as React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { MonoText } from '../components/StyledText';

import styles from './styles/inventory-tile.js';

export default class InventoryTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      items: props.items,
    }
  }

  render() {
    return (
      <Card>
        <Text style={styles.userText}>{this.state.name}</Text>
      </Card>
    );
  }
}
