import { View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomBotton from '../components/CustomButton';

import { useGlobalContext } from '../context/GlobalProvider';


export default function App() {

  const {isLoading, isLoggedIn} = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="min-h-[84vh] w-full items-center justify-center px-4"> 
            <Image 
              source={images.logo} 
              className="w-[130px] h-[84px]"
              resizeMode='contain'
              />
            <Image 
              source={images.cards} 
              className="max-w-[380px] h-[300px] w-full"
              resizeMode='contain'
              />

              <View className="relative mt-5">
                <Text className="text-white text-3xl font-bold text-center"> 
                  Discover Endless Possibilities with {''}
                  <Text className="text-secondary-200"> 
                   AORA
                  </Text>
                </Text>
                <Image 
                  source={images.path}
                  className="w-[136px] h-[15px] absolute -botttom-1 -right-8"
                  resizeMode='contain'
                  />
              </View>
              <Text className="text-gray-100 text-sm font-pregular text-center mt-7">Where creativity meets innovation: embark on a journey of limitless exploration with AORA.</Text>
              <CustomBotton
                title="Continue with Email"
                handlePress={() => router.push('/Sign-in')}
                containerStyles="w-full mt-7" 
              />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}