// import React from 'react';

// const qualifications = [
//     { ukLevel: 'Entry Level ', 
//         equivalent: 'first certificate GCSE - grades 3, 2, 1 or grades D, E, F, G level 1 award level 1 certificate level 1 diploma level 1 ESOL level 1 essential skills level 1 functional skills level 1 national vocational qualification (NVQ) music grades 1, 2 and 3' 
//     },
//     { ukLevel: 'Level 1', 
//         equivalent: 'For example, GCSE grades 1-3/F-D, First certificate, Level 1 Award/Certificate/Diploma, Functional Skill Level 1'
//     },
//     { ukLevel: 'Full Level 2', 
//         equivalent: 'GCSE/O Level (5 or more GCSEs grades A*-C), GCSE (9-1) (5 or more GCSEs grade 4 or above), 2 or 3 AS Levels (for AS qualifications regulated before 1 September 2015), CSE Grade 1 (5 or more), 1 A Level, Higher 14-19 Diploma, QCF Diploma level 2, QCF Certificate level 2 at 13 or 14 credits undertaken before 2014 to 2015, Level 2 Principal Learning, NVQ level 2, GNVQ Intermediate,' 
//     },
//     { ukLevel: 'Full Level 3', 
//         equivalent: 'A Levels (2 or more advanced level passes), 4 or more AS Levels (for AS qualifications regulated before 1 September 2015), QCF Diploma Level 3, QAA Access to HE, Advanced 14-19 Diploma, GNVQ Advanced, NVQ level 3, AVCE double award, Tech Levels which are in the 16-19 Performance Tables, Applied Generals which are in the 16-19 Performance Tables (from 1 August 2015), QCF Certificate at Level 3 which is 30 to 36 credits' 
//     },
//     { ukLevel: 'Level 4', 
//         equivalent: 'For example, Certificate of Higher Education, Higher Apprenticeship, HNC' },
//     { ukLevel: 'Level 5', 
//         equivalent: 'For example, Diploma of Higher Education, Foundation Degree, HND' },
//     { ukLevel: 'Level 6', 
//         equivalent: 'For example, Degree Apprenticeship, Honours Degree' },
//     { ukLevel: 'Level 7', 
//         equivalent: 'For example, Masters level degree, PgDip' },
//     { ukLevel: 'Level 8', 
//         equivalent: 'For example, Doctorate/PhD' },
// ];


// const QualsonEntry
//  = () => {
//     return (
//         <div className="p-6 mx-auto bg-white " style={{maxWidth: '90vw'}}>
//             <div className="overflow-x-auto">
//                 <table className="w-full table-fixed divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Level
//                             </th>
//                             <th className="w-1/2 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider text-left justify-left">
//                                 Academic Qualification Equivalent
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {qualifications.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
//                                     {item.ukLevel}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left justify-left ">
//                                     {item.equivalent}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//     );
// };

// export default QualsonEntry
// ;




import React from 'react';

const qualifications = [
    {
        ukLevel: 'Entry Level',
        equivalent:
            'first certificate GCSE - grades 3, 2, 1 or grades D, E, F, G level 1 award level 1 certificate level 1 diploma level 1 ESOL level 1 essential skills level 1 functional skills level 1 national vocational qualification (NVQ) music grades 1, 2 and 3',
    },
    {
        ukLevel: 'Level 1',
        equivalent:
            'For example, GCSE grades 1-3/F-D, First certificate, Level 1 Award/Certificate/Diploma, Functional Skill Level 1',
    },
    {
        ukLevel: 'Full Level 2',
        equivalent:
            'GCSE/O Level (5 or more GCSEs grades A*-C), GCSE (9-1) (5 or more GCSEs grade 4 or above), 2 or 3 AS Levels (for AS qualifications regulated before 1 September 2015), CSE Grade 1 (5 or more), 1 A Level, Higher 14-19 Diploma, QCF Diploma level 2, QCF Certificate level 2 at 13 or 14 credits undertaken before 2014 to 2015, Level 2 Principal Learning, NVQ level 2, GNVQ Intermediate,',
    },
    {
        ukLevel: 'Full Level 3',
        equivalent:
            'A Levels (2 or more advanced level passes), 4 or more AS Levels (for AS qualifications regulated before 1 September 2015), QCF Diploma Level 3, QAA Access to HE, Advanced 14-19 Diploma, GNVQ Advanced, NVQ level 3, AVCE double award, Tech Levels which are in the 16-19 Performance Tables, Applied Generals which are in the 16-19 Performance Tables (from 1 August 2015), QCF Certificate at Level 3 which is 30 to 36 credits',
    },
    { ukLevel: 'Level 4', equivalent: 'For example, Certificate of Higher Education, Higher Apprenticeship, HNC' },
    { ukLevel: 'Level 5', equivalent: 'For example, Diploma of Higher Education, Foundation Degree, HND' },
    { ukLevel: 'Level 6', equivalent: 'For example, Degree Apprenticeship, Honours Degree' },
    { ukLevel: 'Level 7', equivalent: 'For example, Masters level degree, PgDip' },
    { ukLevel: 'Level 8', equivalent: 'For example, Doctorate/PhD' },
];

const QualsonEntry = () => {
    return (
        <div className="p-6 mx-auto bg-white" style={{ maxWidth: '90vw' }}>
            <div>
                <table className="w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Level
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
                                Academic Qualification Equivalent
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {qualifications.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 text-left w-1/3">
                                    {item.ukLevel}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-left text-justify">
                                    {item.equivalent}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QualsonEntry;
