import { View, Text, FlatList, Image, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/Searchinput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

const home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: LatestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        // data={[]}
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-sm font-pmedium text-gray-100">Welcome Back</Text>
                <Text className="text-2xl font-psemibold text-white">Haafeez Daiyab</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-9 "
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput/>

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100">Latest Videos</Text>

              <Trending posts={LatestPosts ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>}
      />
    </SafeAreaView>
  )
}

export default home