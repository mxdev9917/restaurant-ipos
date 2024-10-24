import  { useState } from "react";




const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Handle input change
  const handleChange = (element:any, index:any) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to next input automatically
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  // Handle backspace behavior
  const handleKeyDown = (e:any, index:any) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // Move to the previous input and clear it
        if (e.target.previousSibling) {
          setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
          e.target.previousSibling.focus();
        }
      } else {
        // Clear the current input
        setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      }
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Entered OTP: " + otp.join(""));
    // Implement OTP submission logic here
  };

  return (
    
        <div className="flex justify-center items-center h-screen bg-[url('/images/svg/blob-scene-haikei.svg')] bg-cover px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Verify OTP
        </h2>

        <p className="text-center text-gray-600 mb-4">
          We’ve sent a 6-digit code to your email. Enter it below to verify your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg sm:text-xl"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)} // Detect backspace and manage focus
                  onFocus={(e) => e.target.select()} // Select the text on focus
                />
              );
            })}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition duration-300 text-lg sm:text-xl"
            >
              Verify
            </button>
          </div>

          {/* Resend OTP Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Didn't receive the code?{" "}
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Resend OTP
            </a>
          </p>
        </form>
      </div>
    </div>
   
  );
};

export default OTPVerification;
