import React from "react";

export default function ServicesPage() {
  const data = [
      {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "John Doe",
        description:
          "A passionate software developer with a love for open-source projects.",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Emma Smith",
        description:
          "An experienced digital marketer specializing in social media growth.",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Michael Johnson",
        description:
          "A professional photographer capturing stunning landscapes and portraits.",
      },
      {
        id: 4,
        image: "https://via.placeholder.com/150",
        name: "Sophia Lee",
        description:
          "A skilled graphic designer with expertise in branding and visual identity.",
      },
      {
        id: 5,
        image: "https://via.placeholder.com/150",
        name: "David Brown",
        description:
          "A fitness coach helping people achieve their health and wellness goals.",
      },
    ];

  return (
    <div>
      <p className="text-4xl">Services-Page</p>
    </div>
  );
}
