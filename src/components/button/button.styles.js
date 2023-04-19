import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${ (props) => props.varient === 'outline' ? "#FFF" : "#4CAF50"};
  border: 2px solid #4CAF50;
  color: ${ (props) => (props.varient === 'outline' ? '#4CAF50' : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: ${ (props) => props.varient !== 'outline' ? "#FFF" : "#4CAF50"};
    color: ${ (props) => (props.varient !== 'outline' ? '#4CAF50' : "#FFF")};}
`

export const FancyButton = styled(StyledButton)`
 background-image: linear-gradient(to left, #f6d395 0%, #fda085 100%);
 border:none;
 `

export const SubmitButton = styled(StyledButton).attrs({
  type: 'submit',
})`
  box-shawdow: 0 9px #999;
  &:active {
    background-color: ${ (props) => props.varient !== 'outline' ? "#FFF" : "#4CAF50"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

`