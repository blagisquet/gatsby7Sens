import styled from "styled-components";

import { colors } from './helpers';

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 3em;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 20%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border-bottom: ${props => (props.active ? "none" : "")};
  transition: background-color 0.5s ease-in-out;
`;

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")};
`;
