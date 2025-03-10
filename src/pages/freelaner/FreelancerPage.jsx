import React from 'react'

import ScrollIndicator from '../../components/scrollIndicator/scrollIndicator'
import CardJob from '../../components/cards/CardJob'

export default function FreelancerPage() {
  return (
    <>
    <ScrollIndicator/>
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
        Freelancer Job
      </h1>
      <CardJob />
    </>
  )
}
