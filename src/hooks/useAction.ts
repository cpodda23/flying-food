import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'

export function useAction(action: Action, dependencies: unknown[]) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action)
  }, dependencies) // eslint-disable-line

  return null
}
