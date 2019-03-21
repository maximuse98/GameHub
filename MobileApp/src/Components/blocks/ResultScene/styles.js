import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;

  position: relative;
`

export const Background = styled.Image.attrs({
  resizeMode: 'cover',
  resizeMethod: 'scale',
})`
  flex: 1;
`

export const Sprite = styled.Image`
  position: absolute;

  top: ${({ top }) => top};
  left: ${({ left }) => left};

  z-index: 1;
`

const dialogBoxHeight = 75

export const DialogBox = styled.View.attrs({
  padding: 5,
})`
  position: absolute;

  width: 100%;
  height: ${dialogBoxHeight};

  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);

  border-top-color: black;
  border-top-width: 1;

  z-index: 3;
`

export const ActorNameContainer = styled.View.attrs({
  padding: 5,
})`
  position: absolute;

  left: 0;
  bottom: ${dialogBoxHeight - 1};

  background: rgba(0, 0, 0, 0.5);
  border-color: black;
  border-width: 1;

  z-index: 4;
`

export const Text = styled.Text`
  color: yellow;
`
