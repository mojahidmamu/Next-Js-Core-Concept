import React from 'react'

export default async function AboutSlugsPage({params}) {
    const p = await params;
    console.log(p)
  return (
    <div>
      <h1>About Slugs Page</h1>
    </div>
  )
}
