export const setFirebaseErrors = code => {
  switch (code) {
    case 'auth/invalid-email':
      return 'O endereço de e-mail não é válido.'
    case 'auth/email-already-exists':
      return 'O e-mail fornecido já está em uso.'
    case 'auth/email-already-in-use':
      return 'O e-mail fornecido já está em uso.'
    case 'auth/user-not-found':
      return 'O usuário não correponde à nenhuma credencial.'
    case 'auth/invalid-password':
      return 'A senha é inválida, precisa ter pelo menos 6 caracteres.'
    case 'auth/wrong-password':
      return 'Senha incorreta.'
    case 'auth/weak-password':
      return 'A senha é inválida, precisa ter pelo menos 6 caracteres.'
    case 'auth/too-many-requests':
      return 'As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois de algum tempo.'
    case 'auth/network-request-failed':
      return 'Falha de conexão com a rede.'
    default:
      return null
  }
}
