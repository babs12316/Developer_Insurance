import React from 'react'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name: {
      firstName: string
      lastName: string
    }
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <>
      <div>FirstName: {collectedData.name.firstName}</div>
      <div>LastName: {collectedData.name.lastName}</div>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <a href="/purchased=dev_ins">Purchase</a>
      </div>
    </>
  )
}

export default SummaryStep
