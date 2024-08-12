import React from 'react';
import Offering from '../../components/OfferingDetails';

const HThree = () => {
    return (
        <div className="container mx-auto mt-20 p-4 bg-white rounded text-lg">
            <Offering />
            <div className='mt-4 p-4 mb-6'>
                <h2 className='text-lg container' > / Personal Details / Further Details / <span className='font-bold'>Next of Kin / Emergency Contact</span> /Employment / Declaration</h2>
            </div>
            <form id="preEnrolmentForm" className='bg-formColor p-10'>
                <h1 className="text-xl text-[2.5rem] font-semibold mb-8">Emergency Contact incase of accident or illness</h1>
                <p className='mb-2'>Applies to all students - the College has a legitimate interest in ensuring the health and safety of all our students. The details of your emergency contact are detailed here.
                    The named person(s) will only be contacted for emergency purposes in the immediate health or safety interests of you as a student. You must keep these details up to date and you
                    must inform the individual(s) that you have disclosed their details to College.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mt-4">
                        <label for="name" className="block  font-medium text-gray-700">* Emergency Contact Name <span className="text-red-600">*</span></label>
                        <input type="text" id="name" name="name" placeholder="Enter your surname" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div> 
                    <div>
                        <label for="title" className="block  font-medium text-gray-700 mt-5">* Relationship to you <span className="text-red-600">*</span></label>
                        <select id="title" name="criminalConviction" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected></option>
                            <option value="mom">Mother</option>
                            <option value="father">Father</option>
                            <option value="no">Husband</option>
                            <option value="no">Wife</option>
                            <option value="no">Aunt</option>
                            <option value="no">Brother</option>
                            <option value="no">Brother in Law</option>
                            <option value="no">Carer</option>
                            <option value="no">Daughter</option>
                            <option value="no">Friend</option>
                            <option value="no">Grandparent</option>
                            <option value="no">Host Family Member</option>
                            <option value="no">Parent / Guardian</option>
                            <option value="no">Partner</option>
                            <option value="no">Sister</option>
                            <option value="no">Sister in Law</option>
                            <option value="no">Son</option>
                            <option value="no">Sponsor</option>
                            <option value="no">Step Father</option>
                            <option value="no">Step Mother</option>
                        </select>
                    </div> 
                </div>
                <div>
                    <h2 className="text-lg font-bold mt-8">You must provide at least one contact details below:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mt-4">
                            <label for="phone" className="block  font-medium text-gray-700">* Mobile Number eg(07..)</label>
                            <input type="tel" id="phone" name="phone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div className="mt-4">
                            <label for="phone" className="block  font-medium text-gray-700">* Home Telephone</label>
                            <input type="tel" id="phone" name="phone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>  
                    </div>
                    <div className="mt-4">
                        <label for="emergencyEmail" className="block  font-medium text-gray-700">Email</label>
                        <input type="email" id="emergencyEmail" name="emergencyEmail"  required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default HThree;