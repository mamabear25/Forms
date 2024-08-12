import React from "react";

const Warning = () => {

    return (
        <div className="mb-6 flex items-start bg-warningColor p-6 rounded-md max-w-8xl mx-auto text-lg border border-red-300">
            <div className="flex-shrink-0">
            <svg
                className="w-6 h-6 text-red-700 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0V6zm-.75 7.25a.75.75 0 100 1.5.75.75 0 000-1.5z"
                    clipRule="evenodd"
                />
            </svg>

            </div>
            <div className="">
                <p className="">
                    You should only complete this form if you have been sent an offer letter confirming you have a place
                    on this programme. If you do not have an offer and you in this enrolment form it could be considered a fraudulent act.
                </p>
            </div>
        </div>
    )
};

export default Warning;