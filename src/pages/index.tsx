import React from 'react'
import Metatags from 'components/Metatags'
import Counter from 'components/Counter'

export default function Home() {
  return (
    <>
      <Metatags title="Next Baseline" />
      <main className="mb-4 text-4xl">Hello World</main>
      <Counter initialCount={42} />
    </>
  )
}
