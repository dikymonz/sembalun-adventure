<div className='bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 shadow-lg relative'>
            
            <img src={selectedPackage.image1} alt={selectedPackage.title} className='w-full h-auto mb-4' />
            <h2 className='text-2xl font-bold'></h2>
            <p className='text-gray-600'>{selectedPackage.description}</p>
            <p className='text-gray-800 font-semibold mt-2'>{selectedPackage.price}</p>
          </div>



{selectedPackage && (
  <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
    <div className='relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full'>
      {/* Tombol Close */}
      <button
        onClick={() => setSelectedPackage(null)}
        className='absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-full w-8 h-8 flex items-center justify-center'
      >
        ✕
      </button>

      {/* Konten Modal */}
      <section id='detail'>
        <div className='gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2'>
          <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>{selectedPackage.title}</h2>
            <p>2D/3N</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, explicabo.</p>

            <div className='mt-2'>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Includes:</h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Transport
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Hotel
                </li>
              </ul>

              {/* Tabel Harga */}
              <div className='mt-5'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                      Package Price List
                      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">For orders of more than 6 people, please contact us directly on WhatsApp.</p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th className="px-6 py-3">1 Person</th>
                        <th className="px-6 py-3">2 Persons</th>
                        <th className="px-6 py-3">3-4 Persons</th>
                        <th className="px-6 py-3">5-6 Persons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">Rp. 890.000</td>
                        <td className="px-6 py-4">Rp. 470.000</td>
                        <td className="px-6 py-4">Rp. 350.000</td>
                        <td className="px-6 py-4">Rp. 300.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button type="button" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Booking Now
                </button>
              </div>
            </div>
          </div>

          {/* Gambar */}
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <img className='w-full rounded-lg' src={selectedPackage.image1} alt="content1" />
            <img className='mt-4 w-full lg:mt-10 rounded-lg' src={selectedPackage.image2} alt="content2" />
          </div>
        </div>
      </section>
    </div>
  </div>
)}
