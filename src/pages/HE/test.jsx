import React, { useState, useEffect } from 'react';
import AddressSearch from '../../components/Heform/PostcodeSearch';
import TermTimeAddress from '../../components/Heform/TermTime';
import Offering from '../../components/OfferingDetails';

const Test = ({ formData, setFormData, validateStep, showErrors, }) => {
    const [errors, setErrors] = useState([]);

    const validate = () => {
        let valid = true;
        const stepErrors = [];

        // Validation for other fields
        if (!formData.title) {
            stepErrors.push('Title is required.');
            valid = false;
        }
        if (!formData.firstName) {
            stepErrors.push('First Name is required.');
            valid = false;
        }
        if (!formData.surname) {
            stepErrors.push('Surname is required.');
            valid = false;
        }
        if (!formData.previousSurname) {
            stepErrors.push('Previous Surname is required.');
            valid = false;
        }
        if (!formData.dob) {
            stepErrors.push('Date of Birth is required.');
            valid = false;
        }
        if (!formData.legalSex) {
            stepErrors.push('Legal Sex is required.');
            valid = false;
        }
        if (!formData.accommodationType) {
            stepErrors.push('Type of Accommodation is required.');
            valid = false;
        }
         // Check if at least one phone number is provided
         const hasPhoneNumber = formData.mobile || formData.homephone;
         if (!hasPhoneNumber) {
             stepErrors.push('At least one Phone Number is required.');
             valid = false;
         }
 
         // Validate mobile number format (07123456789)
         if (formData.mobile && !/^07\d{9}$/.test(formData.mobile)) {
             stepErrors.push('Mobile Number must be in the format 07123456789.');
             valid = false;
         }
 
         // Validate home telephone format (UK landline)
         if (formData.homephone && !/^01\d{9,10}$/.test(formData.homephone)) {
             stepErrors.push('Home Telephone must be a valid UK landline number.');
             valid = false;
         }
 
         // Validate emergency email
         if (!formData.emergencyEmail) {
             stepErrors.push('Emergency Email is required.');
             valid = false;
         } else if (!/\S+@\S+\.\S+/.test(formData.emergencyEmail)) {
             stepErrors.push('Emergency Email must be a valid email address.');
             valid = false;
         }

         // Validate repeated email
        if (!formData.Email) {
            stepErrors.push('Email (enter again) is required.');
            valid = false;
        } else if (formData.Email !== formData.emergencyEmail) {
            stepErrors.push('Emails do not match.');
            valid = false;
        }
        if (!formData.postcode) {
            stepErrors.push('Postcode is required.');
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
        <div className='text-lg' style={{maxWidth: '90vw'}}>
            <Offering />

            <div className='mt-4'>

            <h2 className='text-lg container' > / <span className='font-bold'>Personal Details</span> / Further Details / Next of Kin / Emergency Contact /Employment / Declaration</h2>

            </div>
            <div className="container mx-auto mt-4 p-4 bg-formColor" >
                <h2 className="text-[2rem] font-bold mb-4">Personal Details</h2>
                <p>Please note all fields with <span className="text-red-600">*</span> are required</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mt-4">
                        <label htmlFor="title" className="blocks font-medium text-gray-700 required">
                            Title <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Miss">Miss</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="firstName" className="block font-medium text-gray-700 required">
                            First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            autoComplete="given-name"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="surname" className="blocks font-medium text-gray-700">
                            Surname <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Enter your surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p>If you have known with a different surname please provide this in the box below <span className="text-red-600">*</span></p>
                    <label htmlFor="previousSurname" className="blocks font-medium text-gray-700">
                        Previous Surname
                    </label>
                    <input
                        type="text"
                        id="previousSurname"
                        name="previousSurname"
                        placeholder="Enter previous surname"
                        value={formData.previousSurname}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex flex-wrap mt-4 gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <div className="form-section mb-6">
                            <label htmlFor="dob" className="block text-gray-800 mb-2">
                                What is your Date of Birth? <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="03/07/2008"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="legalSex" className="p-2 blocks font-medium text-gray-700 required">
                            Legal Sex <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="legalSex"
                            name="legalSex"
                            value={formData.legalSex}
                            onChange={handleChange}
                            className="w-full p-2 border mb-4 border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled selected>--Please Select--</option>
                            <option value="Mr">M</option>
                            <option value="Miss">F</option>
                        </select>
                        <p className='blocks font-medium text-gray-700'>
                            Please note due to funding regulations, we are required to capture your legal sex. This is your sex as it appears on your passport
                        </p>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <label htmlFor="accommodationType" className="blocks font-medium text-gray-700">
                        Select what describes your type of accommodation <span className="text-red-600">*</span>
                    </label>
                    <select
                        id="accommodationType"
                        name="accommodationType"
                        value={formData.accommodationType}
                        onChange={handleChange}
                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>--Please Select--</option>
                        <option value="Rented">Rented</option>
                        <option value="Owned">Owned</option>
                    </select>
                </div>
                <div className="mb-6 ">
                <h4 className="text-[1.5rem] font-semibold">
                    Address details (<span>Where you will live while on this course</span>)
                </h4>
            </div>
                <AddressSearch formData={formData} setFormData={setFormData} />
                <TermTimeAddress formData={formData} setFormData={setFormData} showErrors={showErrors} />
                <div>
            <h2 className="ml-4 text-lg font-bold mt-8">
                You must provide at least one phone detail below:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="mt-2">
                    <label htmlFor="mobile" className="blocks font-medium text-gray-700">
                        Mobile Number (e.g. 07...) <span className="text-black">*</span>
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    {showErrors && errors.includes('Mobile Number must be in the format 07123456789.') && (
                        <p className="text-red-600s mt-1">Mobile Number must be in the valid format 07...</p>
                    )}
                </div>
                <div className="mt-2">
                    <label htmlFor="homephone" className="blocks font-medium text-gray-700">
                        Contact Number (Home Telephone) <span className="text-black">*</span>
                    </label>
                    <input
                        type="tel"
                        id="homephone"
                        name="homephone"
                        value={formData.homephone}
                        onChange={handleChange}
                        placeholder="Enter your home telephone"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                    {showErrors && errors.includes('Home Telephone must be a valid UK landline number.') && (
                        <p className="text-red-600s mt-1">Home Telephone must be a valid UK landline number.</p>
                    )}
                </div>
            </div>
            <div className=" p-4">
                <label htmlFor="emergencyEmail" className="blocks font-medium text-gray-700">
                    Email <span className="text-red-600">*</span>
                </label>
                <input
                    type="email"
                    id="emergencyEmail"
                    name="emergencyEmail"
                    value={formData.emergencyEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {showErrors && errors.includes('Emergency Email is required.') && (
                    <p className="text-red-600s mt-1">Emergency Email is required.</p>
                )}
                {showErrors && errors.includes('Emergency Email must be a valid email address.') && (
                    <p className="text-red-600s mt-1">Emergency Email must be a valid email address.</p>
                )}
            </div>
            <div className=" p-4">
                <label htmlFor="Email" className="blocks font-medium text-gray-700">
                    Email (enter again) <span className="text-red-600">*</span>
                </label>
                <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Enter your email again"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {showErrors && errors.includes('Email (enter again) is required.') && (
                    <p className="text-red-600s mt-1">Email (enter again) is required.</p>
                )}
                {showErrors && errors.includes('Emails do not match.') && (
                    <p className="text-red-600s mt-1">Emails do not match.</p>
                )}
            </div>
        </div>
                {/* Display general form errors */}
                {showErrors && errors.length > 0 && (
                    <div className="mt-4 bg-red-100 text-red-700 p-4 rounded">
                        <ul className="list-disc pl-6">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Test;
