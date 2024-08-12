import React from "react";

const Offering = () => {
    return (
        <div className="flex justify-left p-4 mb-10 text-lg">
    <div className="overflow-x-auto w-full mx-auto" style={{maxWidth: '90vw'}}>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-white p-4">
                <tr className="p-4">
                    <th className="border border-gray-300 p-2 text-left p-4">Course Name</th>
                    <th className="border border-gray-300 p-2 text-left p-4">Start Date</th>
                    <th className="border border-gray-300 p-2 text-left p-4">End Date</th>
                    <th className="border border-gray-300 p-2 text-left p-4">Site</th>
                    <th className="border border-gray-300 p-2 text-left p-4">Yearly Fees</th>

                </tr>
            </thead>
            <tbody className="">
                <tr className="bg-gray-200">
                    <td className="border border-gray-300 p-2 text-left p-6">FdA Business and Management (CECOS-Sep-LDN EG) Y1</td>
                    <td className="border border-gray-300 p-2 text-left p-6">23/09/2024</td>
                    <td className="border border-gray-300 p-2 text-left p-6">29/05/2026</td>
                    <td className="border border-gray-300 p-2 text-left p-6">CECOS - London (Edmonton Green)</td>
                    <td className="border border-gray-300 p-2 text-left p-6">£9,250.00</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

    )
};

export default Offering;