import React from "react";

const Offering = () => {
    return (
        // <div className="flex justify-center p-4">
        //     <div className="overflow-x-auto w-full max-w-8xl">
        //         <table className="min-w-full table-auto border-collapse border border-gray-200">
        //         <thead className="bg-white">
        //             <tr>
        //             <th className="border border-gray-300 p-2 text-center">Course Name</th>
        //             <th className="border border-gray-300 p-2 text-center">Start Date</th>
        //             <th className="border border-gray-300 p-2 text-center">End Date</th>
        //             <th className="border border-gray-300 p-2 text-center">Site</th>
        //             </tr>
        //         </thead>
        //         <tbody className="">
        //             <tr className="bg-gray-200">
        //             <td className="border border-gray-300 p-2 text-center">FdA Business and Management Y1</td>
        //             <td className="border border-gray-300 p-2 text-center">09/09/2024</td>
        //             <td className="border border-gray-300 p-2 text-center">12/06/2026</td>
        //             <td className="border border-gray-300 p-2 text-center">Framwellgate Moor Campus</td>
        //             </tr>
        //         </tbody>
        //         </table>
        //     </div>
        // </div>

        <div className="flex justify-center p-4">
    <div className="overflow-x-auto w-full max-w-8xl">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-white">
                <tr>
                    <th className="border border-gray-300 p-2 text-center">Course Name</th>
                    <th className="border border-gray-300 p-2 text-center">Start Date</th>
                    <th className="border border-gray-300 p-2 text-center">End Date</th>
                    <th className="border border-gray-300 p-2 text-center">Site</th>
                    <th className="border border-gray-300 p-2 text-center">Yearly Fees</th>

                </tr>
            </thead>
            <tbody className="">
                <tr className="bg-gray-200">
                    <td className="border border-gray-300 p-2 text-center">FdA Business and Management (CECOS-Sep-LDN EG) Y1</td>
                    <td className="border border-gray-300 p-2 text-center">23/09/2024</td>
                    <td className="border border-gray-300 p-2 text-center">29/05/2026</td>
                    <td className="border border-gray-300 p-2 text-center">CECOS - London (Edmonton Green)</td>
                    <td className="border border-gray-300 p-2 text-center">£9,250.00</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

    )
};

export default Offering;