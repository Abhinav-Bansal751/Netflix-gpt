export const checkValidaData =(email,password) =>{
    
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


    const isEmailValid = regex.test(email)
    const isPasswordValid = regex1.test(password)
    
    if(!isEmailValid) return "Email is not Valid"
    if(!isPasswordValid) return "Password is not Valid"
    
    return null;
}