"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

type BlogPost = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

const posts: BlogPost[] = [
  {
    tag: "Branding",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/branding.png",
    alt: "Branding concept",
  },
  {
    tag: "TikTok",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/tiktok.png",
    alt: "TikTok abstract",
  },
  {
    tag: "Logo Design",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/logo-design.png",
    alt: "Logo design",
  },
  {
    tag: "FB",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/fb.png",
    alt: "Facebook marketing",
  },
  {
    tag: "AI",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/ai.png",
    alt: "AI concept art",
  },
  {
    tag: "NFT",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
    image: "/images/ourstory/nft.png",
    alt: "NFT art",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#6150FD]/37 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer">
      {/* Image */}
      <div className="relative min-h-56.5 w-full sm:w-[42%] rounded-2xl shrink-0 overflow-hidden bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.alt}
          className="absolute inset-0 w-full h-full rounded-2xl  object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-center p-5">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
          {post.tag}
        </span>
        <h3 className="mb-2.5 text-[16px] font-bold leading-snug text-[#212121]">
          {post.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-neutral-500">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingSplit = new SplitType(".blog-heading", {
        types: "lines,words",
      });
      const subSplit = new SplitType(".blog-sub", { types: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".blog-kicker", {
        y: 16,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          headingSplit.lines,
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.09,
            duration: 0.72,
          },
          "-=0.15",
        )
        .from(
          subSplit.lines,
          {
            y: 18,
            opacity: 0,
            duration: 0.55,
            stagger: 0.06,
          },
          "-=0.22",
        );

      const cards = gsap.utils.toArray<HTMLElement>(".blog-card-wrap");
      const isDesktop = window.matchMedia("(min-width: 640px)").matches;
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      cards.forEach((card, i) => {
        const image = card.querySelector("img");
        const bodyItems = card.querySelectorAll("span, h3, p");

        const fromLeft = i % 2 === 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        // 🔥 CARD SLIDE (main)
        tl.from(card, {
          x: fromLeft ? -120 : 120, // 👈 strong left/right
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
        });

        // 🔥 IMAGE ZOOM-IN
        if (image) {
          tl.from(
            image,
            {
              scale: 1.2,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.5",
          );
        }

        // 🔥 TEXT POP
        if (bodyItems.length) {
          tl.from(
            bodyItems,
            {
              y: 30,
              opacity: 0,
              stagger: 0.06,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.45",
          );
        }
      });

      return () => {
        headingSplit.revert();
        subSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pb-10 md:pb-20 pt-10 md:pt-12  px-5 sm:px-10 lg:px-[6%]"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 justify-center items-center">
        {/* Left — image card from Figma */}
        <div className="ua-image relative mb-8 md:mb-16">
          <div className="text-center">
            <p className="blog-kicker mb-2.5 text-[15px] uppercase tracking-[0.15em]">
              Blogs
            </p>
            <h2 className="blog-heading text-[clamp(26px,5vw,48px)] font-bold tracking-tight text-[#212121] leading-tight mb-2">
              News &amp;{" "}
              <span className="font-signature font-normal text-primary text-[clamp(36px,6vw,90px)] leading-[0.7]">
                Articles
              </span>
            </h2>
            <p className="blog-sub text-[16px] text-[#212121]">
              Best Articles to get started
            </p>
          </div>
        </div>

        {/* Right — text content */}
        <div>
          <div className="blog-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {posts.map((post) => (
              <div key={post.tag}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
