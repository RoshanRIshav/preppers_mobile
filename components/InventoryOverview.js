import * as React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from './styles/inventory-overview.js';

const overview = [];
const WARNING = 'WARNING';
const ALERT = 'ALERT';
const GOOD = 'GOOD';

export default class InventoryOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  createOverview() {
    data.forEach(function(i) {
      let iconType;
      if (i.type == WARNING) iconType = 'ios-warning';
      else if (i.type == ALERT) iconType = 'md-alert';
      else if (i.type == GOOD) iconType = 'md-checkmark';

      overview.push(
        <View style={styles.overviewContainer}>
          <Ionicons name={iconType} />
          <Text>{i.heading}</Text>
          <Text style={styles.overviewText}>{i.subheading}</Text>
        </View>
      );
    });
  }

  render() {
    this.createOverview();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inventory Overview</Text>
        <Card style={{ marginBottom: 0 }}>
          <Grid style={styles.grid}>
            <Row>
              <Col>{overview[0]}</Col>
              <Col>{overview[1]}</Col>
            </Row>
            <Row style={{ paddingTop: 10 }}>
              <Col>{overview[2]}</Col>
              <Col>{overview[3]}</Col>
            </Row>
          </Grid>
        </Card>
      </View>
    );
  }
}

const data = [
  {
    'id': 1,
    'type': 'GOOD',
    'subheading': 'Over 25 Units',
    'heading': 'Lots of medicine'
  },
  {
    'id': 2,
    'type': 'WARNING',
    'subheading': '5 Units Left',
    'heading': 'Water supply low'
  },
  {
    'id': 3,
    'type': 'ALERT',
    'subheading': '0 Weapons Stocked',
    'heading': 'No weapons supply'
  },
  {
    'id': 4,
    'type': 'WARNING',
    'subheading': '13 Units Left',
    'heading': 'Food supply low'
  }
];
