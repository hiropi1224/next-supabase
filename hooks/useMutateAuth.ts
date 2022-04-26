import { useState } from 'react'
import { supabase } from '../utils/supabase'
import { useMutation } from 'react-query'
export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // formリセット用関数
  const reset = () => {
    setEmail('')
    setPassword('')
  }

  // ログイン用関数
  const loginMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )

  // 登録用関数
  const registerMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  }
}
