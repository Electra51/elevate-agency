// components/sections/BlogSection.tsx
import Image from "next/image";

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
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/branding.jpg",
    alt: "Colourful circles branding concept",
  },
  {
    tag: "TikTok",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/tiktok.jpg",
    alt: "Abstract purple 3D shape",
  },
  {
    tag: "Logo Design",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/logo.jpg",
    alt: "Orange sneaker shoe",
  },
  {
    tag: "FB",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/fb.jpg",
    alt: "Dark cone tower abstract",
  },
  {
    tag: "AI",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/ai.jpg",
    alt: "Purple abstract 3D art",
  },
  {
    tag: "NFT",
    title: "What is the branding, and what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and...",
    image: "/images/blog/nft.jpg",
    alt: "Golden figures NFT art",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-200 hover:-translate-y-[2px] hover:shadow-xl cursor-pointer">
      {/* Image */}
      <div className="relative min-h-[190px] w-full sm:w-[42%] flex-shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 22vw"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-center p-5">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple">
          {post.tag}
        </span>
        <h3 className="font-syne mb-2.5 text-[15.5px] font-bold leading-[1.35] text-brand-dark">
          {post.title}
        </h3>
        <p className="text-[13px] leading-[1.65] text-neutral-500">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-stripe-section w-full border-t border-black/[0.07] py-16 md:py-20 px-5 sm:px-10 lg:px-[6%]">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-2.5 text-[11px] uppercase tracking-[0.15em] text-neutral-400">
          Blogs
        </p>
        <h2 className="font-syne text-[clamp(26px,5vw,50px)] font-extrabold tracking-tight text-brand-dark leading-tight mb-2">
          News &amp;{" "}
          <span className="font-script font-normal text-brand-purple">
            Articles
          </span>
        </h2>
        <p className="text-[14px] text-neutral-400">
          Best Articles to get started
        </p>
      </div>

      {/* Grid — 1 col mobile → 2 col sm+ */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
        {posts.map((post) => (
          <BlogCard key={post.tag} post={post} />
        ))}
      </div>
    </section>
  );
}
