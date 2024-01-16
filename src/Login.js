// // import React, { useState } from "react";

// // import Form from "react-bootstrap/Form";

// // import Button from "react-bootstrap/Button";

// // // import "./Login.css";

// // export default function Login() {

// //   const [email, setEmail] = useState("");

// //   const [password, setPassword] = useState("");

// //   function validateForm() {

// //     return email.length > 0 && password.length > 0;

// //   }

// //   function handleSubmit(event) {

// //     event.preventDefault();

// //   }

// //   return (

// //     <div className="Login">

// //       <Form onSubmit={handleSubmit}>

// //         <Form.Group size="lg" controlId="email">

// //           <Form.Label>Email</Form.Label>

// //           <Form.Control

// //             autoFocus

// //             type="email"

// //             value={email}

// //             onChange={(e) => setEmail(e.target.value)}

// //           />

// //         </Form.Group>

// //         <Form.Group size="lg" controlId="password">

// //           <Form.Label>Password</Form.Label>

// //           <Form.Control

// //             type="password"

// //             value={password}

// //             onChange={(e) => setPassword(e.target.value)}

// //           />

// //         </Form.Group>

// //         <Button block size="lg" type="submit" disabled={!validateForm()}>

// //           Login

// //         </Button>

// //       </Form>

// //     </div>

// //   );

// // }









// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button } from 'react-bootstrap';
// import "./App.css"
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     country: '',
//     interests: [],
//   });

//   const [errors, setErrors] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     gender: '',
//     country: '',
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');


//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
//       setFormData((prevData) => ({
//         ...prevData,
//         interests: checked
//           ? [...prevData.interests, value]
//           : prevData.interests.filter((interest) => interest !== value),
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

  

//   const handleCountryChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       country: e.target.value,
//     }));

  
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       country: '',
//     }));

   
//     setShowModal(true);
//   };

//   const closeModal = () => {

//     setShowModal(false);
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

   
//     if (formData.fullName.trim() === '') {
//       newErrors.fullName = 'Full Name is required';
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//       valid = false;
//     }
//     if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//       valid = false;
//     }
//     if (!formData.confirmPassword.trim()) {
//       newErrors.confirmPassword = 'Confirm Password is required';
//     } else if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!formData.gender) {
//       newErrors.gender = 'Gender is required';
//       valid = false;
//     }
//     if (!formData.country) {
//       newErrors.country = 'Country is required';
//       valid = false;
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0; 
//   };
//   const generateRandomPassword = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
//     const passwordLength = 10;
//     let randomPassword = '';

//     for (let i = 0; i < passwordLength; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       randomPassword += characters.charAt(randomIndex);
//     }

//     return randomPassword;
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
    
//       console.log('Form submitted:', formData);


//       setFormData({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         gender: '',
//         country: '',
//         interests: [],
//       });

     
//       alert('Form submitted successfully!');
//     } else {
      
//       console.log('Form validation failed');
//     }
//   };

//   return (
//     <>
//     <div className="form-body">
//   <div className="row">
//     <div className="form-holder">
//       <div className="form-content">
//         <div className="form-items">
//        <h2 className="mb-4"><u><b>Registration Form</b></u></h2> 

//       <form onSubmit={handleSubmit} className="requires-validation" noValidate="">
       
//         <div className="col-md-12">
//           <label htmlFor="fullName" className="form-label" required="">
//            <b> Full Name:</b>
            
//             </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             placeholder="Full Name" 
//             value={formData.fullName}
//             onChange={handleChange}
//             className={`form-control ${errors.fullName && 'is-invalid'}`}
//           />
//           <div className="invalid-feedback">{errors.fullName}</div>
//         </div>

//         <div className="col-md-12">
//           <label htmlFor="email" className="form-label">
//            <b> Email:</b>
//           </label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             placeholder='Email'
//             value={formData.email}
//             onChange={handleChange}
//             className={`form-control ${errors.email && 'is-invalid'}`}
//           />
//           <div className="invalid-feedback">{errors.email}</div>
//         </div>
//         <div className="col-md-12">
//           <label htmlFor="password" className="form-label">
//            <b> Password:</b>
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder='Passwords'
//             value={formData.password}
//             onChange={handleChange}
//             className={`form-control ${errors.password && 'is-invalid'}`}
//           />
//           <div className="invalid-feedback">{errors.password}</div>
//         </div>
//         <div className="mb-3">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => setFormData({ ...formData, password: generateRandomPassword() })}
//           >
//             Generate Random Password
//           </button>
//         </div>
//         <div className="col-md-12">
//           <label htmlFor="confirmPassword" className="form-label">
//            <b> Confirm Password:</b>
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder='Confirm Password'
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//             className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
//           />
//           <div className="invalid-feedback">{errors.confirmPassword}</div>
//         </div>
//         {/* <div className="mb-3">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => setFormData({ ...formData, password: generateRandomPassword() })}
//           >
//             Generate Random Password
//           </button>
//         </div> */}

