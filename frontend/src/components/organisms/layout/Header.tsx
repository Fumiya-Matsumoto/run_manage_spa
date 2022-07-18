import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigation = useNavigate();
  const onClickHome = useCallback(() => navigation("/home"), [navigation]);
  const onClickPracticePosts = useCallback(() => navigation("/home/practice_posts"), [navigation]);
  const onClickFeeds = useCallback(() => navigation("/home/feeds"), [navigation]);
  const onClickMypage = useCallback(() => navigation("/home/mypage"), [navigation]);

  return (
    <>
      <Flex 
        as="nav" 
        bg="#0BBBD7" 
        color="gray.50" 
        align="center" 
        justify="space-between"
        padding = {{ base: 3, md: 5 }}
      >
        <Flex 
          align="center" 
          as="a" 
          mr={8} 
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            RUN MANAGE
          </Heading>
        </Flex>
        <Flex 
          align="center" 
          fontSize="sm" 
          flexGrow={2} 
          display={{ base: "none", md: "flex"}}
        >
          <Box pr={4}>
            <Link onClick={onClickPracticePosts}>練習日誌</Link>
          </Box>
          <Link onClick={onClickFeeds}>フィード</Link>
          <Link onClick={onClickHome}>カレンダー</Link>
          <Link>チーム</Link>
          <Link onClick={onClickMypage}>マイページ</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer 
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickPracticePosts={onClickPracticePosts}
        onClickFeeds={onClickFeeds}
        onClickMypage={onClickMypage}
      />
    </>
  )
});
