import React from 'react';

const HThree = () => {
    return (
        <div className="container mx-auto mt-8 p-4 bg-white rounded">
            <form id="preEnrolmentForm">
                <h1 className="text-xl font-bold mb-4">Emergency Contact incase of accident or illness</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mt-4">
                        <label for="firstName" className="block text-sm font-medium text-gray-700">Emergency Contact Name <span className="text-red-600">*</span></label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your surname" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div> 
                    <div>
                        <label for="title" className="block text-sm font-medium text-gray-700">Relationship to you <span className="text-red-600">*</span></label>
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