import axios from 'axios'
export const AUTHENTICATED_USER='authenticatedUser'
export const API_URL="http://localhost:8080"
class AuthenticationService{

    // executeBasicAuthenticationService(username,password){
    //     return axios.get(`${API_URL}/basicauth`,
    //     {headers: {authorization:this.createBasicAuthenticationToken(username,password)
    //     }}
    //         )
    // }
    executeJwtAuthenticationService(username,password){
        return axios.post(`${API_URL}/authenticate`,{
        username,
        password
       })
    }
// createBasicAuthenticationToken(username,password){
//     return 'Basic ' + window.btoa(username +":"+ password)
// }



createJwtToken(token){
    return 'Bearer '+token
}



    // registerSuccessfulLogin(username,password){
      
    //     sessionStorage.setItem(AUTHENTICATED_USER,username)
    //     this.setupAxiosInterceptors(this.createBasicAuthenticationToken(username,password))
    // }

    registerSuccessfulLoginForJwt(username,token){
      
        sessionStorage.setItem(AUTHENTICATED_USER,username)
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
}


isUserLoggedIn(){
    let user= sessionStorage.getItem(AUTHENTICATED_USER)
    if(user===null) return false
    
    return true
}

getLoggedInUserName(){
   let user= sessionStorage.getItem(AUTHENTICATED_USER) 
   if(user===null) return ''
   return user
}

setupAxiosInterceptors(token){
    axios.interceptors.request.use(
        (config)=>{
            if(this.isUserLoggedIn()){
                config.headers.authorization=token
            }
            return config
        }
    )

}



}

export default new AuthenticationService()