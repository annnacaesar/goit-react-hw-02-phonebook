import styled from "styled-components";

export const List = styled.ul`
padding: 10px;
`

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 10px;
}
display: flex;
align-items: center;
justify-content: space-between;
`

export const Contact = styled.p`
margin-right: 10px;
font-size: 24px;

`

export const ButtonClose = styled.button`
padding: 0 5px 5px 5px;
font-size: 30px;
width: 40px;
background-color: inherit;
border: 1px solid #630404;
`

