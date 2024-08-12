import React from 'react';
import EmploymentDets from '../../components/Heform/EmploymentDets';
import Offering from '../../components/OfferingDetails';

const HFour = () => {
    return (
        <div>
            <div className="container mx-auto mt-20 p-4 bg-white rounded">
                <Offering />
                <div className='mt-4 p-4 mb-6'>
                <h2 className='text-lg container' > / Personal Details / Further Details / Next of Kin / Emergency Contact / <span className='font-bold'>Employment</span> / Declaration</h2>
                </div>
                <form id="preEnrolmentForm">
                    <EmploymentDets />
                </form>
            </div>
        </div>
    )
};

export default HFour;
