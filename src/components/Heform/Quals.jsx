import React from 'react';

const qualifications = [
    { ukLevel: 'Level 1', qualification: 'GCSEs (Grade D-G)', equivalent: 'High School Diploma (some US states)' },
    { ukLevel: 'Level 2', qualification: 'GCSEs (Grade A*-C)', equivalent: 'High School Diploma (most US states)' },
    { ukLevel: 'Level 3', qualification: 'A Levels', equivalent: 'High School Diploma with Advanced Placement (AP) or International Baccalaureate (IB)' },
    { ukLevel: 'Level 4', qualification: 'Higher National Certificate (HNC)', equivalent: 'Associate Degree' },
    { ukLevel: 'Level 5', qualification: 'Higher National Diploma (HND)', equivalent: 'Associate Degree (with more credits)' },
    { ukLevel: 'Level 6', qualification: 'Bachelor\'s Degree', equivalent: 'Bachelor\'s Degree' },
    { ukLevel: 'Level 7', qualification: 'Master\'s Degree', equivalent: 'Master\'s Degree' },
    { ukLevel: 'Level 8', qualification: 'Doctorate (PhD)', equivalent: 'Doctorate (PhD)' },
];

const QualsonEntry
 = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">UK Levels and Academic Qualification Equivalents </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UK Level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equivalent</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {qualifications.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.ukLevel}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qualification}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.equivalent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QualsonEntry
;
