import React from 'react'

const Pagination = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-center flex-wrap">
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        <li>
          <button className="px-4 py-2 text-black-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-200">
            Prev
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-black-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline focus:shadow-outline hover:bg-indigo-200">
            1
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline focus:shadow-outline hover:bg-indigo-200">
            2
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-black-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-200">
            3
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-black-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-200">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Pagination