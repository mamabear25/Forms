import React, { useState } from 'react';

const TermTimeAddress = () => {
    const [isSameAddress, setIsSameAddress] = useState('yes');

    const handleChange = (e) => {
        setIsSameAddress(e.target.value);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Term-Time Address <span className="text-red-600">*</span></h3>

            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="sameAddress"
                        name="addressType"
                        value="yes"
                        checked={isSameAddress === 'yes'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="sameAddress" className="ml-3 block text-sm font-medium text-gray-700">
                        No, it is the same
                    </label>
                </div>

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="differentAddress"
                        name="addressType"
                        value="no"
                        checked={isSameAddress === 'no'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="differentAddress" className="ml-3 block text-sm font-medium text-gray-700">
                        Yes, it is different
                    </label>
                </div>
            </div>

            {/* Conditionally display term-time address fields */}
            {isSameAddress === 'no' && (
                <div className="p-6 max-w-7xl mx-auto">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">
                            Term Time Address
                        </h3>
                        <p>If you're living away from home during your studies, please provide the details of the term time address below</p>
                    </div>
                    <div className="mb-4 flex md:whitespace-nowrap">
                        <label htmlFor="add1" className="block text-sm font-medium text-gray-700">
                            Address Line 1
                        </label>
                        <input
                            id="add1"
                            name="add1"
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                        />
                    </div>
                    <div className="mb-4 flex md:whitespace-nowrap">
                        <label htmlFor="add2" className="block text-sm font-medium text-gray-700">
                            Address Line 2
                        </label>
                        <input
                            id="add2"
                            name="add2"
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                        />
                    </div>
                    <div className="mb-4 flex md:whitespace-nowrap">
                        <label htmlFor="add3" className="block text-sm font-medium text-gray-700">
                            Address Line 3
                        </label>
                        <input
                            id="add3"
                            name="add3"
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                        />
                    </div>
                    <div className="mb-4 flex md:whitespace-nowrap">
                        <label htmlFor="add4" className="block text-sm font-medium text-gray-700">
                            Address Line 4
                        </label>
                        <input
                            id="add4"
                            name="add4"
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                        />
                    </div>
                    <div className="mb-4 flex md:whitespace-nowrap">
                        <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">
                            Postcode
                        </label>
                        <input
                            id="postcode"
                            name="postcode"
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TermTimeAddress;
