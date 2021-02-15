import React, {useState} from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles';


const Post = () => {
    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'}}
                    style={styles.video}
                    onError={(e: LoadError) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
            <View style={styles.uiButton}>
                <View style={styles.verticalButton}>
                    <Image style={styles.profilePicture} source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                    <View style={styles.verticalIcon}>
                        <AntDesign name={'heart'} size={40} color="white" />
                        <Text style={styles.iconLabel}>1010</Text>
                    </View>
                    <View style={styles.verticalIcon}>
                        <FontAwesome name={'commenting'} size={40} color="white" />
                        <Text style={styles.iconLabel}>comm</Text>
                    </View>
                    <View style={styles.verticalIcon}>
                        <MaterialCommunityIcons name={'share'} size={40} color="white" />
                        <Text style={styles.iconLabel}>share</Text>
                    </View>
                </View>
                <View style={styles.horizontalButton}>
                    <View>
                        <Text style={styles.handle}>@manikantanath</Text>
                        <Text style={styles.description}>Hey check this out!</Text>
                        <View style={styles.music}>
                            <Entypo name={'beamed-note'} size={24} color="white" />
                            <Text style={styles.songName}>Aron Smith - Dancing'</Text>
                        </View>
                    </View>
                    <Image style={styles.songImage} source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                </View>
            </View>
        </View>
    );
}

export default Post;