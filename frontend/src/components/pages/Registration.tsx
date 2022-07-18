import { memo, FC, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useSignUp } from "../../hooks/useSignUp";

export const Registration: FC = memo(() => {
  const { signup, loading } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onChangePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordConfirmation(e.target.value);

  const onClickSignUp = () => signup(email, password, passwordConfirmation);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
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
          <Input
            placeholder="確認用パスワード"
            value={passwordConfirmation}
            onChange={onChangePasswordConfirmation}
          />
          <PrimaryButton
            disabled={email === ""}
            loading={loading}
            onClick={onClickSignUp}
          >
            新規登録
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});