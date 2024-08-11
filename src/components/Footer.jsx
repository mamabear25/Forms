import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">About Us</h2>
                    <p className="text-sm">
                        We are a leading institution committed to providing quality education and helping our students achieve their goals.
                    </p>
                    </div>

                    <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="#courses" className="hover:underline">Courses</a></li>
                        <li><a href="#students" className="hover:underline">Students</a></li>
                        <li><a href="#events" className="hover:underline">Events</a></li>
                        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <ul className="text-sm space-y-2">
                        <li>123 College Ave</li>
                        <li>City, State 12345</li>
                        <li>Email: info@college.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Facebook Icon */}
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.468 3.622h-3.119V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                        </svg>
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Twitter Icon */}
                            <path d="M24 4.557a9.994 9.994 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.379 4.482A13.945 13.945 0 0 1 1.671 3.149a4.903 4.903 0 0 0 1.523 6.57 4.889 4.889 0 0 1-2.229-.616v.061a4.915 4.915 0 0 0 3.946 4.816 4.917 4.917 0 0 1-2.224.085 4.915 4.915 0 0 0 4.59 3.417A9.86 9.86 0 0 1 0 19.54a13.9 13.9 0 0 0 7.548 2.212c9.058 0 14.015-7.508 14.015-14.015 0-.214-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                        </svg>
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* LinkedIn Icon */}
                            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728V22.27C0 23.226.792 24 1.77 24h20.461C23.205 24 24 23.226 24 22.27V1.728C24 .774 23.205 0 22.23 0zM7.06 20.452H3.503V9H7.06v11.452zM5.282 7.534a2.067 2.067 0 1 1 0-4.134 2.067 2.067 0 0 1 0 4.134zm14.682 12.918h-3.554v-5.798c0-1.38-.027-3.156-1.923-3.156-1.923 0-2.218 1.505-2.218 3.06v5.894h-3.554V9h3.414v1.563h.05c.476-.898 1.635-1.84 3.365-1.84 3.597 0 4.26 2.367 4.26 5.448v6.281z" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NCD College. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
