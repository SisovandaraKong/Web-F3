import React from 'react'
import JobList from '../components/cards/JobList'
import ScrollIndicator from '../components/scrollIndicator/scrollIndicator'
export default function BusinessOwnerPage() {
  return (
    <>
    <ScrollIndicator/>
            <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
              Business Owner needed
            </h1>
            <JobList />
    </>
  )
}
