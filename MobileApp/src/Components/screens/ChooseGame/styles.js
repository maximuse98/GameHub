import styled from 'styled-components/native'

export const GameSelectorContainer = styled.View`
  flex: 1;
  background-color: #fff;

  flex-direction: row;
`

export const HalfContent = styled.View`
  flex: 1;
`

export const ItemContainer = styled.TouchableOpacity.attrs({})`
  width: 100%;
  background-color: #fff;
`

export const ListItemContent = styled.View`
  width: 100%;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Block = styled.View``

export const Separator = styled.View``

export const Text = styled.Text``

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

export const Username = styled.Text`
  align-self: center;
`

export const CreateGameBtn = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 5;

  width: 70%;

  align-self: center;
`

export const CreateGameBtnContent = styled.View.attrs({ padding: 10 })``

export const CreateGameBtnText = styled.Text`
  color: #fff;

  align-self: center;
`
