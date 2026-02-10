import { Stack } from 'expo-router';
import { Theme } from '@/components/themes/provider'

export default function RootLayout() {
    return (
        <Theme>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </Theme>
    );
}
