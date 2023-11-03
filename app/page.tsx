import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="grid min-h-screen gap-10 bg-slate-400 px-20 py-20 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
        <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl dark:bg-black">
          <span className="text-2xl font-semibold dark:text-white">
            Select Item
          </span>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="my-2 flex justify-between first:bg-teal-50 last:bg-amber-50 odd:bg-blue-50 even:bg-yellow-50"
              >
                <span className="text-gray-500 dark:text-gray-100">
                  Grey Chair
                </span>
                <span className="font-semibold dark:text-white">$19</span>
              </div>
            ))}
          </ul>
          <ul>
            {['a', 'b', 'c', ''].map((c, i) => (
              <li className="bg-red-500 py-2 empty:hidden" key={i}>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
            <span>Total</span>
            <span className="font-semibold">$10</span>
          </div>
          <button
            className="mt- mx-auto
          block w-3/4 rounded-xl bg-blue-500
          p-3 text-center text-white 
          hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-500 dark:border dark:border-white dark:bg-black dark:hover:bg-white
         "
          >
            Checkout
          </button>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="p-6 pb-14 xl:pb-40 portrait:bg-indigo-600 landscape:bg-teal-500">
            <span className="text-2xl text-white">Profile</span>
          </div>
          <div className="relative -top-5 rounded-3xl bg-white p-6">
            <div className="relative -top-16 flex items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 rounded-full bg-zinc-300" />
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative  -mb-5 -mt-14 flex flex-col items-center">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">미국</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-2 xl:col-span-1">
          <div className="mb-5 flex items-center justify-between">
            <span>⬅️</span>
            <div className="space-x-3">
              <span>⭐️ 4.9</span>
              <span className="rounded-md p-2 shadow-xl">💖</span>
            </div>
          </div>
          <div className="mb-5 h-72 bg-zinc-400" />
          <div className="flex flex-col">
            <span className="text-xl font-medium">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mb-5 mt-3 flex items-center justify-between">
              <div className="space-x-2">
                <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
                <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
                <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
              </div>
              <div className="flex items-center space-x-5">
                <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-medium">$450</span>
              <button className="rounded-lg bg-blue-500 px-8 py-2 text-center text-xs text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-2  p-5 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded-md border border-gray-400 p-1 "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
      <div className="flex flex-col space-y-2  p-5 ">
        <details className=" open:bg-orange-300">
          <summary className=" cursor-pointer select-none">
            what is my favorite
          </summary>
          <div className=" selection:bg-indigo-600 selection:text-white">
            food
          </div>
        </details>
        <ul className=" list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        <input
          type="file"
          className="file:rounded-md file:border-0 file:bg-green-600 file:p-3"
        />
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
          Hello everyone!
        </p>
      </div>
    </>
  );
}
