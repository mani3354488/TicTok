import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [paused, setPaused] = useState(false);
  const [isLiked, setisLiked] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
        ...post,
        likes: post.likes + likesToAdd,
    });
    setisLiked(!isLiked)
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: post.videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />
          <View style={styles.uiButton}>
            <View style={styles.verticalButton}>
              <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
              />
              <TouchableOpacity
                style={styles.verticalIcon}
                onPress={onLikePress}>
                <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                <Text style={styles.iconLabel}>{post.likes}</Text>
              </TouchableOpacity>
              <View style={styles.verticalIcon}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.iconLabel}>{post.comments}</Text>
              </View>
              <View style={styles.verticalIcon}>
                <MaterialCommunityIcons
                  name={'share'}
                  size={40}
                  color="white"
                />
                <Text style={styles.iconLabel}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.horizontalButton}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.music}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image style={styles.songImage} source={{uri: post.songImage}} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
