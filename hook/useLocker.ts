import { useContext } from 'react'
import { LockerContext } from '@/context/LockerProvider'

export function useLocker () {
  return useContext(LockerContext)
}
