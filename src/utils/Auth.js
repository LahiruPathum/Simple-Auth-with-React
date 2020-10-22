function getAuthToken() {
    const name = window.localStorage.getItem('@user_name');
    return name;
}

export default  {
    getAuthToken,
};