import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: 1px solid #3f51b5;
  background-color: #3f51b5;
  color: white;
  padding: 12px 6px;
`;

export default function Button({ text, onClick }) {
  return (<Wrapper onClick={onClick}>{text}</Wrapper>);
}
