import React, { useState } from "react";

const EmploymentDets = () => {
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [selfEmployed, setSelfEmployed] = useState('');

    const handleEmploymentChange = (e) => {
        setEmploymentStatus(e.target.value);
    };

    const handleSelfEmployedChange = (e) => {
        setSelfEmployed(e.target.value);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mt-8">Employment Status</h2>
            
            <div className="mt-4">
                <label htmlFor="fullTimeEducation" className="block text-sm font-medium text-gray-700">
                    Prior to enrolment I was in full-time Education? <span className="text-red-600">*</span>
                </label>
                <select
                    id="fullTimeEducation"
                    name="fullTimeEducation"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                >
                    <option value="" disabled>--Please Select--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="mt-4 max-w-md">
                <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">
                    Please tell us your employment status <span className="text-red-600">*</span>
                </label>
                <select
                    id="employmentStatus"
                    name="employmentStatus"
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    value={employmentStatus}
                    onChange={handleEmploymentChange}
                >
                    <option value="" disabled>--Please Select--</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select>
            </div>

            {/* Conditionally Render Fields Based on Employment Status */}
            {employmentStatus === 'employed' && (
                <div className="flex gap-6 mt-4">
                <div className="flex-1">
                    <span className="block text-sm font-medium text-gray-700">Are you self-employed? <span className="text-red-600">*</span></span>
                    <div className="mt-2 flex items-center space-x-4 border p-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="selfEmployedYes"
                                name="selfEmployed"
                                value="selfEmployed"
                                checked={selfEmployed === 'selfEmployed'}
                                onChange={handleSelfEmployedChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <label htmlFor="selfEmployedYes" className="ml-2 block text-sm font-medium text-gray-700">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="selfEmployedNo"
                                name="selfEmployed"
                                value="notSelfEmployed"
                                checked={selfEmployed === 'notSelfEmployed'}
                                onChange={handleSelfEmployedChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <label htmlFor="selfEmployedNo" className="ml-2 block text-sm font-medium text-gray-700">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-700">
                        Hours per week? <span className="text-red-600">*</span>
                    </label>
                    <select
                        id="hoursPerWeek"
                        name="hoursPerWeek"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>--Please Select--</option>
                        <option value="fullTime">Full Time</option>
                        <option value="partTime">Part Time</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            
            )}

            {employmentStatus === 'unemployed' && (
                <div className="mt-4">
                    <label htmlFor="lengthUnemployed" className="block text-sm font-medium text-gray-700">
                        How long have you been unemployed? <span className="text-red-600">*</span>
                    </label>
                    <select
                        id="lengthUnemployed"
                        name="lengthUnemployed"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>--Please Select--</option>
                        <option value="lessThan6Months">Less than 6 months</option>
                        <option value="6To12Months">6 to 12 months</option>
                        <option value="moreThan12Months">More than 12 months</option>
                    </select>
                </div>
            )}
            <div className="flex gap-6">
                <div className="flex-1 mt-4">
                    <label htmlFor="receiveBenefits" className="block text-sm font-medium text-gray-700">
                        Do you receive any benefits? <span className="text-red-600">*</span>
                    </label>
                    <select
                        id="receiveBenefits"
                        name="receiveBenefits"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>--Please Select--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="flex-1 mt-4 flex items-center">
                    <input
                        type="checkbox"
                        id="noBenefits"
                        name="noBenefits"
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="noBenefits" className="ml-2 text-sm font-medium text-gray-700">
                        I receive no benefits <span className="text-red-600">*</span>
                    </label>
                </div>
            </div>   
        </div>
    );
};

export default EmploymentDets;
