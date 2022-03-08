import React, { useState } from 'react';
import { useEffect } from 'react';
import HomeBiCycle from './HomeBiCycle/HomeBiCycle';

/* 
const data = [
    {
        name: "3T Bikes",
        brandName: "3T bikes",
        price: 100,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/bP6J2hC/1.jpg",
        description: "The 3T Explore was the brands first gravel bike released in 2016 when the gravel industry started to hit off. Today, their range consists of high-end road and gravel bikes. 3T bikes is also a well-known sponsor in the cycling scene.",
    },
    {
        name: "Alchemy Bicycles",
        brandName: "Alchemy",
        price: 130,
        speed: 9.5,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/4PDcgPG/2.jpg",
        description: "It was their main mission when they started in 2008 and is still their main motivation today. The Denver based American brand pride themselves on building quality carbon and titanium framed bikes, and have won awards for their workmanship.",
    },
    {
        name: "All-City Cycles",
        brandName: "Gravel",
        price: 200,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/3751xb1/3.jpg",
        description: "All-City Cycles specializes in on-road riding only, hence the reason you’ll find a fine selection of Road, Gravel, Cyclocross, and Hybrid bikes. Something that sets them apart from other brands is the fact that most of the bikes’ frames are generally made of steel, and the components are of mid/higher-end range.",
    },
    {
        name: "Bianchi Bicycles",
        brandName: "Bianchi",
        price: 140,
        speed: 11,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/7j0rGyQ/4.jpg",
        description: "1885, Italy – One of the oldest surviving bike brands in the world, Italian brand Bianchi is recognized by their turquoise-blue paint named ‘Celeste #227’. Bianchi road bikes have a racing pedigree, with multiple Grand Tour wins under their belts including the most recent edition of La Vuelta.",
    },
    {
        name: "Brompton Bikes",
        brandName: "Brompton",
        price: 190,
        speed: 8.5,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/GM2r1dR/5.png",
        description: "Brompton is one of the most iconic folding bicycle manufacturer. Their range consists of well-engineer folding, and electric folding bikes with rich history and attention to detail.",
    },
    {
        name: "Cannondale Bikes",
        brandName: "Cannondale",
        price: 160,
        speed: 9.5,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/BywKw3t/6.jpg",
        description: "Cannondale is one of the most popular bicycle brands in the world. A relatively young brand, it was founded in 1971 in Connecticut, USA. One of the first brands to embrace carbon fiber in bike production, Cannondale is a firm rider favorite and has made itself known in the professional peloton.",
    },
    {
        name: "Canyon Bicycles",
        brandName: "Canyon USA",
        price: 189,
        speed: 10.5,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/0sSGnkB/7.jpg",
        description: "Canyon has taken a different approach regards building and marketing – their focus is to build bikes that last a long time, and hold a great second-hand value.  Although Canyon is German-based bike brand, Canyon USA was launched in 2017.",
    },
    {
        name: "Colnago Bikes",
        brandName: "Colnago",
        price: 175,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/8MbNkdS/8.jpg",
        description: "Colnago is an Italian brand with a long tradition, established in 1952. They are known for their pioneering manufacturing, such as being one of the first brands to produce carbon fiber road bikes. Their bikes have helped many a racer to victory, going as far back as Eddy Merckx and most recently being the bike that won the Tour de France in 2020",
    },
    {
        name: "Co-op Cycles",
        brandName: "REI Co-op",
        price: 210,
        speed: 7.9,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/hKdWwv1/9.jpg",
        description: "They are focused on making affordable entry-level and mid-range bikes. Co-op Cycles make bikes for the whole family including road, mountain, city, electric, adventure touring, and kids bikes. Their affordability and no-nonsense branding make them a cult favorite.",
    },
    {
        name: "Critical / Retrospec Cycles",
        brandName: "Fixie",
        price: 159,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/0ZvYRK3/10.png",
        description: "Critical / Retrospec Cycles produce a wide range of bikes including; single-speed, fixie, city, beach cruisers, hybrid, folding, and kids bikes at accessible prices to encourage everyone to go outdoors. Riders love them because they are fast, easy to maintain, and look good.",
    },
    {
        name: "Cube Bikes",
        brandName: "Mountain",
        price: 169,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/nmtQc42/11.png",
        description: "Cube is most famous for producing top-notch mountain bikes, but they put a lot of love and skill into manufacturing trekking, hybrid, and cross bikes, road bikes, as well as triathlon bikes.",
    },
    {
        name: "Devinci Cycles",
        brandName: "Mountain",
        price: 149,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/LvXC82y/12.jpg",
        description: "From road to carbon and dual-suspension line-ups, Devinci is a top name in the game. The Canadian brand stands tall by being one of the leaders in global frame manufacturing. Today, Devinci’s main line-up consists of high-end road, gravel, and mountain bikes.",
    },
    {
        name: "Diamondback Bikes",
        brandName: "Diamondback",
        price: 198,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/MhCvzHM/13.png",
        description: "Washington-based bike brand Diamondback is among the best-known brands in the USA. Starting as a BMX bike manufacturer. Their online selling strategy allows them to bypass retailers and offer high-quality bikes at a cheaper price tag compared to the competition.",
    },
    {
        name: "Electra Bikes",
        brandName: "Electra",
        price: 110,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/2drh0GC/14.png",
        description: "Perhaps most famous for their revival of the beach cruiser bicycle, Electra is one of the most visible bike brands in the US. Most recently they were bought out by Trek and Bontrager, an acquisition that has allowed Electra to focus on improving their line-up with special edition bikes and artist design collaborations.",
    },
    {
        name: "Evil Bikes",
        brandName: "Mountain",
        price: 169,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/wMJxzFW/15.jpg",
        description: "Evil bikes is a no-nonsense brand born out of the late 2000s mountain bike scene. They’re proudly rider owned which means they make bikes that their staff want to ride, and they use their sponsored riders for research and development, to make innovative machines for the trails.",
    },
    {
        name: "Felt Bikes",
        brandName: "Felt",
        price: 175,
        speed: 9,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/wy2RHcc/16.jpg",
        description: "Felt is another young brand on this list, as they were founded in 1994. Innovative and free-spirited, they embody the California essence in their road and mountain bikes. They also produce successful triathlon and time trial bikes.",
    },
    {
        name: "Firmstrong Bikes",
        brandName: "Firmstrong",
        price: 140,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/xq7Yhm9/17.jpg",
        description: "Another Californian bike brand on the list is Firmstrong. Founded ten years ago, their mission is to get as many people on bikes as possible, while keeping bikes simple and accessible. They specialize in producing beach cruisers, hybrid, commuter, and comfort bikes as well as children’s bikes.",
    },
    {
        name: 'Fuji Bikes',
        brandName: "Fuji",
        price: 110,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/NLXVCQh/18.png",
        description: "The name comes from the famous Mt. Fuji, so it makes send they produce high-end mountain bikes that can conquer mountain such as this. Fuji produces XC, trail, electric, and fat bikes, but are well known for their road bikes as well.",
    },
    {
        name: "Ghost Cycles",
        brandName: "Ghost Bikes",
        price: 180,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/JvMyKFh/19.png",
        description: 'The brand Ghost Bikes is no longer a ghost in the cycling world. This German-based bicycle company has been massively popular in Europe for several decades but has only recently started conquering the rest of the world, including the USA.',
    },
    {
        name: "Giant Bikes",
        brandName: "Giant Bikes USA",
        price: 135,
        speed: 9,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/0ZV5X74/20.jpg",
        description: "No matter if you’re a cycling freak or an average Joe, you will have heard of Giant Bikes. They are the largest bike manufacturer in the world, based in Taiwan. Giant produces bikes of all types and prices, so you can buy a Giant bicycle for as little as $300, or as much as $10,000.",
    },
    {
        name: "GT Bikes",
        brandName: "Mountain GT",
        price: 180,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/7WTvrJh/21.jpg",
        description: "GT Bikes is a bike brand steeped in history, having been around for almost 50 years producing quality two-wheelers. In its early beginnings, GT Bikes started as a BMX manufacturer, and only later started focusing on other types of bikes as well.",
    },
    {
        name: "Ibis Bikes",
        brandName: "Ibis Bikes",
        price: 170,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/7ShTFx3/22.jpg",
        description: "Ibis is famous for its carbon frames and the “Moron” tubing. It’s a clever wordplay meaning “more on the ends,” since their frames are heavier on the ends than in the middle. Ibis is popular for sponsoring an Enduro World Series Team, which has had a lot of success. Their flagship models are Ripmo, Mojo, and Ripley.",
    },
    {
        name: 'Intense Cycles',
        brandName: "Mountain",
        price: 160,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/XphKbkT/23.png",
        description: "Grown out from making Downhill racing bikes, their bikes’ setup-up and overall geometry are focused on the ‘perfection driven’ type cyclist who wants to trust their money on well-established brand perfections. Their bikes are expensive but available for the ones who are missing a proper Intense bike in their arsenal.",
    },
    {
        name: 'Jamis Bikes',
        brandName: "Jamis Bikes",
        price: 120,
        speed: 9,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/SwnFLHF/24.png",
        description: "Jamis Bikes is a US-based bicycle brand that has been producing first-grade bicycles for more than 80 years. Jamis Bikes focuses on making bikes suited to all budgets hence the reason they have won several awards for the best “value for money” bikes.",
    },
    {
        name: "Juliana Bicycles",
        brandName: "Juliana",
        price: 170,
        speed: 8,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/7kXYsGR/25.png",
        description: "Juliana makes women-specific mountain bikes at mid-range to high-end price tags. The name has earned its name in the mountain biking scene, and there’s likely no such specialized MTB bike brand out there quite like the Juliana Bicycles!",
    },
    {
        name: "Kestrel Bikes",
        brandName: "Kestrel Bikes",
        price: 160,
        speed: 10,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/9pGbxsL/26.png",
        description: "Kestrel Bikes is an all-American bicycle brand that strives to produce high-end road racing and triathlon bikes. They formed in 1986 with the mission to create the lightest ever production road bike.",
    },
    {
        name: 'Niner Bikes',
        brandName: "Niner Bikes",
        price: 140,
        speed: 9,
        updatedDate: '11/19/2021, 12:35:09 AM',
        hBrack: true,
        imgURL: "https://i.ibb.co/6scrJK3/27.jpg",
        description: "Niner Bikes is the ideal bike manufacturer for adventurers and those who want to challenge their skills off the beaten track. More recently they have focused on producing 29er models and using CVA (Constant Varying Arc) suspension, which improves rider’s pedaling efficiency.",
    },
] */


const HomeBicycles = () => {
    const [bicycles, setBicycles] = useState(null)

    useEffect(() => {
        fetch('https://tranquil-atoll-77789.herokuapp.com/homeBicycles')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])


    return (
        <div className="xs:mt-8 lg:mt-28 xs:w-11/12 xl:w-10/12 mx-auto ">
            <h1 className="text-5xl font-overlock font-bold cusGrayColor">Our Bicycles</h1>
            <h3 className="text-xl mt-2">Which Bicycle is the best for you?</h3>

            <div>
                {!bicycles
                    ? <div className="flex justify-center items-center mt-24">
                        <div className="animate-spin rounded-full h-8
                      w-8 border-t-2 border-b-2 border-green-700 mr-2">
                        </div>
                        <h1 className="text-2xl font-bold cusGrayColor">Loading...</h1>
                    </div>
                    :
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        {bicycles.map(cycle => <HomeBiCycle
                            key={cycle._id}
                            cycle={cycle}
                        />)
                        }
                    </div>




                }
            </div>
        </div>
    );
};

export default HomeBicycles;