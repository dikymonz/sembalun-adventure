import React from "react";
import { assets } from "../assets/assets";

const DetailPackages = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Rinjani Trekking
            </h2>
            <p>2D/3N</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              explicabo.
            </p>
            <div className="mt-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Includes:
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Transport
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Hotel
                </li>
              </ul>

              {/* table prices */}

              <div className="Tabel mt-5">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                      package price list
                      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        For orders of more than 6 people, please contact us
                        directly on WhatsApp.
                      </p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          1 Person
                        </th>
                        <th scope="col" class="px-6 py-3">
                          2 Person
                        </th>
                        <th scope="col" class="px-6 py-3">
                          3-4 Person
                        </th>
                        <th scope="col" class="px-6 py-3">
                          5-6 Person
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td scope="row" class="px-6 py-4">
                          Rp. 890.000
                        </td>
                        <td class="px-6 py-4">Rp. 470.000</td>
                        <td class="px-6 py-4">Rp. 350.000</td>
                        <td class="px-6 py-4">Rp. 300.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  type="button"
                  className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Booking Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={assets.image1}
              alt="content1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={assets.image2}
              alt="content2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPackages;
