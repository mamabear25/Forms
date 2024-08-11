import React, { useState } from 'react';
import Declaration from '../../components/Heform/Declaration';
import Confirm from '../../components/Heform/Confirm';
import EnrolmentNotice from '../../components/Heform/EnrolButton';

const HFive = () => {
    const [files, setFiles] = useState([]);
    const [fileInput, setFileInput] = useState(null);
    const [showTable, setShowTable] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setFileInput(event.target.files);
        const newFiles = Array.from(event.target.files);

        // Allowed file types
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/avif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        // Filter files based on allowed types
        const validFiles = newFiles.filter(file => allowedTypes.includes(file.type));

        // Update state with valid files
        setFiles(validFiles);
    };

    const handleUpload = () => {
        if (fileInput && fileInput.length > 0) {
            setShowTable(true);
            setError('');
        } else {
            setError('Please select a file to upload.');
        }
    };

    const handleRemoveFile = (fileName) => {
        setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    return (
        <div>
            <div className="container mx-auto mt-8 p-4 bg-white rounded">
                <h2>Fee Information</h2>
                <p>Please note, the fee for this course is $4000</p>
                <form id="preEnrolmentForm">
                    <div className="mt-4">
                        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                            How do you intend to pay your tuition fee (Select one) <span className="text-red-600">*</span>
                        </label>
                        <select id="paymentMethod" name="paymentMethod" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                            <option value="" disabled selected>--Please Select--</option>
                            <option value="loan">Student Loan</option>
                            <option value="personal">Personal Payment</option>
                        </select>
                    </div>
                    <p className="mt-2">The evidence upload feature has been provided so that you can upload proof of a student loan or Advanced Learner Loan.</p>
                    <div className="mt-4">
                        <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">Upload file</label>
                        <input
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                            multiple
                            onChange={handleFileChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={handleUpload}
                            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Upload
                        </button>
                    </div>

                    {error && (
                        <div className="mt-4 text-red-600">
                            {error}
                        </div>
                    )}

                    {/* Conditionally render the file table only if the table should be shown */}
                    {showTable && files.length > 0 && (
                        <div className="mt-6">
                            <table className="min-w-full divide-y divide-gray-200 mt-2">
                                <thead className="bg-gray-50">
                                    <tr className='text-center'>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attachment</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {files.map(file => (
                                        <tr key={file.name}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{file.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveFile(file.name)}
                                                    className="bg-red-700 p-2 text-black hover:bg-black hover:text-white rounded-sm"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <Declaration />
                    <EnrolmentNotice />
                    <Confirm />
                </form>
            </div>
        </div>
    );
};

export default HFive;
