import styled from 'styled-components/native'
import { colors } from 'Themes'

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`

export const Color = colors.salmon

export const Text = styled.Text`
  color: ${Color};
`
