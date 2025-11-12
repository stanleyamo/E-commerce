import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// CSS imports
import "swiper/css";
import "swiper/css/navigation"; // optional if using arrows
import "swiper/css/pagination"; // optional if using dots

const heroImages = [
    { src: "/images/hero1.jpg", alt: "African Wear Sale" },
    { src: "/images/hero2.jpg", alt: "Imported Clothes" },
    { src: "/images/hero3.jpg", alt: "Perfume Collection" },
];

export default function HeroCarousel() {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000 }}
                loop
                navigation
                pagination={{ clickable: true }}
                className="h-64 md:h-96 rounded-md"
            >
                {heroImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
