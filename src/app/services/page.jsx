import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: 1,
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      description:
        "A passionate software developer with a love for open-source projects.",
    },
    {
      _id: 2,
      image: "https://via.placeholder.com/150",
      name: "Emma Smith",
      description:
        "An experienced digital marketer specializing in social media growth.",
    },
    {
      _id: 3,
      image: "https://via.placeholder.com/150",
      name: "Michael Johnson",
      description:
        "A professional photographer capturing stunning landscapes and portraits.",
    },
    {
      _id: 4,
      image: "https://via.placeholder.com/150",
      name: "Sophia Lee",
      description:
        "A skilled graphic designer with expertise in branding and visual identity.",
    },
    {
      _id: 5,
      image: "https://via.placeholder.com/150",
      name: "David Brown",
      description:
        "A fitness coach helping people achieve their health and wellness goals.",
    },
  ];

  return (
    <div>
      <p className="text-4xl">Services-Page</p>
      {data.map((d) => {
        return (
          <div className="space-y-4">
            <Link href={`/services/${d._id}`} >
              {/* <img src={d.image} alt="" /> */}
              <h1>Click:----   {d.name} </h1>
              {/* <p>Description:--------{d.description} </p> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
