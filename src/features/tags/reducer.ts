import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagDto } from '../../api/types'

type TagsState = {
  tags: TagDto[]
  selectedTag: string
}

const initialState: TagsState = {
  tags: [],
  selectedTag: ''
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    fetchTagsSuccess: (state, action: PayloadAction<TagDto[]>) => {
      state.tags = action.payload
      state.selectedTag = action.payload.find(({ hidden }) => !hidden)?.id ?? ''
    },
    fetchSelectedTag: (state, action: PayloadAction<string>) => {
      state.selectedTag = action.payload
    }
  }
})

export const tagsReducer = tagsSlice.reducer
export const tagsActions = tagsSlice.actions
