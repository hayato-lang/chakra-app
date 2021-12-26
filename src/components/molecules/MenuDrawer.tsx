import { Button, Drawer, DrawerBody, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickSetting: () => void;
  onClickUserManagement: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickSetting, onClickUserManagement } = props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
    <DrawerOverlay>
      <DrawerBody p={0} bg="gray.100">
        <Button w="100%" onClick={onClickHome}>TOP</Button>
        <Button w="100%" onClick={onClickSetting}>ユーザー一覧</Button>
        <Button w="100%" onClick={onClickUserManagement}>設定</Button>
      </DrawerBody>
    </DrawerOverlay>
  </Drawer>
  );
});