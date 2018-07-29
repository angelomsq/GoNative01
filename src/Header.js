import React from 'react';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.title}> {props.children} </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 70 : 40,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
