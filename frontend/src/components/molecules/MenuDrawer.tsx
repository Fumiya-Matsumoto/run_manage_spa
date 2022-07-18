import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay
  } from "@chakra-ui/react";
  import { memo, FC } from "react";
  
  type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickPracticePosts: () => void;
    onClickFeeds: () => void;
    onClickMypage: () => void;
  };
  
  export const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickPracticePosts, onClickFeeds, onClickMypage } = props;
    return (
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={onClickFeeds}>
                練習日誌
              </Button>
              <Button w="100%" onClick={onClickPracticePosts}>
                フィード
              </Button>
              <Button w="100%" onClick={onClickHome}>
                カレンダー
              </Button>
              <Button w="100%">
                チーム
              </Button>
              <Button w="100%" onClick={onClickMypage}>
                マイページ
              </Button>
              <Button w="100%">
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  });