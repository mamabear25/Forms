import React from "react";

const EmergencyOne = () => {

    return (
        <div>
            <h2 className="text-lg font-bold mt-8">Emergency Contact 1 Details</h2>
            <div className="mt-4">
                <label for="emergencyName" className="block text-sm font-medium text-gray-700">Contact 1 Name</label>
                <input type="text" id="emergencyName" name="emergencyName" placeholder="Enter emergency contact name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
            </div>
            <div className="mt-4">
                <label for="relationship" className="block text-sm font-medium text-gray-700">Contact 1 Relationship</label>
                <select id="relationship" name="relationship" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                <option value disabled selected>--Please Select--</option>
                <option value="parent">Parent</option>
                <option value="guardian">Guardian</option>
                <option value="spouse">Spouse</option>
                </select>
            </div>
            <div className="mt-4">
                <label for="emergencyPhone" className="block text-sm font-medium text-gray-700">Contact 1 Phone</label>
                <input type="tel" id="emergencyPhone" name="emergencyPhone" placeholder="Enter emergency contact phone" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
            </div>
            <div className="mt-4">
                <label for="emergencyEmail" className="block text-sm font-medium text-gray-700">Contact 1 Email</label>
                <input type="email" id="emergencyEmail" name="emergencyEmail" placeholder="Enter emergency contact email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
            </div>
        </div>
    )
};

export default EmergencyOne