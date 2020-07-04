import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'



class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            username: 'SaiTeja',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    
        
this.handleChange=this.handleChange.bind(this)
this.loginClicked = this.loginClicked.bind(this)


    }
    handleChange(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }

        )
        }
    loginClicked(){
        // if(this.state.username==='SaiTeja' && this.state.password==='dummy')
        // {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     console.log('Successful')
        //     this.props.history.push(`/welcome/${this.state.username}`)

            

        // }
        // else{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }


    //     AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        
    // .then(()=>{
    // AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    // this.props.history.push(`/welcome/${this.state.username}`)
    
    //     }).catch(()=>{
    //     this.setState({showSuccessMessage:false})
    //     this.setState({hasLoginFailed:true})
    // })


    AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        
    .then((response)=>{
    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
    this.props.history.push(`/welcome/${this.state.username}`)
    
        }).catch(()=>{
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
    })






    }
    
    render(){
        return(
        <div>
           <h1>Please Login</h1>
           <div className="container"></div>
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Successful</div>}

            UserName: <input type="text" name="username" 
            value={this.state.username}
            onChange={this.handleChange}/>


            Password: <input type="password" name="password" 
            value={this.state.password}
            onChange={this.handleChange}/>
            
            <button className="btn btn-success" 
            onClick={this.loginClicked}>Login</button>
            </div>
        )

        
        }}
        export default LoginComponent