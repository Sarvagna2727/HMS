import banner from "../../assets/hero.png";
import service from "../../assets/services.png";
import human1 from "../../assets/human1.jpg";
import human4 from "../../assets/human4.jpg";
import human6 from "../../assets/human6.jpg";
import doct1 from "../../assets/doct1.jpg";
import doct2 from "../../assets/doct2.jpg";
import doct3 from "../../assets/doct3.jpg";
import doct4 from "../../assets/doct4.jpg";
import doct5 from "../../assets/doct5.jpg";
import feedback from "../../assets/feedback.png";
import review from "../../assets/review.jpg";
import Footer from '../Shared/Footer';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [email, setEmail] = useState("");

    const handleNewsletter = async (e) => {
        e.preventDefault();
        await axios.post("https://hmsmern.onrender.com/admin/new-letter", { email })
            .then(() => {
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    confirmButtonText: "OK",
                    text: "Thanks For Subscribing To The Newsletter!",
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    confirmButtonText: "OK",
                    text: "Failed!",
                });
            });
    };

    return (
        <div className='bg-[#FEFAE0]'>

            <section>
                <div className='flex flex-col lg:flex-row h-screen w-screen justify-center items-center max-w-7xl m-auto'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1 }}
                        className='flex flex-col justify-center'>
                        <p className='text-3xl font-semibold text-center'>The Power to Heal</p>
                        <p className='text-lg text-center'>
                        HMS Hospitals has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities spread across several of the HMS hospital locations and each Centre of Excellence stands out as a citadel of world class clinical outcomes.
                        
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1 }}
                        className='w-full md:w-[80%] lg:w-[100%]'>
                        <img src={banner} alt="hero" className='h-[400px] shadow-black' />
                    </motion.div>
                </div>
            </section>

            <motion.section
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView ? 1 : 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1 }}
>
    <div className='h-full max-w-7xl flex flex-col m-auto justify-center items-center overflow-auto'>
        <p className='font-semibold text-3xl pt-16'>Meet Our Specialist</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {/* Specialist Cards */}
            {[
                { image: human1, name: 'Rahul ', profession: 'Cardiologist' },
                { image: doct1, name: 'Ramesh ', profession: 'Neurologist' },
                { image: doct3, name: 'Suresh', profession: 'Orthopedic Surgeon' },
                { image: human4, name: 'Ramya', profession: 'Pediatrician' },
                { image: doct2, name: 'Vikram', profession: 'Dermatologist' },
                { image: human6, name: 'Mahesh ', profession: 'Radiologist' },
                { image: doct4, name: 'Ganesh', profession: 'General Surgeon' },
                { image: doct5, name: 'Anjana', profession: 'Plastic Surgeon' },
            ].map((doctor, index) => (
                <div key={index} className='flex flex-col items-center bg-[#D4A373] border border-gray-200 rounded-lg shadow w-[270px] h-[300px]'>
                    <div className="flex flex-col items-center justify-center p-4">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.image} alt={doctor.name} />
                        <h5 className="mb-1 text-xl font-medium text-black">{doctor.name}</h5>
                        <span className="text-sm text-black">{doctor.profession}</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="/appointment" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</motion.section>



            <section>
                <div className='max-w-7xl m-auto flex flex-col justify-center gap-8 items-center w-full h-full overflow-auto '>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1 }}
                        className='flex flex-col justify-center items-center'>
                        <p className='text-3xl font-semibold'>Our Patients Feedback About Us</p>
                        <p className='text-sm text-center'>
                            A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1 }}
                        className='flex items-center gap-4'>
                        <img className='h-[300px] hidden md:block' src={feedback} alt="" />
                        <div className='flex flex-col items-start py-5 p-5 w-[450px] shadow-xl bg-[#E9EDC9] shadow-violet-400 rounded-lg'>
                            <div className='flex justify-center items-center'>
                                <img src={review} className='h-[90px] w-[110px] rounded-full' alt="profile" />
                                <div className='flex flex-col justify-center items-center ps-3'>
                                    <p className='font-semibold'>Ms. Ariana Grande</p>
                                    <div className='flex'>
                                        {[...Array(4)].map((_, index) => (
                                            <svg key={index} className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < 4 ? "orange" : "green"}>
                                                <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>I have visited many hospitals but HMS has to be one of the finest anywhere in the world. </p>
                                <p>From the International desk to the private executive room, service and hospitality have been excellent.</p>
                                <p>I would highly recommend HMS to all. Once again, many thanks for your help.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

           

            <Footer />
        </div>
    );
}

export default Home;
