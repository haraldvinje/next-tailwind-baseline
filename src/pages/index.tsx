import React from 'react'
import Metatags from 'components/Metatags'
import Counter from 'components/Counter'

export default function Home() {
  return (
    <>
      <Metatags title="Next Baseline" />
      <div className="flex flex-col items-center">
        <p data-cy="welcome" className="text-4xl">
          Welcome
        </p>
        <Counter initialCount={42} />
      </div>
    </>
  )
}
