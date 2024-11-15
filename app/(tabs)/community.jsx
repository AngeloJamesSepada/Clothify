import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Topics from '../../components/Topics';

const DATA = [
  {
    id: 1,
    title: "Buddy",

  },
  {
    id: 2,
    title: "Galaysia",


  },
  {
    id: 3,
    title: "NGL FR FR",

  },
];

const Item = ({ title }) => (

  <TouchableOpacity className="mx-3 mt-10 bg-blue-800 w-[250px] h-[50] justify-center items-center border rounded-2xl">
    <Text className="text-black text-2xl font-psemibold">{title}</Text>

  </TouchableOpacity>
);



const community = () => {
  return (
    <SafeAreaView className="bg-lime-300 h-full">
      <Text className="text-xl text-black mt-10 font-psemibold">Connect To Others</Text>
      <Text className="text-3xl text-black  font-pregular">Jevs</Text>
      <Text className="text-2xl text-black font-psemibold mt-10">Choose Your Favorite Topic</Text>
      <View className="justify-center items-center mt-10">
        <Topics
          posts={[{ title: "Don's Kitchen" },
          { title: "Food Delivery" },
          { title: "Instacle" },
          { title: "Jam's Restaurant" },
          { title: "Conso" },] ?? []}
        />
      </View>
    </SafeAreaView>
  )
}

export default community