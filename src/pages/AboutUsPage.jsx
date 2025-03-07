import React from 'react'

export default function AboutUsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Learn more about our mission, vision, and the team behind our success.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Our mission is to provide innovative solutions that empower businesses and individuals to achieve their goals. We strive to deliver excellence in every product and service we offer.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We envision a world where technology seamlessly integrates into everyday life, making it easier, more efficient, and more enjoyable for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">Our Team</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Team Member"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">John Doe</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    John is the visionary leader behind our company, driving innovation and growth.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Team Member"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Jane Smith</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Jane is our technical guru, ensuring our products are cutting-edge and reliable.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="Team Member"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Mike Johnson</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Head of Marketing</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Mike is the creative force behind our brand, driving our marketing strategies to new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
