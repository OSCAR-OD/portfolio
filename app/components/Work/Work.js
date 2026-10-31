"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { projects } from "../../data/projects";
import "./Work.css";

const Work = () => {
  const trackRef = useRef(null);
  const [loadingProjectSlug, setLoadingProjectSlug] = useState(null);
  const motionRef = useRef({ offset: 0, direction: 1, remaining: 0 });
  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    lastX: 0,
    moved: false,
    suppressClick: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frameId;
    let previousTime = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = (time) => {
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const loopWidth = (track.scrollWidth + gap) / 2;
      const deltaTime = previousTime ? Math.min(time - previousTime, 32) : 16;
      previousTime = time;

      if (loopWidth > 0 && dragRef.current.pointerId === null) {
        const motion = motionRef.current;
        const isNudging = motion.remaining > 0;
        const speed = isNudging ? 0.42 : reducedMotion ? 0 : 0.035;
        const direction = isNudging ? motion.direction : 1;
        const distance = speed * deltaTime;

        motion.offset = (motion.offset + direction * distance + loopWidth) % loopWidth;
        if (isNudging) {
          motion.remaining = Math.max(0, motion.remaining - distance);
        }

        track.style.transform = `translate3d(${-motion.offset}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const nudge = (direction) => {
    const firstCard = trackRef.current?.querySelector(".work__card");
    if (!firstCard) return;

    const styles = window.getComputedStyle(trackRef.current);
    const gap = Number.parseFloat(styles.columnGap) || 24;
    motionRef.current.direction = direction;
    motionRef.current.remaining = firstCard.getBoundingClientRect().width + gap;
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0 || !event.isPrimary) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
      suppressClick: false,
    };
    const captureTarget = event.target.closest(".work__card") || event.currentTarget;
    captureTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (drag.pointerId !== event.pointerId || !track) return;

    const deltaX = event.clientX - drag.lastX;
    drag.lastX = event.clientX;
    drag.moved ||= Math.abs(event.clientX - drag.startX) > 5;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const loopWidth = (track.scrollWidth + gap) / 2;
    if (loopWidth <= 0) return;

    const motion = motionRef.current;
    motion.offset = ((motion.offset - deltaX) % loopWidth + loopWidth) % loopWidth;
    motion.remaining = 0;
    track.style.transform = `translate3d(${-motion.offset}px, 0, 0)`;
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    drag.suppressClick = drag.moved;
    drag.pointerId = null;
    event.currentTarget.classList.remove("is-dragging");
  };

  const handleClickCapture = (event) => {
    if (!dragRef.current.suppressClick) return;

    event.preventDefault();
    event.stopPropagation();
    dragRef.current.suppressClick = false;
  };

  const renderCard = (project, isDuplicate = false) => (
    <Link
      className="work__card"
      href={`projects/${project.slug}`}
      key={`${project.slug}-${isDuplicate ? "duplicate" : "original"}`}
      tabIndex={isDuplicate ? -1 : undefined}
      aria-hidden={isDuplicate || undefined}
      aria-busy={loadingProjectSlug === project.slug || undefined}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        setLoadingProjectSlug(project.slug);
      }}
    >
      <div className="work__card-image">
        <Image
          src={project.image}
          width={640}
          height={420}
          alt={project.alt}
          sizes="(max-width: 640px) 86vw, (max-width: 1100px) 44vw, 360px"
        />
        {loadingProjectSlug === project.slug && (
          <span className="work__card-loader" role="status" aria-label="Opening project">
            <span className="work__card-spinner" />
          </span>
        )}
      </div>
      <div className="work__card-copy">
        <div>
          <span className="work__card-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <span className="work__card-arrow" aria-hidden="true">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </div>
    </Link>
  );

  return (
    <section className="work container section" aria-labelledby="work-title">
      <div className="work__heading">
        {/* <span className="work__eyebrow">Selected work</span> */}
        <h2 className="work__title" id="work-title">Company Projects</h2>
        <p className="work__description">
          Projects that demonstrate my skills for clients.
        </p>
      </div>

      <div
        className="work__slider"
        aria-label="Client projects carousel"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}
      >
        <div className="work__track" ref={trackRef}>
          {projects.map((project) => renderCard(project))}
          {projects.map((project) => renderCard(project, true))}
        </div>
      </div>

      <div className="work__controls" aria-label="Carousel controls">
        <button
          className="work__control"
          type="button"
          aria-label="Move carousel right"
          onClick={() => nudge(-1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="work__control"
          type="button"
          aria-label="Move carousel left"
          onClick={() => nudge(1)}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Work;
