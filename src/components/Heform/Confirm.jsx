import React from "react";

const Confirm = () => {
    return (
        <div>
            <div className="mt-8">
                <p>I can confirm that the information I have provided is complete and accurate and I have read the College Enrolment Notice</p>
                <label className="inline-flex items-center mt-2">
                    <input type="checkbox" id="declaration" name="declaration" required className="form-checkbox h-3 w-3 text-blue-600" />
                    <span className="ml-2 text-gray-700">- Tick here to confirm</span>
                </label>
            </div>
        </div>
    )
};

export default Confirm;