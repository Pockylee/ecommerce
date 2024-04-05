import styled from "styled-components";

const StyledButton = styled.button`
background-color: ${props => props.primary ? "navy" : "white"};
color: ${props => props.primary ? "white" : "navy"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid navy;
border-radius: 3px;

&:hover {
  background-color: ${props => props.primary ? "darkblue" : "lightgray"};
}
`;

export default StyledButton;