import { View, Text, FlatList } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';





const Item = ({ title, appPic }) => (

  <TouchableOpacity className="mx-7 justify-center items-center">
    <Image source={appPic}
      className="w-[100] h-[100] rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40 "
      resizeMode='cover'
    />
    <Text className="text-black text-xl font-pextrabold">{title}</Text>

  </TouchableOpacity>
);



const Trending = ({ posts }) => {

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Item title={item.title} appPic={item.appPic} />}
      keyExtractor={item => item.id}

      horizontal
    />
  )
}

export default Trending