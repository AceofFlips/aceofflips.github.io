import { FlatList, Text, View, Dimensions } from 'react-native'
import React, {useState} from 'react'


const data = [
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com'},
    {id: 3, name: 'Mei', email: 'mei@gmail.com'},
    {id: 4, name: 'Steve', email: 'steve@gmail.com'}
]


const ThemedTable = () => {
    const item = ({ item }) => (
        <View className="flex flex-row justify-center w-full">
            <View className="border border-foreground sm:flex hidden w-1/3 bg-accent">
                <Text className="text-center text-foreground">{item.id}</Text>
            </View>
            <View className="border border-foreground flex sm:w-1/3 w-1/2 bg-background">
                <Text className="text-center text-foreground">{item.name}</Text>
            </View>
            <View className="border border-foreground flex sm:w-1/3 w-1/2 bg-background">
                <Text className="text-center text-foreground">{item.email}</Text>
            </View>
        </View>
    )
    return (
        <View className="w-full">
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} className="" />
        </View>
    )
}
export {ThemedTable}