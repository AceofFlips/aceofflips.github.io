import {Text, View, StyleSheet, FlatList, ActivityIndicator, Pressable, TextInput} from "react-native";
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useEffect, useState} from "react";
import {useFetch} from "@/services/api";
import {List} from "postcss/lib/list";

export default function Index() {


    const [data, setData] = useState<any>([]);
    const [searchText, setSearchText] = useState<string>('John');


    //const{data,error,loading, refetch} = useFetch(`https://dummyjson.com/users`);
    //if (loading) return <ActivityIndicator size={"large"} color={"red"}/>
    //if (error) return <Text>Error: {error}</Text>
    async function buttonFetch(){
        const response = await fetch(`https://dummyjson.com/users/search?q=${searchText}`);
        if (!response.ok) {}
        const body = await response.json();
        console.log(body);
        setData(body.users);
        console.log(data)
    }

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

        <Pressable onPress={buttonFetch}>
            <Text>Fetch Users</Text>
        </Pressable>
        <FlatList data={data} renderItem={({item}) =>(
             <View style={styles.wrapper}>
                 <ThemedText>{item?.username}</ThemedText>
                 <ThemedText>{item?.birthDate}</ThemedText>
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
