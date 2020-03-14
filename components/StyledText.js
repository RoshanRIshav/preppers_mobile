const React = require('react');
const Text = require('react-native');

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: space-mono }]} />;
}
