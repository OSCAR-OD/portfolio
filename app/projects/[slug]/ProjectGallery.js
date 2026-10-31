"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

const PREVIEW_COUNT = 5;

export default function ProjectGallery({ images, title, category, summary }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(null);

  const openGallery = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  useEffect(() => {
    if (images.length < 2) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 700px)");
    if (!mobileQuery.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);
    return () => window.clearInterval(intervalId);
  }, [images.length, activeIndex]);

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 40) {
      distance > 0 ? showPrevious() : showNext();
    }
    touchStartX.current = null;
  };

  const previewImages = images.slice(0, PREVIEW_COUNT);
  const extraImageCount = images.length - PREVIEW_COUNT;

  return (
    <>
      <div className="project-gallery" aria-label={`${title} image gallery`}>
        {previewImages.map((image, index) => (
          <button
            className={`project-gallery__tile project-gallery__tile--${index + 1}`}
            key={image.src}
            type="button"
            onClick={() => openGallery(index)}
            aria-label={`Open image ${index + 1}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 700px) 50vw, (max-width: 1200px) 45vw, 560px"
            />
            {index === PREVIEW_COUNT - 1 && extraImageCount > 0 && (
              <span className="project-gallery__more">+{extraImageCount}</span>
            )}
          </button>
        ))}
      </div>

      <div
        className="project-gallery__mobile-slider"
        aria-label={`${title} image gallery`}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="project-gallery__mobile-image"
          type="button"
          onClick={() => openGallery(activeIndex)}
          aria-label={`Open image ${activeIndex + 1}: ${images[activeIndex].alt}`}
        >
          <Image
            key={images[activeIndex].src}
            src={images[activeIndex].src}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </button>
        <button
          className="project-gallery-modal__arrow project-gallery-modal__arrow--previous"
          type="button"
          onClick={showPrevious}
          aria-label="Previous image"
        >
          <FiArrowLeft aria-hidden="true" />
        </button>
        <button
          className="project-gallery-modal__arrow project-gallery-modal__arrow--next"
          type="button"
          onClick={showNext}
          aria-label="Next image"
        >
          <FiArrowRight aria-hidden="true" />
        </button>
        <p className="project-gallery-modal__counter">
          {activeIndex + 1} / {images.length}
        </p>
      </div>

      {isOpen && (
        <div
          className="project-gallery-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            className="project-gallery-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image gallery`}
          >
            <button
              className="project-gallery-modal__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close gallery"
            >
              <FiX aria-hidden="true" />
            </button>

            <div className="project-gallery-modal__desktop-media">
              <div
                className="project-gallery-modal__desktop-slider"
                onTouchStart={(event) => {
                  touchStartX.current = event.touches[0].clientX;
                }}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  key={images[activeIndex].src}
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 70vw, 780px"
                />
                <button
                  className="project-gallery-modal__arrow project-gallery-modal__arrow--previous"
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                >
                  <FiArrowLeft aria-hidden="true" />
                </button>
                <button
                  className="project-gallery-modal__arrow project-gallery-modal__arrow--next"
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>

              <div className="project-gallery-modal__thumbnails" aria-label="Choose an image">
                {images.map((image, index) => (
                  <button
                    className={`project-gallery-modal__thumbnail${activeIndex === index ? " is-active" : ""}`}
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={activeIndex === index}
                  >
                    <Image src={image.src} alt="" fill sizes="88px" />
                  </button>
                ))}
              </div>
            </div>

            <div className="project-gallery-modal__mobile-slider">
              <Image
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                priority
                sizes="100vw"
              />
              <div
                className="project-gallery-modal__swipe-area"
                onTouchStart={(event) => {
                  touchStartX.current = event.touches[0].clientX;
                }}
                onTouchEnd={handleTouchEnd}
              />
              <button
                className="project-gallery-modal__arrow project-gallery-modal__arrow--previous"
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                <FiArrowLeft aria-hidden="true" />
              </button>
              <button
                className="project-gallery-modal__arrow project-gallery-modal__arrow--next"
                type="button"
                onClick={showNext}
                aria-label="Next image"
              >
                <FiArrowRight aria-hidden="true" />
              </button>
              <p className="project-gallery-modal__counter">
                {activeIndex + 1} / {images.length}
              </p>
            </div>

            <aside className="project-gallery-modal__info">
              <p className="project-page__eyebrow">{category}</p>
              <h2>{title}</h2>
              <p>{summary}</p>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            </aside>
          </section>
        </div>
      )}
    </>
  );
}