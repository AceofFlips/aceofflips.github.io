import {Text, View, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useEffect, useState} from "react";
import {useFetch} from "@/services/api";

export default function Index() {
    const{data,error,loading, refetch} = useFetch("https://dummyjson.com/users");

    if (loading) return <ActivityIndicator size={"large"} color={"red"}/>
    if (error) return <Text>Error: {error}</Text>
  return (
    <ThemedView style={styles.container}>
      <ThemedText type = "title">
          Welcome to My App!
      </ThemedText>
        <Link href="/about">
            <ThemedText type="link">
                Go to About screen
            </ThemedText>
        </Link>
        <FlatList data={data} renderItem={({item}) =>(
             <View style={styles.wrapper}>
                 <Text>{item?.username}</Text>
                 <Text>{item?.birthDate}</Text>
             </View>
            )}>

        </FlatList>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        padding:14,
        marginVertical: 10,
    }
})
