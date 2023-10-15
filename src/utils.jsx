export const isLogin = () => {
    if(document.cookie == 'username=admin') return true
    return false
}