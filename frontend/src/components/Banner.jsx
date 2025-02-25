import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Header from "../components/header/Header";
import BannerArticle from "../components/BannerArticle";
import blogPosts from "../utils/blogPosts";

// Filter only featured posts
const featuredPosts = blogPosts.filter((post) => post.featured);

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })] // Slower autoplay
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Arrow click handlers using useCallback to avoid unnecessary re-renders
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`embla__slide relative min-w-full transition-opacity duration-[2500ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-screen object-cover transition-opacity duration-[2500ms] ease-in-out"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-white">
                <BannerArticle post={post} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-main-red smooth-hover rounded-full p-4 shadow"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-main-red smooth-hover rounded-full p-4 shadow"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      <div className="absolute top-0 w-full">
        <Header />
      </div>
    </div>
  );
}

export default Banner;
