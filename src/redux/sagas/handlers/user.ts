import { call, put } from 'redux-saga/effects';
import { setUser } from '../../../actions/user';
import { User } from '../../../objects/user';
import { requestGetUser } from '../requests/user';

export function* handleGetUser() {
    try {
        // IS THIS THE CORRECT WAY TO CALL THE API ?
        const response: { data: User } = yield call(requestGetUser);
        let user = response.data;
        console.log('handleGetUser: ', user);
        yield put(setUser(user));
    } catch (error) {
        console.log(error);
    }
}
