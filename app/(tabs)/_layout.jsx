import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-0">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-7 h-7"
      />
    </View>
  )
}

const TabIconM = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-[100]">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-[50] h-[50]"
      />
    </View>
  )
}



const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{

          tabBarShowLabel: false,
          tabBarActiveTintColor: '#7EA9FE',
          tabBarHideOnKeyboard: 'true',
        }}>


        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
              />
            )
          }}
        />


        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIconM
                icon={icons.publish}
                color={color}
                focused={focused}
              />
            )
          }}
        />



        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
              />
            )
          }}
        />


        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="community"
          options={{
            title: 'Community',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.community}
                color={color}
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout