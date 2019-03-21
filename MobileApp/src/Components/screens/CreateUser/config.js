import Yup from 'yup'

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5)
    .max(12),
})
