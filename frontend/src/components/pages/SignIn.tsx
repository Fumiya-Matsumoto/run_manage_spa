import { memo, FC, useState, ChangeEvent, useContext } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useSignIn } from "../../hooks/useSignIn";
import { AuthContext } from "../../App";

export const SignIn: FC = memo(() => {
  const { loading } = useContext(AuthContext);
  const { signin } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onClickSignIn = () => signin(email, password);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          RunManage
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="メールアドレス"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            placeholder="パスワード"
            value={password}
            onChange={onChangePassword}
          />
          <PrimaryButton
            disabled={email === ""}
            loading={loading}
            onClick={onClickSignIn}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});