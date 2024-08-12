import React from 'react';
import StartButton from '../components/Heform/StartButton';
import Offering from '../components/OfferingDetails';
import Warning from '../components/Heform/Warning';
import Banner from '../components/Banner';

const StartPage = () => {
  return (
    <div className='text-lg'>
      <Banner />
      <div className="mt-20">
      <Offering />

      </div>
      <div id="start" className="p-6 mx-auto bg-formColor " style={{maxWidth: '90vw'}}>
        <Warning />

      <p className="mb-6">
        Thank you for your interest in applying with us. If you wish to ask any questions during your application, email&nbsp;
        <a href="mailto:admissions@newdur.ac.uk" className="text-blue-600 no-underline hover:text-blue-800">cishelpdesk@newdur.ac.uk</a> or call <a href="tel:01913754100" className="text-blue-600 no-underline hover:text-blue-800">0191 375 4100</a>.
      </p>

      <p className="mb-6">
        The information we are collecting from you here will be used to process your enrolment on your chosen course or programme and we need it to register you with the correct Awarding Body and to provide to our Funding Body the ESFA.
      </p>

      <p className="font-semibold mb-4">Before you begin, please ensure you have the following information available in order to make a successful submission:</p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">Personal details</li>
        <li className="mb-2">Your residency/nationality information</li>
        <li className="mb-2">Details about any disabilities or learning difficulties, if applicable.</li>
        <li className="mb-2">Emergency Contact details such as phone number, email and address</li>
        <li className="mb-2">Your employment details (length of time you've worked and how many hours per week)</li>
      </ul>

      <p className="font-semibold mb-4">Please note the following important information</p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2"><strong>This session will remain active for 40 minutes </strong> before it expires - you will have to start again if the session expires details</li>
        <li className="mb-2">Remember to click the <strong>Submit button at the end of the form </strong>, otherwise we will not receive your enrolment </li>
      </ul>
      <div className="">
        <StartButton />
      </div>
      <div className='border-b mt-10'></div>
    </div>
    </div>
  );
};

export default StartPage;
