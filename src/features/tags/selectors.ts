import { RootState } from '../store'

export const selectTags = (state: RootState) =>
  state.tags.tags.filter((tag) => !tag.hidden)

export const selectedTag = (state: RootState) => state.tags.selectedTag
