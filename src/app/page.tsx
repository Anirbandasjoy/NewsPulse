import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import React from "react";

const page = () => {
  return (
    <Container>
      <div>
        <Header />
        <Menu />
      </div>
    </Container>
  );
};

export default page;
