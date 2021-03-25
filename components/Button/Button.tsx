import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const SButton = styled(Button)`
  && :hover {
    color: red;
  }
`;
export default function StyledButton({children, color}) {

    return (
        <SButton color={color}>{children}</SButton>
    );
}