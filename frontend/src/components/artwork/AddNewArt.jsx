import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Button
} from '@chakra-ui/react'

import { AiOutlinePlus } from "react-icons/ai";
export default function AddNewArt() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} leftIcon={<AiOutlinePlus style={{ fontWeight: 800 }} />} colorScheme='blue' color={"white"} variant='solid' marginLeft={"100"}>
                New Art
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minW={650}>
                    <ModalHeader>Add the new art here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={16}>
                        hello , a form will be here
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}