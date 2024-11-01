// import React, { useState } from 'react';
// import { Button, Label } from "flowbite-react";
// import { IoMdLock, IoMdUnlock } from "react-icons/io";
// const steps = ["Step 1", "Email & Password", "Confirm Password"];

// const ConfigSystem = () => {
//     const [currentStep, setCurrentStep] = useState(0);

//     const [passwordType, setPasswordType] = useState(false)
//     const handleClick = () => {
//         handelButtonClose();
//     };
//     function togglePasswordType() {
//         setPasswordType(!passwordType);
//     }

//     const handleNext = () => {
//         if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
//     };

//     const handleBack = () => {
//         if (currentStep > 0) setCurrentStep(currentStep - 1);
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const [otp, setOtp] = useState(new Array(6).fill(""));

//     // Handle input change
//     const handleChanges = (element: any, index: any) => {
//         if (isNaN(element.value)) return;

//         setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//         // Move to next input automatically
//         if (element.nextSibling && element.value) {
//             element.nextSibling.focus();
//         }
//     };

//     // Handle backspace behavior
//     const handleKeyDown = (e: any, index: any) => {
//         if (e.key === "Backspace") {
//             if (otp[index] === "") {
//                 // Move to the previous input and clear it
//                 if (e.target.previousSibling) {
//                     setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
//                     e.target.previousSibling.focus();
//                 }
//             } else {
//                 // Clear the current input
//                 setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
//             }
//         }
//     };

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         alert("Entered OTP: " + otp.join(""));
//         // Implement OTP submission logic here
//     };





//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//             <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg max-w-md w-full">

//                 <div className="flex items-center justify-center w-full  pb-2 border-b-[1px]">
//                     {steps.map((step, index) => (
//                         <div key={index} className="flex items-center">
//                             <div
//                                 className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${index === currentStep ? "bg-blue-500" : index < currentStep ? "bg-orange-500" : "bg-gray-300"
//                                     }`}
//                             >
//                                 {index + 1}
//                             </div>
//                             {index < steps.length - 1 && (
//                                 <div className={`h-1 w-36  ${index < currentStep ? "bg-orange-500" : "bg-gray-300"}`} />
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Step Content */}
//                 <div className=" w-full h-fit min-h-80">

//                     {/* Step 1: Name Input */}
//                     {currentStep === 0 && (
//                         <div className='flex flex-col gap-2'>
//                             <h2 className="text-2xl font-bold text-center text-gray-800 mt-3">
//                                 Setup Database
//                             </h2>
//                             <div className='flex gap-2'>
//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="Hostname ...." required />
//                                 <input type="email" className=" bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-28 p-2.5 " placeholder="Port ...." required />
//                             </div>
//                             <div>
//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="Database name" required />
//                             </div>
//                             <div>

//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="User" required />
//                             </div>
//                             <div>

//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="Password" required />
//                             </div>
//                             <div>

//                                 <Button type="submit" className="w-full text-white focus:ring-2 focus:ring-orange-500 bg-orange-500" >Test Connection</Button>
//                             </div>

//                         </div>


//                     )}

//                     {/* Step 2: Email & Password Inputs */}
//                     {currentStep === 1 && (
//                         <div className='flex flex-col gap-2'>
//                             <h2 className="text-2xl font-bold text-center text-gray-800 mt-3">
//                                 New User
//                             </h2>
//                             <div>
//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="Name" required />
//                             </div>
//                             <div>

//                                 <input type="email" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
//                             </div>
//                             <div>

//                                 <input type="text" className="bg-gray-50 h-11 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " placeholder="020 xx xxx xxx" required />
//                             </div>
//                             <div className="w-full  relative">
//                                 <input type={passwordType ? "text" : "password"} className="h-11bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full " placeholder="•••••••••" required />
//                                 <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
//                                     {
//                                         passwordType ?
//                                             <IoMdLock className="text-2xl text-gray-400" />
//                                             :
//                                             <IoMdUnlock className="text-2xl text-gray-400" />
//                                     }
//                                 </button>
//                             </div>
//                             <div className="w-full relative">

//                                 <input type={passwordType ? "text" : "password"} className="h-11 bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full  " placeholder="•••••••••" required />
//                                 <button onClick={togglePasswordType} className="absolute bottom-3 right-3">
//                                     {
//                                         passwordType ?
//                                             <IoMdLock className="text-2xl text-gray-400" />
//                                             :
//                                             <IoMdUnlock className="text-2xl text-gray-400" />
//                                     }
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {/* Step 3: Confirm Password Input */}
//                     {currentStep === 2 && (
//                         <>

//                             <h2 className="text-2xl font-bold text-center text-gray-800 my-5">
//                                 Verify OTP
//                             </h2>

//                             <p className="text-center text-gray-600 mb-4">
//                                 We’ve sent a 6-digit code to your email. Enter it below to verify your account.
//                             </p>

//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 {/* OTP Input Fields */}
//                                 <div className="flex justify-center space-x-2">
//                                     {otp.map((data, index) => {
//                                         return (
//                                             <input
//                                                 key={index}
//                                                 type="text"
//                                                 maxLength={1}
//                                                 className="w-10 h-10 sm:w-12 sm:h-12 text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg sm:text-xl"
//                                                 value={data}
//                                                 onChange={(e) => handleChanges(e.target, index)}
//                                                 onKeyDown={(e) => handleKeyDown(e, index)} // Detect backspace and manage focus
//                                                 onFocus={(e) => e.target.select()} // Select the text on focus
//                                             />
//                                         );
//                                     })}
//                                 </div>

//                                 {/* Submit Button */}
//                                 <div>
//                                     <button
//                                         type="submit"
//                                         className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition duration-300 text-lg sm:text-xl"
//                                     >
//                                         Verify
//                                     </button>
//                                 </div>

//                                 {/* Resend OTP Link */}
//                                 <p className="text-center text-sm text-gray-600 mt-4">
//                                     Didn't receive the code?{" "}
//                                     <a href="#" className="text-orange-500 font-medium hover:underline">
//                                         Resend OTP
//                                     </a>
//                                 </p>
//                             </form>

//                         </>
//                     )}
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-between space-x-4 pt-2 items-center  h-full w-full">
//                     <button
//                         onClick={handleBack}
//                         className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
//                         disabled={currentStep === 0}
//                     >
//                         Back
//                     </button>
//                     <button
//                         onClick={handleNext}
//                         className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//                         disabled={currentStep === steps.length - 1}
//                     >
//                         {"Next"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConfigSystem;
