import Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  scenarioId: Yup.string().required(),
})
