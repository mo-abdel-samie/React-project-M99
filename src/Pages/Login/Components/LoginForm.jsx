import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Paper,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";

export default function LoginForm() {
  const { loginFormik, isAuth } = useAuth();

  return (
    <Container
      component={Flex}
      justify="center"
      align="center"
      h="100vh"
      w="100wh"
    >
      <Box
        component={Paper}
        w="50%"
        shadow="lg"
        radius="lg"
        p="xl"
        bg="green.1"
      >
        <Flex direction="column" gap={10}>
          <Title ta="center">Login</Title>
          {isAuth && <Text>Credintionals not correct</Text>}
          <Input.Wrapper
            label="User email"
            error={loginFormik.touched.email && loginFormik.errors.email}
          >
            <Input
              {...loginFormik.getFieldProps("username")}
              // onChange={loginFormik.handleChange}
              // onBlur={loginFormik.handleBlur}
              // name="email"
              type="text"
              placeholder="username"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="Password"
            error={loginFormik.touched.password && loginFormik.errors.password}
          >
            <PasswordInput
              {...loginFormik.getFieldProps("password")}
              // onChange={loginFormik.handleChange}
              // onBlur={loginFormik.handleBlur}
              // name="password"
              placeholder="**********"
            />
          </Input.Wrapper>
          <Button
            disabled={!loginFormik.isValid}
            onClick={loginFormik.handleSubmit}
            variant="outline"
            color="green.6"
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
