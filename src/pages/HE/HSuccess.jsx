import React from 'react';

const HSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <div className="bg-black shadow-xl rounded-lg p-6 w-full max-w-6xl text-center">
                <h1 className="text-4xl font-bold text-white mb-6">Online Form Complete</h1>
            </div>
            <div className="mt-2 bg-green-100 border border-green-400 shadow-xl rounded-lg p-4 w-full max-w-6xl text-center">
                <p className="text-xl text-gray-800">Thank you for completing the online form.</p>
            </div>
        </div>
    );
};

export default HSuccess;


