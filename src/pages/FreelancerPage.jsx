import React from 'react'
import JobList from '../components/cards/JobList'
import ScrollIndicator from '../components/scrollIndicator/scrollIndicator'

export default function FreelancerPage() {
  return (
    <>
    <ScrollIndicator/>
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
        Freelancer Job
      </h1>
      <JobList />
    </>
  )
}
