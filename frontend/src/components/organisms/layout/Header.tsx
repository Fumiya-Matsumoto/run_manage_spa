import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import { useSignOut } from "../../../hooks/useSignOut";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser } = useContext(AuthContext);
  const { signout } = useSignOut();
  const navigation = useNavigate();
  const onClickHome = useCallback(() => navigation("/"), [navigation]);
  const onClickPracticePosts = useCallback(() => navigation("/practice_posts"), [navigation]);
  const onClickFeeds = useCallback(() => navigation("/feeds"), [navigation]);
  const onClickMypage = useCallback(() => navigation("/mypage"), [navigation]);
  const onClickLogOut = useCallback(() => signout(), [navigation]);
  const onClickLogIn = useCallback(() => navigation("/signin"), [navigation]);
  const onClickSignUp = useCallback(() => navigation("/signup"), [navigation]);

  const AuthLinks = () => {
    if (!loading) {
      if (isSignedIn) {
        return <Link onClick={onClickLogOut}>ログアウト</Link>;
      } else {
        return (
          <>
            <Link onClick={onClickLogIn}>ログイン</Link>
            <Link onClick={onClickSignUp}>新規登録</Link>
          </>
        )
      }
    } else {
      return <></>
    }
  }

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
          <AuthLinks />
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
