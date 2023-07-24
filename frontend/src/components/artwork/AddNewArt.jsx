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
import ArtworkForm from './ArtworkForm';
export default function AddNewArt() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} leftIcon={<AiOutlinePlus style={{ fontWeight: 800 }} />} colorScheme='blue' color={"white"} variant='solid' marginLeft={"100"} >
                New Art
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minW={650}>
                    <ModalHeader>Add the new art here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <ArtworkForm onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}