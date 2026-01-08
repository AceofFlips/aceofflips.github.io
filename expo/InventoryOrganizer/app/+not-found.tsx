import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found"}} />
            <ThemedView style = {styles.container}>
                <Link href="/">
                    <ThemedText type = "link">
                        Go back to Home Screen!
                    </ThemedText>
                </Link>
            </ThemedView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})