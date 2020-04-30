import { all, takeLatest, takeEvery } from 'redux-saga/effects'; // eslint-disable-line
// import * as userSagas from './user';
// import * as commentsSagas from './comments';

// import { userTypes } from 'ducks';

export default function* rootSaga() {
    yield all([
        // takeLatest(userTypes.LOGIN, userSagas.login),
        // takeLatest(userTypes.LOGOUT, userSagas.logout),
        // takeEvery(userTypes.GET_USER, userSagas.getUser),
    ]);
}
