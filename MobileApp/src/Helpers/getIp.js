import { NetworkInfo } from 'react-native-network-info'

export const getLocalIp = () => {
  return new Promise((resolve, reject) => {
    try {
      NetworkInfo.getIPV4Address(ip => {
        resolve(ip)
      })
    } catch (err) {
      reject()
    }
  })
}
