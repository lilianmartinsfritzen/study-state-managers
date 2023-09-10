import { describe, expect, it } from 'vitest'
import { useStore } from '.'

// We can use useStore, which is a hook, even if we are not inside a react 
// component, as long as it is used from the functions it provides, 
// such as getState, setState, among others.

describe('player zustand', () => {
  it('should be able to play', () => {
    const { play } = useStore.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })
})