import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
 
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { createUser, signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
})

const [isSubmitting, setIsSubmitting] = useState(false)

const submit = async () => {
  if(!form.email || !form.password) 
  {
    Alert.alert("Error","Please fill in all the fields")
  }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // set it to a global state

      router.replace("/home")
    } catch (error) {
      Alert.alert("Error", error.message)
    } finally {
      setIsSubmitting(false);
    }
 
}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[84vh] w-full px-4 my-6 justify-center">
          <Image source={images.logo}
            resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="text-2xl font-psemibold text-white mt-10 text-semibold">
            Log in to Aora</Text>
            <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles=" mt-7"
              isLoading={isSubmitting} />

              <View className="flex-row flex justify-center pt-5 gap-2">
                <Text className="text-gray-100 text-lg font-pregular">Don't have an account?
                </Text>
                <Link href="/Sign-up"
                 className="text-secondary text-lg font-psemibold">
                  Sign Up
                </Link>
              </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn