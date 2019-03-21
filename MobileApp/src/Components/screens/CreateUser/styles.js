import styled from 'styled-components/native'

export const CreateUserContainer = styled.View`
  flex: 1;

  background-color: #fff;
`

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Input = styled.TextInput`
  width: 70%;
  height: 35;
  align-self: center;

  background: #fff;

  border-color: #000;
  border-width: 1;
  border-radius: 5;

  padding-vertical: 5;
  padding-horizontal: 10;
`

export const ErrorMessage = styled.Text`
  color: red;
`

export const Row = styled.View.attrs({
  padding: 10,
})`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const LangBtn = styled.TouchableOpacity`
  border-width: 1;
  border-radius: 5;
  border-color: #000;
`

export const LangBtnView = styled.View.attrs({
  margin: 5,
})``

export const LangBtnText = styled.Text.attrs({
  margin: 5,
})`
  color: #000;
`

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 10;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
`

export const SubmitButtonView = styled.View.attrs({
  padding: 10,
})`
  align-items: center;
  justify-content: center;
`

export const SubmitButtonText = styled.Text`
  color: #fff;
`
