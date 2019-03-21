import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const widthPercentageToDP = widthPercent =>
  PixelRatio.roundToNearestPixel((width * widthPercent) / 100)

const heightPercentageToDP = heightPercent =>
  PixelRatio.roundToNearestPixel((height * heightPercent) / 100)

const fontPercantageToDP = fontSize =>
  PixelRatio.roundToNearestPixel(((width / 9) * 16 * fontSize) / 100)

export default {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  paddingSmall: 10,
  widthPercentageToDP,
  heightPercentageToDP,
  fontPercantageToDP,
}
