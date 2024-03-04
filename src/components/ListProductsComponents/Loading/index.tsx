import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { style } from './styles';

const Loading = () => {
    return (
      <View style={style.container}>
        <ActivityIndicator color="#222" size='large' style={style.loadingIndicator}/>
      </View>
    );
}

export default Loading;