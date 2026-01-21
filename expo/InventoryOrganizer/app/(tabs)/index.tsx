import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    AlertDialogBody,
} from '@/components/ui/alert-dialog';

import {Center} from '@/components/ui/center'
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Box } from '@/components/ui/box';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import React, { useState } from 'react';


export default function Index() {
    const [showAlertDialog, setShowAlertDialog] = React.useState(false);
    const handleClose = () => setShowAlertDialog(false);
  return (
    <GluestackUIProvider mode = 'system'>
        <Center>
          <Heading size = '4xl'>
              Welcome to My App!
          </Heading>
        </Center>
        <Box className='p-2'>
            <Link href='/about'>
                <Button>
                    <ButtonText>
                        Go to About screen
                    </ButtonText>
                </Button>
            </Link>
        </Box>
        <Box className='p-2'>
            <>
                <Button onPress={() => setShowAlertDialog(true)}>
                    <ButtonText>Open Dialog</ButtonText>
                </Button>
                <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
                    <AlertDialogBackdrop />
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <Heading className="text-typography-950 font-semibold" size="md">
                                Do you want a cookie?
                            </Heading>
                        </AlertDialogHeader>
                        <AlertDialogBody className="mt-3 mb-4">
                            <Text size="sm">
                                Warning: We are not held liable for any allergic reaction, sickness, or death that occurs
                                from consuming the cookie
                            </Text>
                        </AlertDialogBody>
                        <AlertDialogFooter className="">
                            <Button
                                variant="outline"
                                action="secondary"
                                onPress={handleClose}
                                size="sm"
                            >
                                <ButtonText>Cancel</ButtonText>
                            </Button>
                            <Button size="sm" onPress={handleClose}>
                                <ButtonText>Take It</ButtonText>
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
        </Box>
    </GluestackUIProvider>
  );
}
