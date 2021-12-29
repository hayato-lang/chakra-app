/* eslint-disable react-hooks/exhaustive-deps */

import { 
  Wrap, 
  WrapItem,
  Spinner, 
  Center, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  useDisclosure, 
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(() => onOpen(), []);
  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
    ): (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard 
                  imageUrl="https://source.unsplash.com/random" 
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser} 
                  />
               </WrapItem>
          ))}
        </Wrap>
    )}
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slider Bottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="勇人" isReadOnly/>
              <FormLabel>フルネーム</FormLabel>
              <Input value="Hayato Tajima" isReadOnly/>
              <FormLabel>Mail</FormLabel>
              <Input value="1234@yahoo.co.jp" isReadOnly/>
              <FormLabel>Tel</FormLabel>
              <Input value="000-1234-5678" isReadOnly/>
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>

  );
});