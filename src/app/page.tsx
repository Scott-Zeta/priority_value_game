import Link from 'next/link';
import { FiInfo } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex mb-6">
              <div className="flex items-center justify-center bg-blue-100 w-10 h-10 rounded-full p-3 mr-4 text-5xl">
                <FiInfo className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  The Challenge
                </h2>
                <p className="text-gray-600">
                  This activity helps you identify your top 5 personal values or
                  priorities for the next 6–12 months through a process of
                  elimination.
                </p>
              </div>
            </div>

            <ol className="space-y-10 mt-8">
              <li className="relative flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-medium flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Initial Setup
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We start with a pool of 24 value words (like Integrity,
                    Courage, Creativity, etc.).
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Integrity
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Courage
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Creativity
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                      +21 more
                    </span>
                  </div>
                </div>
              </li>

              <li className="relative flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-medium flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Decision Rounds
                  </h3>
                  <p className="text-gray-600 mb-3">
                    In each round, you&apos;ll see 3 randomly selected values.
                    Your task is to choose the one that is
                    <span className="font-semibold"> least important</span> to
                    you right now.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-center text-sm text-gray-500 mb-3">
                      Example round:
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="border border-gray-200 rounded-lg p-4 text-center bg-white hover:bg-gray-50">
                        <p className="font-medium text-gray-900">Growth</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 text-center bg-white hover:bg-gray-50">
                        <p className="font-medium text-gray-900">Security</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 text-center bg-white hover:bg-gray-50">
                        <p className="font-medium text-gray-900">Freedom</p>
                      </div>
                    </div>
                    <p className="text-center mt-3 text-sm text-gray-500">
                      Select the value that is
                      <span className="font-semibold"> least important</span> to
                      you
                    </p>
                  </div>
                </div>
              </li>

              <li className="relative flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-medium flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Elimination Process
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Each time you select a value, it&apos;s removed from the
                    pool. This continues until only 5 values remain – these are
                    your top priorities.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link
            href="/game"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start the Game
            <HiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
