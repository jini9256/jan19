import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <h1>TodoList</h1>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  background-color: teal;
`;
