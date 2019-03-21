import gameSaga from './Game'

const startSagas = ({ run }) => {
  run(gameSaga)
}

export default startSagas
