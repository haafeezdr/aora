import { View, Text } from 'react-native'
import { StatusBar } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-bold">App</Text>
        <StatusBar style="auto" />
        <Link href="/home" className="text-xl font-bold text-blue-600">Home</Link>
        </View>
    </SafeAreaView>
  )
}