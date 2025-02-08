import React from 'react'

export default function ServicesDetailsPage({params}) {
    const id = params.id;
  return (
    <div>
      <h1 className="text-4xl">Services-Details-Page</h1>
      <p>This is the id no: {id} </p>
      <p>ID: {id} </p>
    </div>
  )
}
