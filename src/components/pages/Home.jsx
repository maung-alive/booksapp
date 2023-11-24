import React, { useState } from 'react'
import SearchBar from '../subcomponents/SearchBar';
import { FaArrowCircleRight, FaStar, FaStarHalf } from 'react-icons/fa';
import AuthorListItem from '../subcomponents/AuthorListItem';

export default function Home() {
    let [ query, setQuery ] = useState('');

    const authors = [
        {
            rank: 1,
            name: 'Jue',
            birth: '1-2-1993',
            dead: false,
            published: 21
        },
        {
            rank: 2,
            name: 'J.K Rolling',
            birth: '1-2-1967',
            dead: '13-2-2035',
            published: 19
        },
        {
            rank: 3,
            name: 'Shakesphere',
            birth: '1-2-1821',
            dead: '3-5-1880',
            published: 2231
        },
        {
            rank: 4,
            name: 'wer',
            birth: '1-2-1993',
            dead: false,
            published: 21
        },
    ]

    return (
        <div className="w-full bg-slate-600 h-auto px-3 md:px-8 py-2 md:py-4">
            <SearchBar query={query} setQuery={setQuery} />

            <div className="relative w-full h-auto bg-blue-950 px-5 md:px-10 py-2 md:py-4 my-4 md:my-8 rounded-xl md:rounded-3xl flex justify-center items-center">
                <div>
                    <p className="text-xl md:text-4xl py-3 font-medium text-white font-josefin">We are awarded top writer every month</p>
                    <p className="text-sm md:text-lg py-2 leading-9 font-medium text-gray-300 font-dosis">Lorem ipsum dolor sit amet consectetur adipisicing de chat en garcons, redema ewl elit.</p>
                    <div className="flex gap-x-2 py-2 md:gap-x-3 md:py-4">
                        <button className="w-auto h-auto px-2 md:px-4 py-1 md:py-2 bg-blue-900 hover:bg-transparent border-2 border-blue-900 hover:border-blue-800 text-white font-medium rounded md:rounded-md">This month winners</button>
                        <button className="w-auto h-auto px-2 md:px-4 py-1 md:py-2 bg-transparent hover:bg-red-900 border-2 border-red-800 hover:border-red-900 text-white font-medium rounded md:rounded-md">close</button>
                    </div>
                </div>
                <img src="/clip-education.png" alt="clip-education" className="w-[125px] h-[125px] md:w-[250px] md:h-[250px] object-cover" />
            </div>

            <hr className="block md:hidden my-3" />

            <h3 className="text-3xl text-white font-bold font-nunito flex justify-between items-center">Top <span className="hover:text-blue-950"><FaArrowCircleRight /></span></h3>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly mt-6 gap-x-3">
                <div className="w-full h-auto px-5 md:px-10 py-2 flex gap-2">
                    <img src="/bookcv2.jpg" alt="Book Cover" className="w-[100px] h-[150px] object-cover" />
                    <div className="pt-3">
                        <p className="text-2xl py-2 font-medium text-white font-mukta">Book</p>
                        <p className="text-md text-gray-400 font-josefins">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <div className="flex gap-x-2 mt-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStarHalf className="text-yellow-400" />
                            <span className="text-gray-300 -mt-1 pl-3">(4.5)</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto px-5 md:px-10 py-2 flex gap-2">
                    <img src="/bookcv2.jpg" alt="Book Cover" className="w-[100px] h-[150px] object-cover" />
                    <div className="pt-3">
                        <p className="text-2xl py-2 font-medium text-white font-mukta">Book</p>
                        <p className="text-md text-gray-400 font-josefins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex gap-x-2 mt-2">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStarHalf className="text-yellow-400" />
                            <span className="text-gray-300 -mt-1 pl-3">(4.7)</span>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-3xl text-white font-bold font-nunito flex justify-between items-center mt-7">Top <span className="hover:text-blue-950"><FaArrowCircleRight /></span></h3>

            <div className="mt-7">
                {authors.map(i => <AuthorListItem {...i} /> )}
            </div>

        </div>
    )
}
