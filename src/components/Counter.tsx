import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const buttonStyle =
    'text-white font-bold w-12 py-2 px-4 rounded transition ease-in-out'

  return (
    <>
      <p className="text-2xl">Counter</p>
      <div className="my-4 flex w-32 justify-between">
        <button
          className={`${buttonStyle} bg-green-400 hover:bg-green-500`}
          onClick={increment}
        >
          +
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className={`${buttonStyle} bg-red-500 hover:bg-red-600`}
          onClick={decrement}
        >
          -
        </button>
      </div>
      <button
        className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 transition ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </>
  )
}
