import React from 'react'
import JobList from '../components/cards/JobList'

export default function FullTimePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
        Full Time Job
      </h1>
      <JobList />
    </>
  )
}
