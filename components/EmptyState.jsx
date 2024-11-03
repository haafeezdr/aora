import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="flex px-4 items-center justify-center">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode='contain'/>
      <Text className="text-xl font-pmedium text-white">{title}</Text>
      <Text className="text-sm text-center font-psemibold text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create a video"
        handlePress={() => router.push('/create')}
        containerStyles="w-full my-5"
      />
    </View>
  )
}

export default EmptyState