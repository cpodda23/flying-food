import { call, put, takeLatest } from 'redux-saga/effects'
import { getTags } from '../../api'
import { TagDto } from '../../api/types'
import { tagsActions } from './reducer'

function* fetchTags() {
  const tags: TagDto[] = yield call(getTags)
  yield put(tagsActions.fetchTagsSuccess(tags))
}

export function* tagsSaga() {
  yield takeLatest(tagsActions.fetchTags.toString(), fetchTags)
}
