import * as React from 'react';
import { View, Text } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

import styles from './styles/discussion-post.js';

function filterPost() {

}

export default class DiscussionPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      user: props.user,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {
    // TODO: move this logic to a startup function
    let desc = this.state.description;
    if (desc.length > 200) {
      this.state.description = desc.substring(0, 200) + ' ...';
    }

    return (
      <Card>
        <Text style={styles.userText}>{this.state.user}</Text>
        <Text style={styles.titleText}>{this.state.title}</Text>
        <Text style={styles.descText}>{this.state.description}</Text>
        <Divider style={styles.divider} />

        <View style={styles.footer}>
          <Ionicons name="md-thumbs-up" style={styles.icon} />
          <Text style={styles.numLikes}>{this.state.likes}</Text>

          <Text style={styles.numComments}>{this.state.comments} Comments</Text>
          <Ionicons name="ios-chatboxes" style={styles.icon} />
        </View>
      </Card>
    );
  }
}
