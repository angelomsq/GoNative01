import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from 'Header';
import Post from 'Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Angelo Queiroz',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet. Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Angelo Queiroz',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet. Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Angelo Queiroz',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet. Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Angelo Queiroz',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet. Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Angelo Queiroz',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum nunc quis turpis euismod laoreet. Maecenas auctor, enim et varius dapibus, erat purus aliquam lorem, vel convallis libero ipsum eu justo.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header>GoNative App</Header>
        <ScrollView contentContainerStyle={styles.postList}>
          {posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  postList: {
    padding: 20,
  },
});
