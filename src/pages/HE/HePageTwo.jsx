import React, { useState , useEffect} from 'react';
import QualsonEntry from '../../components/Heform/Quals';
import Offering from '../../components/OfferingDetails';

const HTwo = ({ formData, setFormData, validateStep, showErrors, }) => {
    const [isEnrolled, setIsEnrolled] = useState(formData.enrolledOther || ''); 
    const [errors, setErrors] = useState([]);
    const [hasDisability, setHasDisability] = useState(formData.disability || '');

    // const handleDisabilityChange = (e) => {
    //     const value = e.target.value;
    //     setHasDisability(value);
    //     setFormData(prevData => ({ ...prevData, disability: value }));
    // };
    const handleEnrollmentChange = (e) => {
        const value = e.target.value;
        setIsEnrolled(value);
        setFormData(prevData => ({ ...prevData, enrolledOther: value }));
    };

    useEffect(() => {
        setHasDisability(formData.disability || '');
    }, [formData.disability]);

    const validate = () => {
        let valid = true;
        const stepErrors = [];

        // Validation for other fields
        if (!formData.nationality) {
            stepErrors.push('What is your Nationality?');
            valid = false;
        }
        if (!formData.country) {
            stepErrors.push('What is your country of residence?');
            valid = false;
        }
        if (!formData.ethnic) {
            stepErrors.push('What is your ethnic group?');
            valid = false;
        }
        if (!formData.residency) {
            stepErrors.push('Your residency status is required.');
            valid = false;
        }
        if (!formData.language) {
            stepErrors.push('What is your first Language?');
            valid = false;
        }
        if (!formData.disability) {
            stepErrors.push('Do you have any disabilities or learning difficulties?');
            valid = false;
        }
        if (!formData.authority) {
            stepErrors.push('Have you previously been looked after by the Local Authority?');
            valid = false;
        }
        if (!formData.careForSomeone) {
            stepErrors.push('Do you care for someone due to illness, disability, a mental health problem or an addiction? ');
            valid = false;
        }
        if (!formData.currentlyInCare) {
            stepErrors.push('Are you currently in Care?');
            valid = false;
        }
        if (!formData.education) {
            stepErrors.push('What is your highest level of Qualification');
            valid = false;
        }
        if (!formData.edtype) {
            stepErrors.push('What type of qualification was this? ');
            valid = false;
        }
        // Validate enrolledOther details
        if (isEnrolled === 'yes' && !formData.details) {
            stepErrors.push('Please provide details if you are currently enrolled in another college/provider.');
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
    }, [showErrors, formData, isEnrolled]);

    return (
        <div>
            <div className="container mx-auto mt-20 p-4 bg-white rounded">
                <Offering />
                <div className='mt-4 p-4 mb-6'>
                <h2 className='text-lg container' > / Personal Details / <span className='font-bold'>Further Details</span> / Next of Kin / Emergency Contact /Employment / Declaration</h2>

                </div>
                <form id="preEnrolmentForm">
                    <h1 className="text-xl font-bold mb-4">Further Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mt-4">
                            <label for="nationality" className="block text-sm font-medium text-gray-700">What is your Nationality? <span className="text-red-600">*</span></label>
                            <select id="nationality" 
                            value={formData.nationality}
                            onChange={handleChange}
                            name="nationality" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="country" className="block text-sm font-medium text-gray-700">What is your country of residence? <span className="text-red-600">*</span></label>
                            <select id="country" 
                            value={formData.country}
                            onChange={handleChange}
                            name="country" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="ethnic" className="block text-sm font-medium text-gray-700">What is your ethnic group? <span className="text-red-600">*</span></label>
                            <select id="ethnic" 
                            value={formData.ethnic}
                            onChange={handleChange}
                            name="ethnic" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                    </div>
                    <div className='max-w-sm'>
                        <div className="mt-4">
                            <label for="residency" className="block text-sm font-medium text-gray-700">My residency status is <span className="text-red-600">*</span></label>
                            <select id="residency" 
                            value={formData.residency}
                            onChange={handleChange}
                            name="residency" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mt-4">
                            <label for="language" className="block text-sm font-medium text-gray-700">What is your first language? <span className="text-red-600">*</span></label>
                            <select id="language" 
                            value={formData.language}
                            onChange={handleChange}
                            name="language" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="refugee" className="block text-sm font-medium text-gray-700">Are you a refugee or an Asylum seeker?</label>
                            <select id="refugee" 
                            value={formData.refugee}
                            onChange={handleChange}
                            name="refugee" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Mr</option>
                                <option value="no">Miss</option>
                            </select>
                        </div>
                        <div className="mt-4">
                        <label for="nationalinsurance" className="block text-sm font-medium text-gray-700">National Insurance Number - Please enter without spaces</label>
                        <input type="text" 
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        id="nationalinsurance" name="nationalinsurance" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div> 
                    </div>
                    <p className='text-sm mt-4'>
                        We are asking some of these questions to ensure you are able to access appropriate support to help you achieve your potential
                        whilst studying with us. Some of these questions are asked as the Government requires us to collect certain information to support the 
                        advancement of equality and diversity.
                    </p>
                    {/* <FurtherDets /> */}
                    <div className=" mx-auto bg-white rounded-lg" style={{maxWidth: '90vw'}}>
            <div className="mt-4">
                <label htmlFor="disability" className="block text-sm font-medium text-gray-700">
                    Do you have any disabilities or learning difficulties? <span className="text-red-600">*</span>
                </label>
                <select
                    id="disability"
                    name="disability"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    value={formData.disability}
                    onChange={handleChange}
                >
                    <option value="" disabled selected>--Please Select--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>





            {hasDisability === 'yes' && (
                        <div className="max-w-lg mt-4 mb-12">
                            <div className="">
                                <label htmlFor="mainDifficulty" className="block text-sm font-medium text-gray-700">
                                    * Please specify main learning difficulty/disability
                                </label>
                                <select
                                    id="mainDifficulty"
                                    name="mainDifficulty"
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                    value={formData.mainDifficulty || ''}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>--Please Select--</option>
                                    <option value="difficulty1">Difficulty 1</option>
                                    <option value="difficulty2">Difficulty 2</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="secondaryDifficulty" className="block text-sm font-medium text-gray-700">
                                    And, if appropriate, a secondary learning difficulty
                                </label>
                                <select
                                    id="secondaryDifficulty"
                                    name="secondaryDifficulty"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                    value={formData.secondaryDifficulty || ''}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>--Please Select--</option>
                                    <option value="difficultyA">Difficulty A</option>
                                    <option value="difficultyB">Difficulty B</option>
                                </select>
                            </div>
                        </div>
                    )}

            <div className="mt-4">
                        <label htmlFor="authority" className="block text-sm font-medium text-gray-700">
                            Have you previously been looked after by the Local Authority? <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="authority"
                            name="authority"
                            value={formData.authority || ''}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>--Please Select--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="careForSomeone" className="block text-sm font-medium text-gray-700">
                            Do you care for someone due to illness, disability, a mental health problem or an addiction? <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="careForSomeone"
                            name="careForSomeone"
                            value={formData.careForSomeone}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>--Please Select--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="currentlyInCare" className="block text-sm font-medium text-gray-700">
                            Are you currently in Care? 
                        </label>
                        <select
                            id="currentlyInCare"
                            name="currentlyInCare"
                            value={formData.currentlyInCare}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>--Please Select--</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
        </div>



                    <div className="mt-4">
                        <h1 className='text-4xl mb-4'>Education</h1>
                        <label for="education" className="block text-sm font-medium text-gray-700">What is your highest level of Qualification? <span className="text-red-600">*</span></label>
                        <select id="education" 
                        value={formData.education}
                        onChange={handleChange}
                        name="education" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected>Select...</option>
                            <option value="yes">Rented</option>
                            <option value="no">Owned</option>
                        </select>
                    </div>
                    <div className='mt-6'>
                        <p>Use the following table to help you pick the correct qualification level...</p>
                    </div>
                    <QualsonEntry />
                    <div className="mt-4">
                        <label for="edtype" className="block text-sm font-medium text-gray-700"> What type of qualification was this? <span className="text-red-600">*</span></label>
                        <select id="edtype" 
                        value={formData.edtype}
                        onChange={handleChange}
                        name="edtype" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected>Select...</option>
                            <option value="yes">Mr</option>
                            <option value="no">Miss</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mt-4">
                            <label htmlFor="enrolledOther" className="block text-sm font-medium text-gray-700">
                                Are you currently enrolled onto any other qualifications with another college/provider? <span className="text-black">*</span>
                            </label>
                            <select
                                id="enrolledOther"
                                name="enrolledOther"
                                required
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                value={isEnrolled}
                                onChange={handleEnrollmentChange}
                            >
                                <option value="" disabled>Select...</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                If yes, please detail <span className="text-black">*</span>
                            </label>
                            <input
                                type="text"
                                id="details"
                                value={formData.details || ''}
                                onChange={handleChange}
                                name="details"
                                placeholder="Enter details here"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required={isEnrolled === 'yes'}
                            />
                        </div>
                    </div>                       
                </form>
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
    )
};

export default HTwo;
