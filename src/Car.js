import { useState } from "react";
import ac from './air-conditioner.png';
import seat from './car-seat.png';
import bag from './travel-luggage.png';

const carData = [
    {
        id: "innovacrysta",
        label: "Innova Crysta",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
        description: "Innova Crysta is the best car for highway drives. The captain's seats are very comfortable and even the last row feels much more comfortable and gives a good vibe.",
        features: { seats: "8 Seats", bags: "3 Bags" }
    },
    {
        id: "amaze",
        label: "Amaze",
        imgSrc: "https://cdni.autocarindia.com/ExtraImages/20180516014441_Honda-amaze-price-variants-.jpg",
        description: "Honda Amaze stands out as an excellent choice for long drives, attributing to its combination of comfort, safety features, and driver-friendly technologies. This entry-level sedan is designed with elements that cater specifically to the needs of drivers and passengers embarking on extended journeys.",
        features: { seats: "5 Seats", bags: "2 Bags" }
    },
    {
        id: "tavera",
        label: "Tavera",
        imgSrc: "https://parkplus-bkt-img.parkplus.io/production/chariot_staging/public/greysandriftgreysandriftgreyjpgjpgimage_20230914155211510476.jpg",
        description: "Look and Style simple and best. Comfort is very comfortable in both city and highways. Pickup is massive. A very good car for rough use and long trip purposes in that budget. Tavera easily achieves 110 kmph and can reach a top speed of around 140 kmph.",
        features: { seats: "10 Seats", bags: "5 Bags" }
    },
    {
        id: "Innova",
        label: "Innova",
        imgSrc: "https://gomechprod.blob.core.windows.net/gm-retail-app/New%20Car%20Model%20Images/brand-15-model-489.png",
        description: "The Innova is a high-performance car with excellent seating comfort and impressive mileage. The AC is powerful, and the servicing costs are minimal, making it a top choice.",
        features: { seats: "5 Seats", bags: "3 Bags" }
    },
    {
        id: "etios",
        label: "Etios",
        imgSrc: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1702446523.jpg?width=420&q=60?w=1080&q=60",
        description: "The car is very good and comfortable. Its design and performance are top-notch. One of the best cars in the segment, with the smoothest drive experience.",
        features: { seats: "5 Seats", bags: "2 Bags" }
    },
    {
        id: "swift",
        label: "Swift",
        imgSrc: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-right-front-three-quarter.jpeg?isig=0&q=80",
        description: "The car offers impressive mileage, with comfortable and soft seats. The gear shifting is notably smooth, and the interior and multimedia system are well-designed. Overall, the Swift proves to be an excellent choice.",
        features: { seats: "5 Seats", bags: "3 Bags" }
    },
    {
        id: "breeza",
        label: "Breeza",
        imgSrc: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        description: "The performance at high speed is far better than what you expect. India's most successful SUV. Dual airbags, spacious to seat inside, and very comfortable for long drives.",
        features: { seats: "6 Seats", bags: "5 Bags" }
    },
    {
        id: "17seater",
        label: "17 Seater Traveller",
        imgSrc: "https://ontimecars.in/wp-content/uploads/2019/02/Tempo_Traveller_OnTime_Cars.jpg",
        description: "Comfortable seating for a large group. Spacious interior with enough legroom for passengers to move around comfortably. Air conditioning and heating system to ensure a comfortable temperature. Ample space for luggage and other belongings.",
        features: { seats: "17 Seats", bags: "20+ Bags" }
    },
    {
        id: "32seater",
        label: "32 Seater Bus AC & Non-A/C",
        imgSrc: "https://www.91trucks.com/_next/image?url=https%3A%2F%2Fimages.91trucks.com%2Fbuses%2Fmodels%2F71%2F1520%2Fforce-traveller-4020-326864272.jpg%3Fw%3D350%26h%3D180%3Fh%3D180&w=640&q=75",
        description: "Air Conditioners, comfortable seating, and spacious interior with enough legroom for passengers to move around comfortably. Ample space for luggage and other belongings.",
        features: { seats: "32 Seats", bags: "30+ Bags" }
    }
];

const Cars = () => {
    const [tabActive, setTabActive] = useState("innovacrysta");

    const handleTabChange = (tab) => {
        setTabActive(tab);
    };

    return (
        <div id="car-container" className="mt-[87px] w-11/12 mx-auto">
            <video
                src="https://videos.pexels.com/video-files/2053855/2053855-uhd_3840_2160_30fps.mp4"
                autoPlay
                controls
                loop
                muted
                className="w-screen h-auto rounded-[4rem] my-5"
            ></video>
            <center><h1 className="h1">Explore The Types Of Cab We Offer</h1></center>
            <div className="flex flex-col" id="cars">
                <div id="carhead" className="flex items-center justify-center sm:flex flex-wrap">
                    {carData.map(car => (
                        <button
                            key={car.id}
                            onClick={() => handleTabChange(car.id)}
                            className={`font-bold text-xl ${tabActive === car.id ? " text-white" : ""}`}
                        >
                            {car.label}
                        </button>
                    ))}
                </div>
                {carData.map(car => (
                    tabActive === car.id && (
                        <div key={car.id} className="carbox">
                            <div>
                                <img className="cartab" src={car.imgSrc} alt={car.label} />
                            </div>
                            <div className="info">
                                <h1>{car.label}</h1>
                                <p>{car.description}</p>
                                <div className="features">
                                    <img src={ac} alt="AC" /> <span>AC</span>
                                    <img src={seat} alt="Seats" /> <span>{car.features.seats}</span>
                                    <img src={bag} alt="Bags" /> <span>{car.features.bags}</span>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default Cars;
