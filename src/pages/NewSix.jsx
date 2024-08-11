import React from 'react';

const SixteenNew = () => {
    return (
        <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded">
            <form id="preEnrolmentForm">
                <h1 className="text-xl font-bold mb-4">Personal Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label htmlfor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                    <label htmlfor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                    <input type="text" id="surname" name="surname" placeholder="Enter your surname" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlfor="dob" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="dob" name="dob" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">The college is committed to safeguarding and promoting the welfare of all vulnerable groups... (Content truncated for brevity)</p>
                </div>
                <div className="mt-4">
                    <label htmlfor="criminalConviction" className="block text-sm font-medium text-gray-700">Do you believe you have a criminal conviction?</label>
                    <select id="criminalConviction" name="criminalConviction" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                        <option value disabled selected>Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">If you select yes, we will use this information to decide whether you can proceed to study with us... (Content truncated for brevity)</p>
                </div>
                <h2 className="text-lg font-bold mt-8">Emergency Contact 1 Details</h2>
                <div className="mt-4">
                    <label htmlfor="emergencyName" className="block text-sm font-medium text-gray-700">Contact 1 Name</label>
                    <input type="text" id="emergencyName" name="emergencyName" placeholder="Enter emergency contact name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                    <label htmlfor="relationship" className="block text-sm font-medium text-gray-700">Contact 1 Relationship</label>
                    <select id="relationship" name="relationship" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                    <option value disabled selected>Select...</option>
                    <option value="parent">Parent</option>
                    <option value="guardian">Guardian</option>
                    <option value="spouse">Spouse</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label htmlfor="emergencyPhone" className="block text-sm font-medium text-gray-700">Contact 1 Phone</label>
                    <input type="tel" id="emergencyPhone" name="emergencyPhone" placeholder="Enter emergency contact phone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                    <label htmlfor="emergencyEmail" className="block text-sm font-medium text-gray-700">Contact 1 Email</label>
                    <input type="email" id="emergencyEmail" name="emergencyEmail" placeholder="Enter emergency contact email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                </div>
                <h2 className="text-lg font-bold mt-8">Employment Status</h2>
                <div className="mt-8">
                    <label className="inline-flex items-center">
                    <input type="checkbox" id="declaration" name="declaration" required className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700">Tick here to confirm</span>
                    </label>
                </div>
                <div className="mt-8">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default SixteenNew;
