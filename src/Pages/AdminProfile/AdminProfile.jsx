import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { useAuth } from "../../Contexts/AuthContext";
import { Avatar, Title } from "@mantine/core";

export default function AdminProfile() {
  const { user } = useAuth();

  console.log(user);

  return (
    <MainLayout>
      <Avatar name={user.firstName} src={user.image} />
      <Title>
        {user.firstName} {user.lastName}
      </Title>
    </MainLayout>
  );
}
