import { Anchor, Box, Container, Flex } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function MainNavbar() {
  const { isAuth, logout } = useAuth();

  return (
    <Box bg="gray.1">
      <Container>
        <Flex mih={50} gap="md" justify="space-between" align="center">
          <Anchor
            component={NavLink}
            to="/"
            underline="never"
            fw={900}
            c="green.6"
          >
            Store
          </Anchor>

          <Flex gap={15}>
            <Anchor component={NavLink} to="/" underline="hover" c="green.5">
              Home
            </Anchor>

            {isAuth ? (
              <>
                <Anchor
                  component={NavLink}
                  to="/admin/profile"
                  underline="hover"
                  c="green.5"
                >
                  Profile
                </Anchor>
                <Anchor underline="hover" c="green.5" onClick={logout}>
                  Logout
                </Anchor>
              </>
            ) : (
              <Anchor
                component={NavLink}
                to="/admin/login"
                underline="hover"
                c="green.5"
              >
                Login{" "}
              </Anchor>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
