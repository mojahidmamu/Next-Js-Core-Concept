import React from "react";

export default function ServicesDetailsPage({ params }) {
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

  const id = params?.id;
  const singleData = data.find( (d) => d._id == id);
  return (
    <div>
      <h1 className="text-4xl">Services-Details-Page</h1>
      <p>This is the id no: {id} </p>
      <h1 className="text-4xl ">Name: {singleData.name} </h1>
      <p>Details: {singleData.description} </p>
      <img src={singleData.image} alt="" />
    </div>
  );
}
