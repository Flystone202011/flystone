const ErrorMessages = {
    required: '必須項目です。',
    password: '英字、数字を組み合わせた8文字以上16文字以内で入力。',
    userId:  '英字、数字を組み合わせた3文字以上9文字以内で入力。'
  }

const Regex = {
    password: /^(?=.*?[a-zA-Z])(?=.*?\d)[!-\~]{8,16}$/,
    userId:/^(?=.*?[a-zA-Z])(?=.*?\d)[!-\~]{3,9}$/
}

export const required = value => (value || typeof value === 'number' ? undefined : ErrorMessages.required)

export const password = value => (value && !Regex.password.test(value) ? ErrorMessages.password : undefined)

export const userId = value => (value && !Regex.userId.test(value) ? ErrorMessages.userId : undefined)

export const confirmPass = value => pass => {
    if (value !== pass) {
      return 'パスワードが違います'
    }
    return undefined
  }