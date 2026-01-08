import { Text, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">
                About Me!
            </ThemedText>
            <ThemedText type="default">
                My name is Madeleine Brown. I'm a senior at Franklin Central High School and I'm enrolled in three Computer Science classes. I'm also stinky.
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
