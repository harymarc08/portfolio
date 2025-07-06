"use client"

import { Swiper,SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper/modules';
import{Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from 'react-icons/im'

const testimonial = [
    {
        message: "Everything is possible for those who dream, dare, work, and never give up.",
        name: "Xavier Dolan",

    },
    {
        message: " Those who do nothing never make mistakes.",
        name: "Théodore de Banville",

    },
    {
        message: "I never lose. I either win or learn.",
        name: "Nelson Mandela",

    },
    {
        message: " The best path is always the most direct one.",
        name: "Robert Frost",

    },



];


const Testimonial = () => {
    return (
        <Swiper   loop={false} autoplay={{ delay: 4000, disableOnInteraction: false }}  modules={[Pagination]}
                  pagination={{clickable: true, dynamicBullets: true }} 
            className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg">
            {testimonial.map((person, index) => {
                return (
                <SwiperSlide key={index}>
                <div className="flex px-8 py-6 gap-8">
                    <ImQuotesLeft className="hidden xl:flex text-8xl text-accent"/>
                    <div className="flex flex-col gap-2">
                        <p>{person.message}</p>
                        <p className="self-end text-accent font-semibold">{person.name}</p>

                    </div>
                </div>
                    

                    </SwiperSlide>
                    );
                
            })}

        </Swiper>
    )
}

export default Testimonial  
