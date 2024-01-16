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









