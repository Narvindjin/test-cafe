import styled from "styled-components";
import { Section } from "/src/components/styled";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  display: flex;
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  box-sizing: border-box;
  min-width: 1280px;
  background-color: #fff6d9;
  align-items: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 600px;
`;

export const Text = styled(Paragraph)`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 525px;
`;

export const WorkTime = styled(Paragraph)`
  margin-top: 0px;
  margin-bottom: 20px;
  background: #ffeead;
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
`;

export const Address = styled(Paragraph)`
  margin: 0px;

  &::before {
    display: inline-block;
    width: 14px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik04LjAwMDA0IDAuNUM0LjgwNDg4IDAuNSAyLjIwNTQ0IDMuMDk5NDQgMi4yMDU0NCA2LjI5NDU2QzIuMjA1NDQgMTAuMjU5OCA3LjM5MTA0IDE2LjA4MSA3LjYxMTgyIDE2LjMyNjlDNy44MTkxOSAxNi41NTc5IDguMTgxMjYgMTYuNTU3NSA4LjM4ODI2IDE2LjMyNjlDOC42MDkwNCAxNi4wODEgMTMuNzk0NiAxMC4yNTk4IDEzLjc5NDYgNi4yOTQ1NkMxMy43OTQ2IDMuMDk5NDQgMTEuMTk1MiAwLjUgOC4wMDAwNCAwLjVaTTguMDAwMDQgOS4yMDk5N0M2LjM5MjQ4IDkuMjA5OTcgNS4wODQ2NiA3LjkwMjEyIDUuMDg0NjYgNi4yOTQ1NkM1LjA4NDY2IDQuNjg3IDYuMzkyNTEgMy4zNzkxOSA4LjAwMDA0IDMuMzc5MTlDOS42MDc1NyAzLjM3OTE5IDEwLjkxNTQgNC42ODcwMyAxMC45MTU0IDYuMjk0NTlDMTAuOTE1NCA3LjkwMjE2IDkuNjA3NTcgOS4yMDk5NyA4LjAwMDA0IDkuMjA5OTdaIiBmaWxsPSIjRkZCMzM0Ij48L3BhdGg+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNSkiPjwvcmVjdD4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=");
  }
`;
