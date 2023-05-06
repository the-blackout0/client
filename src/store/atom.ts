import { atom } from 'jotai'

export const userIdAtom = atom<string | null>(null)

export const nftsAtom = atom<any[]>([])
export const selectedDeckAtom = atom<number[]>([])
