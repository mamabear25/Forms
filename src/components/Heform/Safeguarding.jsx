import React from 'react';

const Notice = () => {
  return (
    <div>
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
          The college is committed to Safeguarding and promoting the welfare of
          all vulnerable groups (Children and adults) and therefore we ask that
          you please indicate here if you have any unspent convictions or other
          punishments which are not protected by the Rehabilitation of Offenders
          Act 1974 (Exceptions) Order 1975 (as amended in 2013). For information
          on what 'unspent conviction' means please see appendix 1 <a className="text-blue-500" href='/' target='_blank'>here.</a>
        </p>
      </div>
    </div>
    <div className="mt-4">
      <label for="criminalConviction" className="block text-sm font-medium text-gray-700">Do you believe you have a criminal conviction?</label>
      <select id="criminalConviction" name="criminalConviction" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
          <option value disabled selected>Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select>
  </div>
  </div>
  );
};

export default Notice;