//         <div className="col-md-12">
//           <label className="form-check-label"><b>Gender:</b></label>
//           <div className="form-check">
//             <input
//               type="radio"
//               id="male"
//               name="gender"
//               value="male"
//               checked={formData.gender === 'male'}
//               onChange={handleChange}
//               className={`form-check-input ${errors.gender && 'is-invalid'}`}
//             />
//             <label htmlFor="male" className="form-check-label">
//               Male
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               type="radio"
//               id="female"
//               name="gender"
//               value="female"
//               checked={formData.gender === 'female'}
//               onChange={handleChange}
//               className={`form-check-input ${errors.gender && 'is-invalid'}`}
//             />
//             <label htmlFor="female" className="form-check-label">
//               Female
//             </label>
//           </div>
//           <div className="invalid-feedback">{errors.gender}</div>
//         </div>
      
//       <div className="col-md-12">
//         <label htmlFor="country" className="form-label">
//         <b> Country:</b> 
//         </label>
//         <select
//           id="country"
//           name="country"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleCountryChange}
//           className={`form-select ${errors.country && 'is-invalid'}`}
//         >
//           <option value="">Select...</option>
//           <option value="us">United States</option>
//           <option value="uk">United Kingdom</option>
//           <option value="ca">Canada</option>
//         </select>
//         <div className="invalid-feedback">{errors.country}</div>
//       </div>
//       <label className="form-check-label">
//       I appreciate your diligence in completing the information. Thank you.
//               </label>
             
// </form>

//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Country Selected</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           You selected {formData.country}. Add your modal content here.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
//         Submit
//       </button>
      
//       </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </>
//   );
  
// };

// export default RegistrationForm;









import React from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {  useNavigate } from 'react-router-dom'
import { URL } from './service/url'

