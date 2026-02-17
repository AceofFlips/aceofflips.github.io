import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import {useTheme} from "@/components/themes/context";
import clsx from "clsx";


export default function AboutScreen() {
    return (
        <View className="flex-1 bg-background justify-center items-center">
            <Text className="text-foreground text-5xl">
                About Me!
            </Text>
            <Text className="text-foreground p-3 text-center">
                My name is Madeleine Brown. I'm a senior at Franklin Central High School and I'm enrolled in three Computer Science classes. I'm also stinky.
            </Text>
        </View>
    );
}

