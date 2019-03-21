export const SOCKET_CALL = 'SOCKET_CALL'
export const socketCall = fields => {
  return {
    type: SOCKET_CALL,
    fields,
  }
}
