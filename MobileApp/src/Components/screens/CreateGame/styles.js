import styled from 'styled-components/native'

export const CreateGameContainer = styled.View`
  flex: 1;

  flex-direction: row;
  background-color: #fff;
`

export const HalfBlock = styled.View`
  flex: 1;
`

export const Text = styled.Text``

export const ListItemContainer = styled.View.attrs({ padding: 10 })`
  width: 100%;

  border-color: #000;
  border-width: 1;

  background-color: ${props => (props.selected ? '#CDCDCD' : '#fff')};
`

export const ErrorMessage = styled.Text`
  color: red;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  align-self: center;

  margin-top: 10;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
`

export const SubmitButtonView = styled.View.attrs({
  padding: 10,
})``

export const SubmitButtonText = styled.Text`
  color: #fff;

  text-align: center;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Block = styled.View``

export const Separator = styled.View``

export const FieldName = styled.Text`
  color: blue;
  padding-bottom: 2;
`

export const FieldValue = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20;
  padding-bottom: 5;

  color: black;
`
