import {reduxActions} from 'modules/user/constants';
import {userSelectorData, userSelectorList} from 'modules/user/selectors';

export function closeUser() {
    return {
        type: reduxActions.close,
    };
}

export function editUser(user) {
    return {
        payload: {user},
        type: reduxActions.edit,
    };
}

export function removeUser(user) {
    return async function(dispatch, getState) {
        const state = getState();
        const list = userSelectorList(state).filter((id) => id !== user.id);
        const data = Object.values(userSelectorData(state)).filter((currentUser) => currentUser !== user);

        dispatch({
            payload: {
                data,
                list,
            },
            type: reduxActions.remove,
        })
    };
}

export function loadUser() {
    return async function(dispatch) {
        const response = await fetch('/api/v1/user.json');
        const json = await response.json();
        const userList = json.data.list;
        const data = userList.reduce(getData, {});
        const list = userList.map(getList);

        dispatch({
            payload: {
                data,
                list,
            },
            type: reduxActions.load,
        });
    };
}

function getData(prev, user) {
    return {
        ...prev,
        [user.id]: user,
    };

}

function getList(user) {
    return user.id;
}

export function saveUser(user) {
    return {
        payload: {user},
        type: reduxActions.save,
    };
}

