import { create } from 'zustand'

type DictionaryState = {
  dictionary: any
  setDictionary: (newDictionary: any) => void
}

export const useDictionaryStore = create<DictionaryState>((set) => ({
  dictionary: null,
  setDictionary: (newDictionary) => set({ dictionary: newDictionary }),
}))
