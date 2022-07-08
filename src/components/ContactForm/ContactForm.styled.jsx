import styled from "styled-components";

export const InputContainer = styled.div`
width: 100%;
margin: 0;
padding: 0;
margin: 10px 0 10px 0;
`

export const Input = styled.input`
background-color: #2ceee4a7;
/* width: calc(50% - 5px); */
height: 40px;
margin: 0;
padding: 0;

&:not(:last-child){
	margin-right: 10px;
}
`