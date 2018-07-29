import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Post = (props) => {
  const { title, author, body } = props.post;
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}> {title} </Text>
        <Text style={styles.postAuthor}> {author} </Text>
      </View>
      <Text style={styles.postBody}> {body} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
  },

  postHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
    marginBottom: 10,
  },

  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  postBody: {
    fontSize: 14,
    color: '#666666',
  },

  postAuthor: {
    fontSize: 14,
    color: '#999999',
  },
});

export default Post;
