import React, { useState , useEffect} from 'react';
import QualsonEntry from '../../components/Heform/Quals';
import Offering from '../../components/OfferingDetails';
import countries from '../../components/Heform/countries.json'
import languages from '../../components/Heform/languages.json'

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
        <div className='text-lg '>
            <div className="container mx-auto mt-20 p-4 rounded">
                <Offering />
                <div className='mt-10 p-4 mb-6'>
                    <h2 className='text-lg container' > / Personal Details / <span className='font-bold'>Further Details</span> / Next of Kin / Emergency Contact /Employment / Declaration</h2>
                </div>
                <form id="preEnrolmentForm" className='bg-formColor p-10' style={{maxWidth: '90vw'}}>
                    <h1 className="mb-4 text-[2.5rem] font-semibold">Further Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mt-4">
                            <label for="nationality" className="block font-medium text-gray-700">What is your Nationality? <span className="text-red-600">*</span></label>
                            <select id="nationality" 
                                value={formData.nationality}
                                onChange={handleChange}
                                name="nationality" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value="" disabled selected></option>
                                {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="country" className="block font-medium text-gray-700">What is your country of residence? <span className="text-red-600">*</span></label>
                            <select 
                                id="country" 
                                value={formData.country}
                                onChange={handleChange}
                                name="country"
                                required 
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            >
                                <option value="" disabled selected></option>
                                {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="ethnic" className="block font-medium text-gray-700">What is your ethnic group? <span className="text-red-600">*</span></label>
                            <select id="ethnic" 
                                value={formData.ethnic}
                                onChange={handleChange}
                                name="ethnic" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected></option>
                                <option value="31">English / Welsh / Scottish / Northern Irish / British</option>
                                <option value="44">African</option>
                                <option value="43">Any other Asian background</option>
                                <option value="46">Any other Black / African / Caribbean background</option>
                                <option value="98">Any other ethnic group</option>
                                <option value="38">Any Other Mixed / multiple ethnic background</option>
                                <option value="34">Any Other White background</option>
                                <option value="47">Arab</option>
                                <option value="41">Bangladeshi</option>
                                <option value="45">Caribbean</option>
                                <option value="42">Chinese</option>
                                <option value="33">Gypsy or Irish Traveller</option>
                                <option value="39">Indian</option>
                                <option value="32">Irish</option>
                                <option value="99">Not provided</option>
                                <option value="40">Pakistani</option>
                                <option value="37">White and Asian</option>
                                <option value="36">White and Black African</option>
                                <option value="35">White and Black Caribbean</option>
                            </select>
                        </div>
                    </div>
                    <div className='max-w-sm'>
                        <div className="mt-4">
                            <label for="residency" className="block font-medium text-gray-700">My residency status is <span className="text-red-600">*</span></label>
                            <select id="residency" 
                                value={formData.residency}
                                onChange={handleChange}
                                name="residency" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected></option>
                                <option selected="selected" value="">--Please Select--</option>
                                <option value="01">1. UK resident for 3 years or more</option>
                                <option value="02">2.Settled Status (EU Settlement Scheme)</option>
                                <option value="03">3. Pre-Settled Status (EU Settlement Scheme)</option>
                                <option value="04">4. Persons granted leave under the Ukraine scheme</option>
                                <option value="05">5. Other Visa Holder</option>
                                <option value="06">6. Republic of Ireland resident for 3 years or more</option>
                                <option value="07">7. UK resident in the British Overseas Territories for 3 years or more</option>
                                <option value="08">8. UK resident in the Crown Dependencies for 3 years or more</option>
                                <option value="09">9. None of the above - The College will contact you to discuss this further</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mt-4">
                            <label for="language" className="block font-medium text-gray-700">What is your first language? <span className="text-red-600">*</span></label>
                            <select id="language" 
                                value={formData.language}
                                onChange={handleChange}
                                name="language" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected></option>
                                {languages.map((language) => (
                                <option key={language.code} value={language.code}>
                                    {language.name}
                                </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="refugee" className="block font-medium text-gray-700">Are you a refugee or an Asylum seeker?</label>
                            <select id="refugee" 
                                value={formData.refugee}
                                onChange={handleChange}
                                name="refugee" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                                <option value disabled selected>Select...</option>
                                <option value="yes">Neither apply</option>
                                <option value="no">Asylum Seeker</option>
                                <option value="no">Refugee</option>

                            </select>
                        </div>
                        <div className="mt-4">
                            <label for="nationalinsurance" className="block font-medium text-[16px] text-gray-700">National Insurance Number - Enter without spaces</label>
                            <input type="text" 
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                id="nationalinsurance" name="nationalinsurance" required className=" p-2 block w-full border border-gray-300 rounded-md" 
                            />
                        </div> 
                    </div>
                    <p className= 'mt-4'>
                        We are asking some of these questions to ensure you are able to access appropriate support to help you achieve your potential
                        whilst studying with us. Some of these questions are asked as the Government requires us to collect certain information to support the 
                        advancement of equality and diversity.
                    </p>
                    <div className=" mx-auto rounded-lg" style={{maxWidth: '90vw'}}>
                        <div className="mt-4">
                            <label htmlFor="disability" className="block font-medium text-gray-700">
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
                                    <label htmlFor="mainDifficulty" className="block font-medium text-gray-700">
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
                                    <label htmlFor="secondaryDifficulty" className="block font-medium text-gray-700">
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
                            <label htmlFor="authority" className="block font-medium text-gray-700">
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
                            <label htmlFor="careForSomeone" className="block font-medium text-gray-700">
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
                            <label htmlFor="currentlyInCare" className="block font-medium text-gray-700">
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
                        <label for="education" className="block font-medium text-gray-700">What is your highest level of Qualification? <span className="text-red-600">*</span></label>
                        <select id="education" 
                            value={formData.education}
                            onChange={handleChange}
                            name="education" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected></option>
                            <option value="1">Entry Level</option>
                            <option value="2">Full Level 2</option>
                            <option value="no">Level 1</option>
                            <option value="no">Level 2</option>
                            <option value="no">Level 3</option>
                            <option value="no">Level 4</option>
                            <option value="no">Level 5</option>
                            <option value="no">Level 6</option>
                            <option value="no">Level 7 and above</option>
                            <option value="no">No qualifications</option>
                            <option value="no">Not known </option>
                            <option value="no">Other qualification, level not known</option>
                        </select>
                    </div>
                    <div className='mt-6'>
                        <p>Use the following table to help you pick the correct qualification level...</p>
                    </div>
                    <QualsonEntry />
                    <div className="mt-4">
                        <label for="edtype" className="block font-medium text-gray-700"> What type of qualification was this? <span className="text-red-600">*</span></label>
                        <select id="edtype" 
                            value={formData.edtype}
                            onChange={handleChange}
                            name="edtype" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected>--Please Select--</option>
                            <option value="yes">Level 4: Certificate of Higher Education</option>
                            <option value="yes">Level 4: Higher National Certificate</option>
                            <option value="yes">Level 4: Other Qualification at Level 4</option>
                            <option value="yes">Level 4: Undergraduate credits</option>
                            <option value="yes">Level 8: Other Qualification at Level 8</option>
                            <option value="yes">Level 8: Doctorate Degree</option>
                            <option value="yes">Level 8: Non-UK Doctorate degree</option>
                            <option value="yes">Level 6: First degree leading to QTS</option>
                            <option value="yes">Level 6: Professional Graduate Certificate in Education</option>
                            <option value="yes">Level 6: Other Qualification at Level 6</option>
                            <option value="yes">Level 6: UK First Degree</option>
                            <option value="yes">Level 6: Non-UK First Degree</option>
                            <option value="yes">Level 5: Foundation Degree</option>
                            <option value="yes">Level 5: Diploma of Higher Education</option>
                            <option value="yes">Level 5: Higher National Diploma (including BTEC and SQA equivalents)</option>
                            <option value="yes">Level 5: Certificate or diploma of education (i.e. non-graduate initial teacher training qualification)</option>
                            <option value="yes">Level 5: Foundation course at HE level</option>
                            <option value="yes">Level 5: Other Qualification at Level 5</option>
                            <option value="yes">Level 5: UK ordinary (non-honors) first degree</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mt-4">
                            <label htmlFor="enrolledOther" className="block font-medium text-gray-700">
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
                        <div className="mt-12">
                            <label htmlFor="details" className="block font-medium text-gray-700">
                                If yes, please detail <span className="text-black">*</span>
                            </label>
                            <input
                                type="text"
                                id="details"
                                value={formData.details || ''}
                                onChange={handleChange}
                                name="details"
                                placeholder="Enter details here"
                                className=" p-2 block w-full border border-gray-300 rounded-md"
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
