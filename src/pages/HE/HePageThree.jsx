import React from 'react';
import Offering from '../../components/OfferingDetails';

const HThree = () => {
    return (
        <div className="container mx-auto mt-8 p-4 bg-white rounded">
            <Offering />
            <div className='mt-4 p-4 mb-6'>
                <h2 className='text-lg container' > / Personal Details / Further Details / <span className='font-bold'>Next of Kin / Emergency Contact</span> /Employment / Declaration</h2>
                </div>
            <form id="preEnrolmentForm">
                <h1 className="text-xl font-bold mb-4">Emergency Contact incase of accident or illness</h1>
                <p className='mb-2'>Applies to all students - the College has a legitimate interest in ensuring the health and safety of all our students. The details of your emergency contact are detailed here.
                    The named person(s) will only be contacted for emergency purposes in the immediate health or safety interests of you as a student. You must keep these details up to date and you
                    must inform the individual(s) that you have disclosed their details to College.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mt-4">
                        <label for="firstName" className="block text-sm font-medium text-gray-700">Emergency Contact Name <span className="text-red-600">*</span></label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your surname" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div> 
                    <div>
                        <label for="title" className="block text-sm font-medium text-gray-700 mt-5">Relationship to you <span className="text-red-600">*</span></label>
                        <select id="title" name="criminalConviction" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value disabled selected>Select...</option>
                            <option value="yes">Mom</option>
                            <option value="no">Dad</option>
                        </select>
                    </div> 
                </div>
                <div>
                    <h2 className="text-lg font-bold mt-8">You must provide at least one contact details below:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mt-4">
                            <label for="firstName" className="block text-sm font-medium text-gray-700">* Mobile Number eg(07..)</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>
                        <div className="mt-4">
                            <label for="firstName" className="block text-sm font-medium text-gray-700">* Home Telephone</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your surname" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                        </div>  
                    </div>
                    <div className="mt-4">
                        <label for="emergencyEmail" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="emergencyEmail" name="emergencyEmail" placeholder="Enter emergency contact email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default HThree;