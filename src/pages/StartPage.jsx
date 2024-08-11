import React from 'react';
import StartButton from '../components/Heform/StartButton';
import Offering from '../components/OfferingDetails';
import Warning from '../components/Heform/Warning';

const StartPage = () => {
  return (
    <div>
        <Offering />
    <div id="start" className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
        <Warning />
      <hr className="mb-6 border-gray-300" />

      <p className="mb-6 text-gray-700">
        Thank you for your interest in applying with us. If you wish to ask any questions during your application, please email&nbsp;
        <a href="mailto:admissions@newdur.ac.uk" className="text-blue-600 underline hover:text-blue-800">admissions@newdur.ac.uk</a>.
      </p>

      <p className="mb-6 text-gray-700">
        The information we are collecting from you here will be used to process your application. More information on how your data will be processed by New College Durham can be read 
        <a href="https://www.newcollegedurham.ac.uk/privacynotices/" className="text-blue-600 underline hover:text-blue-800"> in detail here</a>.
      </p>

      <p className="font-bold text-gray-800 mb-4">You will need:</p>
      <ul className="list-disc pl-5 mb-6 text-gray-700">
        <li className="mb-2">Your details (name, address, contact details)</li>
        <li className="mb-2">If you have any disabilities or learning needs, and details about those</li>
        <li className="mb-2">If you have any unspent criminal convictions</li>
        <li className="mb-2">For HE students - your personal statement &amp; details of career aspirations and experience</li>
      </ul>

      <p className="mb-6 text-gray-700">
        If you experience any issues completing our application form, please contact admissions at&nbsp;
        <a href="mailto:admissions@newdur.ac.uk" className="text-blue-600 underline hover:text-blue-800">admissions@newdur.ac.uk</a> or call 0191 375 4210.
        <br /><br />
        If you have technical issues, please try to send us a screenshot to help us diagnose the problem and resolve the issue.
      </p>

      <p className="mb-6 text-gray-700">
        Please complete the form and remember to submit it at the end. This web form will remain open for up to 3 hours.
      </p>
      <p className="mb-6 text-gray-700">
        To ensure we guide you to the right place, please answer the following questions:
      </p>
      <div className="">
        <StartButton />
      </div>
      <div className='border-b mt-10'></div>
    </div>
    </div>
  );
};

export default StartPage;
