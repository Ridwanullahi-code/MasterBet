import { useEffect, useState } from 'react';
import ResultCard from "../components/ResultCard"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from '../components/Input';
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import scrapeData from '../functions/fetch';


const Result = () => {
    const [lunch, getLunch] = useState([])
    const [teatime, getTeatime] = useState([])

    useEffect(() => {
    scrapeData().then((data) => {
        getLunch(data[0][0]);
        getTeatime(data[0][1]);
    });
    }, [])

    return (
        <section className="bg-gray-100">
            <Navbar />
            <div className="flex-col-reverse md:flex-row items-center px-2 mx-auto my-10
                space-y-0 md:space-y-0 md:px-30 lg:px-40 lx:px-40">
                <div className="text-white bg-black flex justify-between items-center p-4 px-6 border-black h-15 shadow">
                    <h2 className="font-bold">PREVIOUS RESULTS</h2>
                    <CalendarDaysIcon className="h-8 w-8 text-white"/>
                    
                </div>
                <div className="flex flex-col space-y-3">
                    <ResultCard data={lunch} title="LunchTime"/>
                    <ResultCard data={teatime} title="Teatime"/>
                </div>
                <Input />
            </div>
            <Footer />
        </section>
        
    )
}

export default Result;