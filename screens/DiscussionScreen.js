import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import DiscussionPost from '../components/DiscussionPost';
import { MonoText } from '../components/StyledText';

const TEXT_NOT_LOGGED_IN = 'You are in read-only mode. Login or register to comment and post.';

function loadDiscussionPosts() {

}

export default function DiscussionScreen() {
  const posts = [];
  data.forEach(function(p) {
    posts.push(
      <View>
        <DiscussionPost
          id={p.id}
          title={p.title}
          description={p.description}
          user={p.user}
          likes={p.likes}
          comments={p.comments} />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {posts}
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>{TEXT_NOT_LOGGED_IN}</Text>
      </View>
    </View>
  );
}

DiscussionScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


// TODO: remove test mock data
const data = [
  {
    "id": 1,
    "title": "Poland just closed all schools, grateful Im prepped!",
    "description": "Poland just closed all schools, cinema and theaters, encouraging families to self-isolate for 14 days. Im prepped for 14 days for 3 people (my daughter, wife and I). Im curious to see what the shops look like this afternoon when I go home. Ive used this subreddit for a long time to evaluate my prep, and grateful I have a rational plan. Now its about following through with portion control.",
    "user": "big_time_prepper123",
    "likes": 15,
    "comments": 3
  },
  {
    "id": 2,
    "title": "I might be starting to panic",
    "description": "First off, I think my wife and I are good. Weve got supplies to go for a few months if needed. We dont live in a high density area (tornado alley, USA) and have trustworthy neighbors. Im worked up though. Its gone from rational to irrational. I went to Target to pick up a few granola bars and found myself standing at the pharmacy section with the urge to put all the things in my cart.",
    "user": "TheRealSnakeBlocker",
    "likes": 40,
    "comments": 15
  },
  {
    "id": 3,
    "title": "Anyone helping their elderly parents prep? 20lbs bags are heavy, water packs are heavy. Lots of elderly shoppers at Costco this morning looking concerned & overwhelmed.",
    "description": "",
    "user": "wholesome-prepper-6969",
    "likes": 19,
    "comments": 1
  },
  {
    "id": 4,
    "title": "Dealing with family that doesnt want to prep but expects you to take care of them",
    "description": "My mom thinks she doesnt have to prep because I do. Nevermind the fact that she lives 100 miles away. One time she proudly told me she was prepared for a disaster. So I happened to be in town on business, and I swung by to see if I could figure out what she meant when she said 3 month supply. There were 3 lbs of rice, 7 cans of beans, 1 can of tomato sauce, and a 24-pack of 1 liter water bottles. I asked her how she expected to live on that for 3 days let alone 3 months, and I kid you not, she said she can just eat out like always. (She mostly eats take out.) I told her that was a bad plan and why. And her answer was that she would come to my place and eat my food if something bad happened. So I sent her a contract where she could invest $100 per person per month leading up to the SHTF and I would take her household in. (That might seem cold, but this is the same person that knew I was homeless and broke and still wanted rent and food money from me when I came back to stay with her over a month or so where I was trying to get back on my feet. Its a two way street.) So Long story short, she was really upset that I wanted money. But I explained that this was the cost required to store enough food, medical supplies (incl chemicals to make medicine since stored medicine goes bad over time), blankets, survival gear, guns, ammo, and to build sleeping quarters. Plus, there was a stipulation that they had to go to an Appleseed Shoot and learn how to aim and shoot and be safe around guns, had to take a first aid course, and had to work the land upon arrival WTSHTF. They did not agree to any of this.",
    "user": "TheRealSnakeBlocker",
    "likes": 91,
    "comments": 56
  },
  {
    "id": 5,
    "title": "Anyone else already have people asking for supplies?",
    "description": "My family knows I prep, and as certain items are becoming harder and harder to find on shelves I have already had family ask for hand sanitizer and joke about 'coming to my place' when shtf. I warned them that they better start stocking up on food and such while they can because I didn't prep just to give everything away.",
    "user": "family_prepper_man_with_guns_and_weed",
    "likes": 12,
    "comments": 9
  }
];
