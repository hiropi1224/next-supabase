import create from 'zustand'
import { EditedTask, EditedNotice } from './types/types'

// storeの型定義
type State = {
  editedTask: EditedTask
  editedNotice: EditedNotice
  updateEditedTask: (payload: EditedTask) => void
  updateEditedNotice: (payload: EditedNotice) => void
  resetEditedTask: () => void
  resetEditedNotice: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '' },
  editedNotice: { id: '', content: '' },

  // タスクのアップデート用
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
      },
    }),

  // タスクの初期化用
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),

  // お知らせのアップデート用
  updateEditedNotice: (payload) =>
    set({
      editedNotice: {
        id: payload.id,
        content: payload.content,
      },
    }),

  // お知らせの初期化用
  resetEditedNotice: () => set({ editedNotice: { id: '', content: '' } }),
}))

export default useStore
