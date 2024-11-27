import { useState } from 'react';
const steps = ["Step 1", "Email & Password", "Confirm Password"];

const ConfigSystem = () => {
    const [currentStep, setCurrentStep] = useState(0);


   
   
    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

   
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg max-w-md w-full">

                <div className="flex items-center justify-center w-full  pb-2 border-b-[1px]">
                    {steps.map((_step, index) => (
                        <div key={index} className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${index === currentStep ? "bg-blue-500" : index < currentStep ? "bg-orange-500" : "bg-gray-300"
                                    }`}
                            >
                                {index + 1}
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`h-1 w-36  ${index < currentStep ? "bg-orange-500" : "bg-gray-300"}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className=" w-full h-fit min-h-80">

                    {/* Step 1: Name Input */}
                    {currentStep === 0 && (
                        <div className='flex flex-col gap-2'>
                           

                        </div>


                    )}

                    {/* Step 2: Email & Password Inputs */}
                    {currentStep === 1 && (
                        <div className='flex flex-col gap-2'>
                           
                        </div>
                    )}

                    {/* Step 3: Confirm Password Input */}
                    {currentStep === 2 && (
                        <>

                           

                        </>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between space-x-4 pt-2 items-center  h-full w-full">
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                        disabled={currentStep === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        disabled={currentStep === steps.length - 1}
                    >
                        {"Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfigSystem;
