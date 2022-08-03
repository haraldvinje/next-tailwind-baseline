import { useState } from 'react'

export default function Counter({
  initialCount = 0
}: {
  initialCount?: number
}) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const buttonStyle =
    'text-white font-bold w-12 py-2 px-4 rounded transition ease-in-out'

  const resetButtonStyle =
    'rounded border border-blue-500 bg-transparent w-32 py-2 my-2 font-semibold text-blue-700 transition ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white'

  return (
    <>
      <p className="text-2xl">Counter</p>
      <div className="my-4 flex w-32 justify-between">
        <button
          aria-label="decrement"
          className={`${buttonStyle} bg-red-500 hover:bg-red-600`}
          onClick={decrement}
        >
          -
        </button>
        <span data-cy="counter" className="text-2xl">
          {count}
        </span>
        <button
          aria-label="increment"
          className={`${buttonStyle} bg-green-400 hover:bg-green-500`}
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        aria-label="initial"
        className={resetButtonStyle}
        onClick={() => setCount(initialCount)}
      >
        Reset
      </button>
      <button
        aria-label="zero"
        className={resetButtonStyle}
        onClick={() => setCount(0)}
      >
        Set to 0
      </button>
    </>
  )
}
