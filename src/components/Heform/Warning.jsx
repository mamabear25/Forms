import React from "react";

const Warning = () => {

    return (
        <div className="flex items-start bg-green-100 border border-green-300 text-green-700 p-4 rounded-md">
            <div className="flex-shrink-0">
                <svg
                className="w-6 h-6 text-green-700 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M18 10A8 8 0 11-3 8a8 8 0 010 16zm-8.93-5.5a.75.75 0 00-1.5 0V9.5a.75.75 0 001.5 0V4.5zm0 8.25a.75.75 0 10-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                    clipRule="evenodd"
                />
                </svg>
            </div>
            <div className="flex-grow">
                <p className="text-sm">
                    You should only complete this form if you have been sent an offer letter confirming you have a place
                    on this programme. If you do not have an offer and you in this enrolment form it could be considered a fraudulent act.
                </p>
            </div>
        </div>
    )
};

export default Warning;