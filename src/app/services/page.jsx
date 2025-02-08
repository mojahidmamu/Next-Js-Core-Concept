import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: 1,
      image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg",
      name: "Football",
      description:
        "High-quality leather football designed for professional matches.",
    },
    {
      _id: 2,
      image:
        "https://images.pexels.com/photos/163403/basketball-sport-game-ball-163403.jpeg",
      name: "Basketball",
      description: "Durable outdoor and indoor basketball with superior grip.",
    },
    {
      _id: 3,
      image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
      name: "Tennis Racket",
      description:
        "Lightweight and powerful racket for competitive tennis players.",
    },
    {
      _id: 4,
      image:
        "https://images.pexels.com/photos/5966275/pexels-photo-5966275.jpeg",
      name: "Boxing Gloves",
      description:
        "Premium boxing gloves for training and professional fights.",
    },
    {
      _id: 5,
      image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
      name: "Running Shoes",
      description: "Comfortable and lightweight running shoes for athletes.",
    },
    {
      "_id": 6,
      "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "name": "Badminton Racket",
      "description": "High-performance badminton racket with strong string tension."
    },
    {
      "_id": 7,
      "image": "https://images.pexels.com/photos/1432031/pexels-photo-1432031.jpeg",
      "name": "Cycling Helmet",
      "description": "Protective and aerodynamic helmet for professional cyclists."
    },
    {
      "_id": 8,
      "image": "https://images.pexels.com/photos/669008/pexels-photo-669008.jpeg",
      "name": "Skateboard",
      "description": "Durable and stylish skateboard for tricks and street skating."
    },
    {
      "_id": 9,
      "image": "https://images.pexels.com/photos/1661154/pexels-photo-1661154.jpeg",
      "name": "Golf Club",
      "description": "Precision-engineered golf club for improving your swing."
    },
    {
      "_id": 10,
      "image": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      "name": "Table Tennis Bat",
      "description": "High-speed table tennis bat for professional tournaments."
    }
  ];

  return (
    <div>
      <p className="text-4xl">Services-Page</p>
      {data.map((d) => {
        return (
          <div className="space-y-4">
            <Link href={`/services/${d._id}`}>
              {/* <img src={d.image} alt="" /> */}
              <h1>{d._id}. {d.name} </h1>
              {/* <p>Description:--------{d.description} </p> */}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
