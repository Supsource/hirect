import React from 'react'

const Search = () => {
  return (
    <div className="absolute">
          <div className="p-5">
            <h2 className="font-bold text-2xl">Filter</h2>
            <div class="flex flex-col pt-3 pl-10 mb-4">
              <div className="">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-xl font-medium text-gray-900 text-gray-800">Full time</label>
              </div>
              <div className="">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-xl font-medium text-gray-900 text-gray-800">Part time</label>
              </div>
              <div className="">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-xl font-medium text-gray-900 text-gray-800">Interships</label>
              </div>
              <div className="">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-xl font-medium text-gray-900 text-gray-800">Freelancing</label>
              </div>
            </div>
            <h2 className="font-bold text-2xl">Locations</h2>
            <div className="flex p-2 ">
              <input type="text" class="h-10  z-0 focus:shadow focus:outline-none" placeholder="Search cities..." />
              <button class="h-10 w-20 text-white bg-blue-500 hover:bg-blue-800">Search</button>
            </div>
            <div class="flex flex-col pt-3 pl-10 mb-4">
              <div className="">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-xl font-medium text-gray-900 ">Chennai</label>
              </div>
              <div className="">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-xl font-medium text-gray-900 ">benguluru</label>
              </div>
              <div className="">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-xl font-medium text-gray-900 ">Delhi</label>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Search