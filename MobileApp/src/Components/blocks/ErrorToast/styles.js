import styled from 'styled-components/native'
import { colors, metrics } from 'Themes'

export const ToastContainer = styled.View`
  position: absolute;
  left: ${metrics.screenWidth * 0.1};
  right: ${metrics.screenWidth * 0.1};
  bottom: ${metrics.heightPercentageToDP(10)};
`

export const Toast = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const ToastContent = styled.View.attrs({
  padding: 10,
})`
  flex: 1;
  border-radius: 5;
  opacity: 0.9;

  justify-content: center;
  align-items: center;

  background-color: ${colors.salmon};
`

export const Text = styled.Text`
  color: ${colors.white};

  text-align: center;
`
