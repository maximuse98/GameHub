import I18N from 'react-native-i18n'

import en from './locales/en.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'

I18N.fallbacks = true

I18N.translations = {
  en,
  ru,
  uk,
}

I18N.locale = 'uk'

export default I18N
