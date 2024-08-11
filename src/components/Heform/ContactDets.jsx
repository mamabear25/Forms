// import React, { useState } from "react";

// const ContactDetails = ({ formData, setFormData, validateStep, showErrors }) => {
//     const [errors, setErrors] = useState([]);

//     const validate = () => {
//         let valid = true;
//         const stepErrors = [];
//         if (!formData.mobile) {
//             stepErrors.push('At least one Phone Number is required.');
//             valid = false;
//         }
//         if (!formData.emergencyEmail) {
//             stepErrors.push('Email is required.');
//             valid = false;
//         }
//         if (!formData.Email) {
//             stepErrors.push('Enter your email again.');
//             valid = false;
//         }

//         setErrors(stepErrors);
//         return valid;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     // Validate only when necessary
//     React.useEffect(() => {
//         if (showErrors) {
//             validate();
//         }
//     }, [showErrors, formData]);

//     return (
//         <div>
//             <h2 className="text-lg font-bold mt-8">You must provide at least one contact details below:</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="mt-4">
//                     <label for="mobile" className="block text-sm font-medium text-gray-700">Mobile Number eg(07..) <span className="text-black">*</span></label>
//                     <input type="tel" 
//                     id="mobile" 
//                     value={formData.mobile}
//                     onChange={handleChange}name="mobile" 
//                     placeholder="Enter your phone number" 
//                     required 
//                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
//                 </div>
//                 <div className="mt-4">
//                     <label for="homephone" className="block text-sm font-medium text-gray-700">Contact Number (Home Telephone) <span className="text-black">*</span></label>
//                     <input
//                     value={formData.homephone}
//                     onChange={handleChange}
//                     type="tel" id="homephone" 
//                     name="homephone" placeholder="Enter your home Telephone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
//                 </div>  
//             </div>
//             <div className="mt-4">
//                 <label for="emergencyEmail" className="block text-sm font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
//                 <input type="email"
//                 value={formData.emergencyEmail}
//                 onChange={handleChange} 
//                 id="emergencyEmail" name="emergencyEmail" placeholder=" email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
//             </div>
//             <div className="mt-4">
//                 <label for="Email" className="block text-sm font-medium text-gray-700">Email (enter again) <span className="text-red-600">*</span></label>
//                 <input type="email" 
//                 value={formData.Email}
//                 onChange={handleChange}
//                 id="Email" name="Email" placeholder=" email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
//             </div>
//         </div>
//     )
// };

// export default ContactDetails;

import React, { useState, useEffect } from "react";

const ContactDetails = ({ formData, setFormData, showErrors }) => {
    const [errors, setErrors] = useState([]);

    const validate = () => {
        let valid = true;
        const stepErrors = [];
        if (!formData.mobile) {
            stepErrors.push('Mobile Number is required.');
            valid = false;
        }
        if (!formData.emergencyEmail) {
            stepErrors.push('Emergency Email is required.');
            valid = false;
        }
        if (!formData.Email) {
            stepErrors.push('Email (enter again) is required.');
            valid = false;
        }

        setErrors(stepErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        if (showErrors) {
            validate();
        }
    }, [showErrors, formData]);

    return (
        <div>
            <h2 className="text-lg font-bold mt-8">
                You must provide at least one contact detail below:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-4">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                        Mobile Number (e.g. 07..) <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    {showErrors && errors.includes('Mobile Number is required.') && (
                        <p className="text-red-600 text-sm mt-1">Mobile Number is required.</p>
                    )}
                </div>
                <div className="mt-4">
                    <label htmlFor="homephone" className="block text-sm font-medium text-gray-700">
                        Contact Number (Home Telephone) <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="tel"
                        id="homephone"
                        name="homephone"
                        value={formData.homephone}
                        onChange={handleChange}
                        placeholder="Enter your home telephone"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    {showErrors && errors.includes('Contact Number (Home Telephone) is required.') && (
                        <p className="text-red-600 text-sm mt-1">Contact Number (Home Telephone) is required.</p>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="emergencyEmail" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-600">*</span>
                </label>
                <input
                    type="email"
                    id="emergencyEmail"
                    name="emergencyEmail"
                    value={formData.emergencyEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {showErrors && errors.includes('Emergency Email is required.') && (
                    <p className="text-red-600 text-sm mt-1">Emergency Email is required.</p>
                )}
            </div>
            <div className="mt-4">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email (enter again) <span className="text-red-600">*</span>
                </label>
                <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter your email again"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {showErrors && errors.includes('Email (enter again) is required.') && (
                    <p className="text-red-600 text-sm mt-1">Email (enter again) is required.</p>
                )}
            </div>
        </div>
    );
};

export default ContactDetails;
