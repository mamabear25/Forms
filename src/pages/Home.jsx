import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-blue-600 animate-bounce mb-8">Curriculum Information Services</h1>

      <div className="space-y-4 gap-4">
        <Link
          to="/he-start"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition"
        >
          HE Pre-Enrolment Form
        </Link>
        {/* <Link
          to="/fe-six-new"
          className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600 transition"
        >
          16 - 18 New pre-Enrolment Form 
        </Link>
        <Link
          to="/fe-six-progressor"
          className="bg-red-500 text-white py-2 px-4 rounded shadow-lg hover:bg-red-600 transition"
        >
          16 - 18 Progressor pre-Enrolment Form
        </Link>
        <Link
          to="/form3"
          className="bg-red-500 text-white py-2 px-4 rounded shadow-lg hover:bg-red-600 transition"
        >
          FE 19+ New
        </Link>
        <Link
          to="/form3"
          className="bg-red-500 text-white py-2 px-4 rounded shadow-lg hover:bg-red-600 transition"
        >
          19+ Progressor pre-Enrolment Form
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
