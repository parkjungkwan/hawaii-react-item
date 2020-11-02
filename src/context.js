export const context = {
    get : 'GET', 
    post : 'POST', 
    put : 'PUT', 
    delete : 'DELETE', 
    url : `http://localhost:8080`, 
    auth : () => (
        {headers: { "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json;charset=UTF-8",
        "Accept":"application/json",
        "Authorization": `JWT fefege...`}})
}
export default context 


export const moveTo = dest => (dispatch, getState, { history }) => { history.push(dest)}
/*
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/user')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/signup-form')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/signin-form')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/user-detail')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/modifying-user-info')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/membership-withdrawal')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/userlist')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/item-detail')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/modify-item')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/register-item')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/remove-item')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/article')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/article-list')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/edit-article')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/read-article')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/remove-article')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/article-write-form')}
export const goToHome = () => (dispatch, getState, { history }) => { history.push('/cabbage-price-predict')}*/