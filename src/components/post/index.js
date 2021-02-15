import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

const Post = () => {
    return (
        <View style={styles.container}>
            <Video
                source={{uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}
                style={styles.video}
                onError={(e: LoadError) => console.log(e)}
                resizeMode={'cover'}
            />
        </View>
    );
}

export default Post;