import React, { useState } from 'react'
import MyLogo from './assets/skillmasterlogo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import MyStudy from './assets/study.jpg'
import CourseContent from './assets/coursecontent.jpg'
import OnlineClass from './assets/onlineclass.jpg'
import People from './assets/peoplecommunicating.jpg'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



function Hero_scection() {
    const [isOpen, setIsOpen] = useState(false);
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  return (
    <div>
        {/*navigation links and logo  */}
        <nav class="bg-white text-purple-800">
            <div class="border-0 shadow-2xl hover:shadow-purple-300 transition duration-300 flex items-center justify-between p-4">
                <div class="w-full max-w-48">
                <img src={MyLogo} alt="Skillmaster logo" />
                </div>    
                    <ul class="hidden md:flex space-x-6 mr-7">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                    <div class="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
            </div>

            {/*phone only */}
            {isOpen &&(
            <ul class="mt-4 text-center space-y-4 text-xl md:hidden">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            )}
        </nav>

        {/*welcome  */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center min-h-[400px] px-4 py-6">
            <div>
                <img class="mt-6 rounded-2xl ml-2" src={MyStudy} alt=" Study" />
            </div>
            <div class="space-y-6">
                <p class="text-4xl font-semibold text-purple-600">Welcome to SkillMaster!</p>
                <p>Your ultimate tool for mastering new skills efficiently. 
                Whether you're a student looking to enhance your knowledge or a teacher seeking to
                create engaging learning experiences, SkillMaster is here to support you every step 
                of the way.</p>
                <button class="border-1 rounded-2xl p-2 bg-purple-600 hover:bg-purple-900 text-white">
                Get Started
            </button>
            </div>
        </div>

        {/*about stats */}
        <div>
            <div class="border-0 rounded-4xl shadow-xl/30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 mt-5">
                <div class="text-center" ref={ref1}>
                    <p class="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-purple-600">
                    {inView1 && <CountUp end={200} duration={2} />}+
                    </p>
                    <p class="text-sm sm:text-base">Students Enrolled</p>
                </div>

                <div class="text-center" ref={ref2}>
                    <p class="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-purple-600">
                    {inView2 && <CountUp end={100} duration={2} />}+
                    </p>
                    <p class="text-sm sm:text-base">Active Teachers</p>
                </div>

                <div class="text-center" ref={ref3}>
                    <p class="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-purple-600">
                    {inView3 && <CountUp end={50} duration={2} />}+
                    </p>
                    <p class="text-sm sm:text-base">Courses Uploaded</p>
                </div>

                <div class="text-center" ref={ref4}>
                    <p class="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-purple-600">
                    {inView4 && <CountUp end={4.8} decimals={1} duration={2} />}+
                    </p>
                    <p class="text-sm sm:text-base">Average Rating</p>
                </div>
            </div>
        </div>

        {/*about stats explanantion */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mx-8">
            <div class="border-0 shadow-xl/30 rounded-2xl p-4 ">
                <img  class="w-full max-w-96" src={CourseContent} alt="Dedicated Learning Support" />
                <p class="text-2xl font-bold text-purple-600">Dedicated Learning Support</p>
                <p class="pt-2">Our platform connects learners with passionate educators 
                who are committed to guiding them every step of the way — boosting confidence and understanding</p>
            </div>

            <div class="border-0 shadow-xl/30 rounded-2xl p-4">
                <img class="w-full max-w-96" src={OnlineClass} alt="Dedicated Learning Support" />
                <p class="text-2xl font-bold text-purple-600">Engaging Course Content</p>
                <p class="pt-2"> Every course is built with interactive lessons, quizzes, 
                    and practical exercises to ensure learners stay engaged and retain what they learn.</p>
            </div>

            <div class="border-0 shadow-xl/30 rounded-2xl p-4">
                <img class="w-full max-w-96" src={People} alt="Dedicated Learning Support" />
                <p class="text-2xl font-bold text-purple-600">Growing Community</p>
                <p class="pt-2">Join a thriving community of 200+ learners and teachers 
                    who collaborate, share insights, and grow together through
                    our discussion forums and peer learning features.</p>
            </div>
        </div>

        {/*footer */}
        <div class="bg-purple-600 text-white mt-12">
            <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                    <h2 class="font-mono text-4xl text-purple-950">SKILLMASTER</h2>
                    <p class="font-mono">Empowering learners and educators through efficient, engaging digital tools.</p>
                </div>

                {/* quick links*/}
                <div>
                    <h3 class="font-mono font-semibold text-2xl">Qiuck Links</h3>
                    <ul>
                        <li><a class="font-mono" href="#">Home</a></li>
                        <li><a class="font-mono" href="#">About</a></li>
                        <li><a class="font-mono" href="#">Contact us</a></li>
                    </ul>
                </div>

                {/* contact info*/}
                <div>
                    <h3 class="font-mono font-semibold text-2xl">Contact us</h3>
                    <p class="font-mono">Email: info@skillmaster.com</p>
                    <p class="font-mono">Phone: +254123456</p>
                    <p class="font-mono">Location: Nairobi, Kenya </p>
                </div>

                {/*socila media*/}
                <div>
                    <p class="font-mono font-semibold text-xl">Follow us</p>
                    <div className="flex space-x-4">
                        <a href="#"><FaFacebookF className="hover:text-purple-300" /></a>
                        <a href="#"><FaTwitter className="hover:text-purple-300" /></a>
                        <a href="#"><FaInstagram className="hover:text-purple-300" /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-300 py-4 border-t border-purple-700">
                © {new Date().getFullYear()} SkillMaster. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Hero_scection