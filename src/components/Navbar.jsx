import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header className="bg-black text-white py-4 text-poppins">
            <div className="container mx-auto">
                {/* Flex the first three links to the right */}
                <div className="flex justify-end mb-4">
                    <ul className="flex space-x-8 items-center">
                        <li>
                            <a href="#home" className="flex items-center text-md hover:text-gray-400">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <i className="fas fa-briefcase mr-2"></i> WORK FOR US
                            </a>
                        </li>
                        <li>
                            <a href="#students" className="flex items-center text-md hover:text-gray-400">
                                <FontAwesomeIcon icon={faUserFriends} />
                                <i className="fas fa-users mr-2"></i> STAFF AND STUDENTS
                            </a>
                        </li>
                        <li>
                            <a href="#search" className="flex items-center text-md hover:text-gray-400">
                                <FontAwesomeIcon icon={faSearch} />
                                <i className="fas fa-search mr-2"></i> SEARCH
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Center the logo */}
                <div className="mb-6 text-center">
                    <a href='/'>
                    <img
                        src='https://www.newcollegedurham.ac.uk/templates/ncd/img/full_logo.svg'
                        alt="ncd logo"
                        className="mx-auto w-[140px]"
                    />
                    </a>
                </div>

                {/* Center the navigation links */}
                <nav>
                    <ul className="flex justify-center space-x-8 items-center italic">
                        <li><a href="#home" className="text-lg ld hover:text-gray-400">COURSES</a></li>
                        <li><a href="#students" className="text-lg hover:text-gray-400">STUDENTS</a></li>
                        <li><a href="#events" className="text-lg hover:text-gray-400">EVENTS</a></li>
                        <li><a href="#about" className="text-lg hover:text-gray-400">ABOUT THE COLLEGE</a></li>
                        <li><a href="#facilities" className="text-lg hover:text-gray-400">OUR FACILITIES</a></li>
                        <li><a href="#employers" className="text-lg hover:text-gray-400">EMPLOYERS</a></li>
                        <li><a href="#contact" className="text-lg hover:text-gray-400">CONTACT US</a></li>
                        <li><a href="#apply" className="bg-customPink font-bold hover:bg-white text-black px-6 py-2 rounded text-md">APPLY NOW</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
