import React, { useState } from 'react';

const hardcodedAddresses = {
    'DL14 6EY': [
        { id: 1, street: '1 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
        { id: 2, street: '2 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
        { id: 3, street: '3 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
        { id: 4, street: '4 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
        { id: 5, street: '5 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
        { id: 6, street: '6 General Bucher Court', area: 'Sunderland', region: 'Tyne and Wear', postcode: 'DL14 6EY' },
    ]
};

const AddressSearch = ({ formData, setFormData, showErrors }) => {
    const [errors, setErrors] = useState([]);
    const [postcode, setPostcode] = useState('');
    const [addressOptions, setAddressOptions] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [error, setError] = useState('');
    const [manualEntry, setManualEntry] = useState(false); // State to control manual entry visibility
    const [manualAddress, setManualAddress] = useState({
        street: '',
        area: '',
        region: '',
        postcode: '',
    });

    const validate = () => {
        let valid = true;
        const stepErrors = [];

        // Check if postcode is provided
        if (!formData.postcode) {
            stepErrors.push('Postcode is required.');
            valid = false;
        } else if (!/^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/.test(formData.postcode.toUpperCase())) {
            stepErrors.push('Postcode must be in a valid format.');
            valid = false;
        }

        setErrors(stepErrors);
        return valid;
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (postcode.trim() === '') {
            setError('Postcode cannot be empty.');
            return;
        }
        setError('');

        const addresses = hardcodedAddresses[postcode.toUpperCase()];
        if (addresses) {
            setAddressOptions(addresses);
            setSelectedAddress(null);
            setManualEntry(false); // Hide manual entry when postcode search is successful
        } else {
            setAddressOptions([]);
            setError('No addresses found for this postcode.');
        }
    };

    const handleClear = () => {
        setPostcode('');
        setAddressOptions([]);
        setSelectedAddress(null);
        setError('');
        setManualEntry(false); // Hide manual entry when clearing
    };

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
    };

    const handleManualEntryToggle = () => {
        setManualEntry(!manualEntry);
        if (!manualEntry) {
            // Reset manual address fields if switching to manual entry
            setManualAddress({
                street: '',
                area: '',
                region: '',
                postcode: '',
            });
        }
    };

    const handleManualAddressChange = (e) => {
        setManualAddress({
            ...manualAddress,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="p-6 max-w-8xl mx-auto text-md bg-white">
            
            <div className="bg-white border rounded-sm p-6">
                <h3 className="text-[1.75rem] font-semibold mb-4">Address Search</h3>
                <div className="flex items-center mb-4">
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                        Postcode <span className="text-red-600">*</span>
                    </label>
                    <div className="flex-1 flex flex-col items-end ml-4 space-y-2">
                        <input
                            id="postcode"
                            name="postcode"
                            type="text"
                            value={postcode}
                            onChange={handlePostcodeChange}
                            className="p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full max-w-xs"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="flex space-x-4 mt-2">
                            <button
                                onClick={handleSearch}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Search
                            </button>
                            <button
                                onClick={handleClear}
                                className="px-4 py-2 bg-teal-500 text-white rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end space-y-2 mb-4 text-left align-left bg-formColor">
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                        onClick={(e) => {
                            e.preventDefault();
                            handleManualEntryToggle(); // Toggle manual entry
                        }}
                    >
                        I don't know the postcode
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 "
                        onClick={(e) => {
                            e.preventDefault();
                            handleManualEntryToggle(); // Toggle manual entry
                        }}
                    >
                        Enter address manually / My address is not listed
                    </a>
                </div>
                {manualEntry && (
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold">Enter Your Address Manually:</h4>
                        <div className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="street" className="text-sm font-medium text-gray-700">
                                    Address Line 1
                                </label>
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    value={manualAddress.street}
                                    onChange={handleManualAddressChange}
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="area" className="text-sm font-medium text-gray-700">
                                    Address Line 2
                                </label>
                                <input
                                    id="area"
                                    name="area"
                                    type="text"
                                    value={manualAddress.area}
                                    onChange={handleManualAddressChange}
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="region" className="text-sm font-medium text-gray-700">
                                    Address Line 3
                                </label>
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    value={manualAddress.region}
                                    onChange={handleManualAddressChange}
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="postcode" className="text-sm font-medium text-gray-700">
                                    Postcode
                                </label>
                                <input
                                    id="postcode"
                                    name="postcode"
                                    type="text"
                                    value={manualAddress.postcode}
                                    onChange={handleManualAddressChange}
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                )}
                {addressOptions.length > 0 && !manualEntry && (
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold">Select Your Address:</h4>
                        <select
                            onChange={(e) => handleAddressSelect(addressOptions[e.target.selectedIndex])}
                            className="mt-2 p-2 max-w-md border block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option value="">Select address</option>
                            {addressOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.street}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedAddress && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-md">
                        <h4 className="text-lg font-semibold mb-4">Address</h4>
                        <div className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="add1" className="text-sm font-medium text-gray-700">
                                    Address Line 1
                                </label>
                                <input
                                    id="add1"
                                    name="add1"
                                    type="text"
                                    value={selectedAddress.street}
                                    readOnly
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="add2" className="text-sm font-medium text-gray-700">
                                    Address Line 2
                                </label>
                                <input
                                    id="add2"
                                    name="add2"
                                    type="text"
                                    value={selectedAddress.area}
                                    readOnly
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="add3" className="text-sm font-medium text-gray-700">
                                    Address Line 3
                                </label>
                                <input
                                    id="add3"
                                    name="add3"
                                    type="text"
                                    value={selectedAddress.region}
                                    readOnly
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="postcode" className="text-sm font-medium text-gray-700">
                                    Postcode
                                </label>
                                <input
                                    id="postcode"
                                    name="postcode"
                                    type="text"
                                    value={selectedAddress.postcode}
                                    readOnly
                                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddressSearch;

