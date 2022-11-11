import React from 'react'
import {GoogleLogin} from 'react-google-login'
import {useSelector , useDispatch} from 'react-redux'
import {LOGIN , LOGOUT} from '../redux/action'
import {useForm} from 'react-hook-form'
import {useHistory , Link} from 'react-router-dom'
import axios from 'axios'
function Login() {
  
  const clientId = ''
  const state = useSelector(state => state.handleStatus)
  const dispatch = useDispatch();  
  let {register,handleSubmit,formState:{errors} , reset}=useForm();
  const history = useHistory();  
  console.log(history);
    
    const onFormSubmit=(userObj)=>{
      axios.post('http://localhost:4000/user/login',userObj)
        .then(res=>{
            let responseObj=res.data;
            //if login sucsess
            if(responseObj.message==='Login success'){
                //save token to browser's local memory
                localStorage.setItem("token",responseObj.token)
                localStorage.setItem("user",JSON.stringify(responseObj.userObj))
                localStorage.setItem("username",responseObj.username)
                alert(responseObj.message);
                //update state
              
                //redirect to user profile page
                history.push(`/UserProfile/${responseObj.username}`)
                reset();
            }
            //if login failed
            else{
                alert(responseObj.message)
            }
        })
        .catch(err => {
          console.log(err.message);
        } ,[])
     
 
    }
  return (
    <>
    <section className="vh-100" onSubmit={handleSubmit(onFormSubmit)}>
    <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <div className="col-md-8 col-lg-7 col-xl-6">
   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
     className="img-fluid" alt="..." />
     </div>
 <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
   <form>
    
     {/* username */}
       <label htmlFor="un" className="mt-3" >Username</label>
       <input type="text" id="un" {...register('username',{required:true,minLength:5})} className="form-control mb-3" />
       {/*username validation */}
       {errors.username?.type=== 'required' && <p className="text-danger">*Username is required</p>}
       {errors.username?.type=== 'minLength' && <p className="text-danger">*Min-Length should be 5</p>}

       {/* password */}
       <label htmlFor="pw">Password</label>
       <input type="password" id="pw" {...register('password',{required:true})} className="form-control mb-3" />
       {/*password validation */}
       {errors.password && <p className="text-danger">*Password is required</p>}
       <button type="submit" className="btn btn-outline-primary">Login</button>
          
   </form>
 </div>
</div>
</div>
</section>
      
    </>
  )
}

export default Login
