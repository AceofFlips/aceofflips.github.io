import {Center} from '@/components/ui/center'
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Box } from '@/components/ui/box';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'


export default function Index() {
  return (
    <GluestackUIProvider>
        <Center>
          <Heading size = '4xl'>
              Welcome to My App!
          </Heading>
        </Center>
        <Box className='p-2'>
            <Button>
                <ButtonText>
                    <Link href='/about'>
                        Go to About screen
                    </Link>
                </ButtonText>
            </Button>
        </Box>
    </GluestackUIProvider>
  );
}
