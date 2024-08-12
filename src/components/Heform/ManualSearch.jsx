import React, { useState } from 'react';

const ManualSearch = () => {

    return (
        <div className="p-6 mx-auto" style={{maxWidth: '90vw'}}>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">
                    Address Search
                </h3>
            </div>
            <div className="mb-4 flex">
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">
                    Address Line 1
                </label>
                <input
                    id="add1"
                    name="add1"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                />
            </div>
            <div className="mb-4 flex">
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
            <div className="mb-4 flex">
                <label htmlFor="add2" className="block text-sm font-medium text-gray-700">
                    Address Line 3
                </label>
                <input
                    id="add2"
                    name="add2"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                />
            </div>
            <div className="mb-4 flex">
                <label htmlFor="add2" className="block text-sm font-medium text-gray-700">
                    Address Line 4
                </label>
                <input
                    id="add2"
                    name="add2"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                />
            </div>
            <div className="mb-4 flex">
                <label htmlFor="add2" className="block text-sm font-medium text-gray-700">
                   Postcode
                </label>
                <input
                    id="add2"
                    name="add2"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-md"
                />
            </div>

            


                    
        </div>
    );
};

export default ManualSearch;
