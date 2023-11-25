import React, { useState } from 'react'
import SearchBar from '../subcomponents/SearchBar';
import { FaArrowCircleRight, FaStar, FaStarHalf } from 'react-icons/fa';
import AuthorListItem from '../subcomponents/AuthorListItem';
import Notice from '../subcomponents/Notice';

export default function Home() {
    let [ query, setQuery ] = useState('');

    const authors = [
        {
          img: "/author1.jpg",
          rank: 1,
          name: "J.K. Rowling",
          birth: "1965",
          dead: null,
          published: 62
        },
        {
          img: "/author2.jpg", 
          rank: 2,
          name: "Stephen King",
          birth: "1947",
          dead: null,
          published: 54
        },
        {
          img: "/author3.jpg",
          rank: 3,
          name: "Nora Roberts",
          birth: "1950",
          dead: null,
          published: 215
        },
        {
          img: "/author4.jpg",
          rank: 4,
          name: "Dean Koontz",
          birth: "1945",
          dead: null,
          published: 105
        },
        {
          img: "/author5.jpg",
          rank: 5,
          name: "Danielle Steel",
          birth: "1947",
          dead: null,
          published: 179
        },
        {
          img: "/author6.jpg",
          rank: 6,
          name: "Dr. Seuss",
          birth: "1904",
          dead: "1991",
          published: 44
        },
        {
          img: "/author7.jpg",
          rank: 7,
          name: "Enid Blyton",
          birth: "1897",
          dead: "1968",
          published: 600
        },
        {
          img: "/author8.jpg",
          rank: 8,
          name: "Jeffrey Archer",
          birth: "1940",
          dead: null,
          published: 37
        },
        {
          img: "/author9.jpg", 
          rank: 9,
          name: "Paulo Coelho",
          birth: "1947",
          dead: null,
          published: 39
        },
        {
          img: "/author10.jpg",
          rank: 10,
          name: "Barbara Cartland",
          birth: "1901",
          dead: "2000",
          published: 723
        }
    ];
      
    return (
        <div className="w-full bg-slate-600 h-auto px-3 lg:px-8 py-2 lg:py-4">
            <SearchBar query={query} setQuery={setQuery} />

            <Notice />

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
