import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagDto } from '../../api/types'

type TagsState = {
  tags: TagDto[]
}

const initialState: TagsState = {
  tags: []
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    fetchTagsSuccess: (state, action: PayloadAction<TagDto[]>) => {
      state.tags = action.payload
    }
  }
})

export const tagsReducer = tagsSlice.reducer
export const tagsActions = tagsSlice.actions
