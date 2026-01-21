import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Center} from "@/components/ui/center";
import {Box} from "@/components/ui/box";

export default function AboutScreen() {
    return (
        <GluestackUIProvider>
            <Center>
                <Heading size = '4xl'>
                    About Me!
                </Heading>
            </Center>
            <Box className="m-4">
                <Text>
                    My name is Madeleine Brown. I&#39;m a senior at Franklin Central High School and I&#39;m enrolled in three
                    Computer Science classes. I&#39;m also stinky.
                </Text>
            </Box>
        </GluestackUIProvider>
    );
}
