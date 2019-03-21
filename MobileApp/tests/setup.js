import mockRender from 'react-native-mock-render'
import 'jsdom-global/register'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-native', () => mockRender, {
  virtual: true,
})
