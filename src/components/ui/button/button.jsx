import React, { forwardRef } from "react";
import { StyledButton } from "./style";

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
