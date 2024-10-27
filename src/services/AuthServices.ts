
//Register
export const registerAcc = async (username: string, email:string, password: string, profession:string) => {
    const formData = new FormData()
    formData.append('username', username )
    formData.append('email', email)
    formData.append('password', password)
    formData.append('profession', profession)

    const response = await fetch('http://localhost/Career Search Agency/reglog.php?action=register', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
} 

//Login
export const loginAcc = async(email: string, password: string) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('http://localhost/Career Search Agency/reglog.php?action=login', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
}

