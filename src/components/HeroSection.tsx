"use client";

import Link from "@docusaurus/Link";
import type React from "react";

/**
 * HeroSection - Business-focused design with navigation, asymmetrical title layout,
 * decorative card element, and hero image with button overlay.
 *
 * Design Specs:
 * - Background: #0a0a0a (Deep Void)
 * - Title: #ffffff (Pure White)
 * - Description: #F8F9FD (Light Gray)
 * - Primary CTA: #22FDFF (Electric Cyan)
 * - Navigation bar with login/signup buttons
 * - Decorative abstract card on top right
 * - Hero image with rounded corners and cyan border glow
 * - Button overlay on hero image (top left)
 */

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
  heroImage?: string;
}

export default function HeroSection({
  onNavigate,
  heroImage = "/img/robot-img.jpg",
}: HeroSectionProps): React.ReactNode {
  const handleCtaClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <section
      className="relative min-h-screen bg-[#0a0a0a] overflow-hidden"
      aria-label="Hero section"
    >
      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        {/* Top Section: Title + Decorative Card */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Title - Left Side */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
              Physical AI & Humanoid Robotics Textbook{" "}
              <div className="h-2 w-3 text-green-800"></div>
            </h1>
          </div>

          {/* Decorative Card + Description - Right Side */}
          <div className="flex-shrink-0 lg:w-80">
            {/* Decorative Abstract Card */}
            <div
              className="w-full h-8 rounded-2xl mb-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #22FDFF 0%, #FF6B35 50%, #FFA500 100%)",
              }}
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                }}
              />
            </div>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-[#F8F9FD] leading-relaxed">
              "Bridging the gap between the digital brain and the physical
              body." AI Systems in the Physical World. Embodied Intelligence.
            </p>
          </div>
        </div>

        {/* Hero Image Section with Button Overlay */}
        <div className="relative w-full">
          <div
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{
              aspectRatio: "12 / 6",
              border: "2px solid #008080",
            }}
          >
            {/* Hero Image */}
            <img
              src={heroImage || "/placeholder.svg"}
              alt="Physical AI Robot"
              className="w-full h-full object-cover"
              loading="eager"
            />

            {/* Dark overlay for better button visibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(10, 10, 10, 0.4) 0%, transparent 40%)",
              }}
              aria-hidden="true"
            />
            <Link href="/">
              <button
                className="absolute top-6 left-6 sm:top-8 sm:left-8 inline-flex items-center justify-center border-none bg-[#008080] text-lg px-4 py-2 rounded-full cursor-pointer text-white  hover:bg-[#00a0a0] transition-colors duration-300"
                aria-label="Get Started - Begin your journey"
              >
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
