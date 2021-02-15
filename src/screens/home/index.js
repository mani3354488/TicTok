import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/post';

const post1 = {
  id: 'p1',
  videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: 'manikantanath',
    imageUri:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  description: 'Hey check this out!!',
  songName: 'Aron Smith - Dancing',
  songImage:
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  likes: 1010,
  comments: 388,
  shares: 34,
};

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
