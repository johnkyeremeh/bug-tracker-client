
const onLogOut = () => {
    localStorage.removeItem("token")
    
    history.push("/login")
}
