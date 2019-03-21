import styled from 'styled-components/native'

export const Overlay = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;
  justify-content: center;
`

export const Choice = styled.View.attrs({
  padding: 5,
})`
  width: 100%;
`

export const Text = styled.Text`
  color: yellow;

  font-size: 20;
`
