import { call, put, takeLatest } from 'redux-saga/effects'
import { getTags } from '../../api'
import { TagDto } from '../../api/types'
import { tagsActions } from './reducer'

function* fetchTags(action: ReturnType<typeof tagsActions.fetchTagsSuccess>) {
  const tags: TagDto[] = yield call(getTags)
  yield put(tagsActions.fetchTagsSuccess(tags))
}

export function* tagsSaga() {
  yield takeLatest(tagsActions.fetchTagsSuccess, fetchTags)
}