export default function  Registration() {
  
  const navigate=useNavigate()

   const [error,setError]=useState({})
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]=useState('')
   const [password,setPassword]=useState('')
   const [repassword,setRePassword]=useState('')
   const [icon, setIcon] = useState({ file: "/assets/user.png", bytes: "" });


   


  //  console.log('preview',image.preview)
  //  console.log('data',image.data)

  
   const [terms,setTerms]=useState('')

   const [checked, setChecked] = useState(true);
 
   const [swalProps, setSwalProps] = useState({});
   
  
  
  // handleerror function 

  const handleerror=(input,value)=>{

    setError((prev)=>({...prev,[input]:value}))
    
  }


  function handelPicture(event) {
   
    setIcon({

      file: window.URL.createObjectURL(event.target.files[0]),
      
      bytes: event.target.files[0]
   
    });
  
    
    handleerror("icon",null)

  }



  
  // validation function 

  const validation=()=>{
   
    var isvalid=true
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
    if(!name)
    {
      handleerror("a_name",'Please Enter Full Name')
      isvalid=false
      
      
    }
    if(!regex.test(email))
    {
      handleerror("A_email",'Please Enter Valid Email')
      isvalid=false
    }

    
    if(!phone)
    {
      handleerror("A_phone",'Please Enter Phone Number')
      isvalid=false
    }
    else if (isNaN(phone))
    {
      handleerror("A_phone",'Please Enter Phone Number {Only Number}')
      isvalid=false
    }
    else if (phone.length<10 || phone.length>10)
    {
      handleerror("A_phone",'Please Enter 10 Digit Phone Number')
      isvalid=false
    }


    if(!password)
    {
      handleerror("A_password",'Please Enter Password')
      isvalid=false
    }
    else if(password.length <= 4 )
    {
      handleerror("A_password",'Please Enter Password length above 4 letter')
      isvalid=false;
    }
 
    if(!repassword)
    {
      handleerror("A_R_password",'Please Enter RePassword')
      isvalid=false;
    }
    else if(repassword.length <= 4)
    {
      handleerror("A_R_password",'Please Enter Repassword length above 4 letter')
      isvalid=false;
    }
    else if(password != repassword)
    {
      handleerror("A_R_password",'Password Do Not Match')
      isvalid=false;
    }



  
    // if(!terms)
    // {
    //   handleerror("terms",'Please Checked Terms & Condition')
    //   isvalid=false
    // }
  
    if (!icon.bytes) {
      handleerror("icon", "Please select picture")
      isvalid = false;
    }
    else if (!icon.bytes.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      handleerror("icon", "Please select only picture ( jpg,jpeg,png,gif) ")
      isvalid = false;

    }
     
    return isvalid
    
   }



  const ragister=async()=>{
  
    

   if(validation())
   { console.log(validation)
      
     var formdata=new FormData()
     formdata.append('user_name',name)
     formdata.append('user_email',email)
     formdata.append('user_phone',phone)
     formdata.append('user_password',repassword)
     formdata.append("profile_img_url",icon.bytes)
   

     formdata.append('user_type','SUPERADMIN')
     
      var result = await axios.post(${URL}registration&bpuser=10891,formdata)

      if(result.data.res_code == 1)
      {
      
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Admin Registration Successfully',
          showConfirmButton: false,
          timer: 1600
        }).then((result) => {
         
          localStorage.clear()
          navigate('/')

         
        })


      }

      else if (result.data.res_code==2)
      {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Account already exists',
          showConfirmButton: false,
          timer: 1600
        }).then((result) => {
         
        
              navigate('/Dashboard')
         
        })
    
      }
      else
      {}

 
    
   }



  }


  const Term=(event)=>{

  if(event.target.checked)
  {
    setTerms(event.target.value)
  }
  else{
    setTerms(null)
  }

  
  }


  
  return (
    <div className='register-page'>
    <div className="register-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <Link to="/" className="h1"><b><img alt='login' title='login'  className='img-fluid' src={process.env.PUBLIC_URL + '../dist/img/AdminLTELogo.png'} style={{width:'50px', height:'50px'}} /></b> <span style={{fontSize:'22px'}}> Stock Trading</span></Link>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Register a new membership</p>

      <form action="/Login" method="post">
        
        <div className="input-group mb-2">
         
          <input  onFocus={()=>handleerror("a_name",null)}   onChange={(e)=>setName(e.target.value)}   type="text" className="form-control" placeholder="Full Name"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user"></span>
            </div>
          </div>
          
        </div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.a_name}
        </div>
      

        <div className="input-group mb-2">
          <input onFocus={()=>handleerror("A_email",null)}   onChange={(e)=>setEmail(e.target.value)}  type="email" className="form-control" placeholder="Email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.A_email}
        </div>


        <div className="input-group mb-2">
          <input  onFocus={()=>handleerror("A_phone",null)}   onChange={(e)=>setPhone(e.target.value)}  type="text" className="form-control" placeholder="Mobile Number"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-mobile"></span>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.A_phone}
        </div>


        <div className="input-group mb-2">
          <input  onFocus={()=>handleerror("A_password",null)}  onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.A_password}
        </div>


        <div className="input-group mb-2">
          <input   onFocus={()=>handleerror("A_R_password",null)}  onChange={(e)=>setRePassword(e.target.value)}  type="password" className="form-control" placeholder="Retype Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.A_R_password}
        </div>

         
         <div style={{marginBottom:'8px',fontWeight:'bold'}}>
          Select Profile
         </div>

        <div className="input-group mb-0">

          <div class="mb-3">
          <input  error={error.icon ? true : false}  type='file' name='file' onChange={handelPicture}  />
          </div>


        </div>

       
        <div className="input-group mb-0" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >

        <img  src={icon.file}  width='100px' height='100px'   />

        <div style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
          {error.icon}
        </div>


        </div>



      

        <div className="row">
          {/* <div className="col-8">
            
            <div className="icheck-primary">
              <input  onFocus={()=>handleerror("terms",null)}    onChange={(event)=>Term(event)}  type="checkbox" id="agreeTerms" name="terms" value="agree"/>
              <label for="agreeTerms">I agree to the <Link to="/">terms</Link></label>
            </div>
          
          </div>
           */}

          {error.terms?<>
            <div className='ml-2' style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.terms}
          </div>
            <div className="col-12">
            <button  onClick={()=>ragister()}   type="button" className="btn btn-primary btn-block">Register</button>
          </div>
          

          </>:<>
          <div className='ml-2' style={{display:'flex',alignItems:'center',marginBottom:'5px',color:'#c23616'}}>
            {error.terms}
          </div>

          <div className="col-12">
            <button  onClick={()=>ragister()}   type="button" className="btn btn-primary btn-block">Register</button>
          </div>
          

          </>}
         
         
         
        </div>
      </form>

        <div style={{display:'flex',justifyContent:'center'}} className='mt-2'>
        <Link to="/Dashboard" className="text-center">Home</Link>
        </div>
   
   
    </div>
   
  </div>
</div>    

    </div>
  )
}
