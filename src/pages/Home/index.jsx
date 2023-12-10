import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";

export const Home = () => {
    return (
        <>
            <Navbar />
                { /* Home Section */ }
                <main class="bg-gray-100">
                    <div className="relative overflow-hidden">
                        <div aria-hidden="true" class="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                            <div class="bg-gradient-to-r from-red-500 to-orange-300 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                            <div class="bg-gradient-to-tl from-red-400 via-orange-50 to-orange-300 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div class="max-w-2xl text-center mx-auto">
                                <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-red-500 to-orange-400 text-transparent">
                                    Wizstack Student Management System
                                </p>

                                <div class="mt-5 max-w-2xl">
                                    <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                                        Intuitive Student Management System
                                    </h1>
                                </div>

                                <div class="mt-5 max-w-3xl">
                                    <p class="text-lg text-gray-600 dark:text-gray-400">
                                        Wizstack is a student management system that helps students manage their time and study more efficiently.
                                    </p>
                                </div>

                                <div class="mt-8 gap-3 flex justify-center">
                                    <Link to="/signup" className="inline-flex justify-center items-center gap-x-3 text-center hover:text-white bg-gradient-to-tl from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white py-3 px-4">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF">
                                        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="relative z-10 max-w-3xl text-center mx-auto">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                            What Makes Wizstack a Good Choice?
                        </h1>

                        { /* Feature Cards & Information */ }
                        <div class="flex flex-wrap justify-center mt-16 -mx-4">
                            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
                                <Card 
                                    title="Easy to Use" 
                                    description="Wizstack is easy to use and intuitive. It is designed to be used by students of all ages." 
                                    buttonText="Learn More" 
                                />
                            </div>

                            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
                                <Card 
                                    title="Simple & Elegent Dashboard" 
                                    description="Wizstack provides a simple and elegant dashboard to use for students." 
                                    buttonText="Learn More" 
                                />
                            </div>

                            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
                                <Card 
                                    title="Extension to Student Workflow" 
                                    description="Students who use wizstack often consider it to be an extension to their workflow and studying." 
                                    buttonText="Learn More" 
                                />
                            </div>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    );
};