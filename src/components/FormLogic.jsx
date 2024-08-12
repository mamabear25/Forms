import React, { useState } from 'react';
import HFive from '../pages/HE/HePageFive';
import HFour from '../pages/HE/HePageFour';
import HForm1 from '../pages/HE/HeformOne';
import HTwo from '../pages/HE/HePageTwo';
import HThree from '../pages/HE/HePageThree';
import HSuccess from '../pages/HE/HSuccess';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        surname: '',
        previousSurname: '',
        accommodationType: '',
        // Add other fields for other steps here
    });
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    const validateStep = (isValid, stepErrors) => {
        setErrors(stepErrors);
        return isValid;
    };

    const handleNext = () => {
        let isValid = false;

        switch (currentStep) {
            case 1:
                isValid = validateStep(formData.title && formData.firstName && formData.surname && formData.previousSurname, []);
                break;
            case 2:
                // Validation for step 2
                isValid = validateStep(formData.nationality && formData.country && formData.ethnic && formData.residency,[]); // Replace with actual validation
                break;
            // Add more cases as needed for other steps
            default:
                isValid = true;
        }

        if (!isValid) {
            setShowErrors(true);
            return;
        }

        if (isValid && currentStep < 5) {
            setCurrentStep(currentStep + 1);
            setShowErrors(false); // Hide errors if validation passes
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        // Submit form logic here (e.g., send to API)
        console.log('Form submitted:', formData);
        setCurrentStep(currentStep + 1); // Proceed to the thank you page
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <HForm1 formData={formData} setFormData={setFormData} validateStep={validateStep} showErrors={showErrors} />;
            case 2:
                return <HTwo formData={formData} setFormData={setFormData} validateStep={validateStep} showErrors={showErrors}/>;
            case 3:
                return <HThree formData={formData} setFormData={setFormData} />;
            case 4:
                return <HFour formData={formData} setFormData={setFormData} />;
            case 5:
                return <HFive formData={formData} setFormData={setFormData} />;
            default:
                return <HSuccess />;
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto text-md font-bold">
            {renderStep()}
            {errors.length > 0 && (
                <div className="mt-4 bg-red-100 text-red-700 p-4 rounded">
                    <ul className="list-disc pl-6">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            {currentStep < 6 && (
                <div className="flex space-x-4 mt-6">
                    {currentStep > 1 && (
                        <button onClick={handleBack} className="bg-navButton text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            BACK
                        </button>
                    )}
                    {currentStep < 5 ? (
                        <button onClick={handleNext} className="bg-navButton text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            NEXT
                        </button>
                    ) : (
                        <div className="flex w-full">
                            <button onClick={handleSubmit} className="bg-navButton text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MultiStepForm;
