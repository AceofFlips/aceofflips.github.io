import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function Index() {
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
