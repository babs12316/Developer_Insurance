import React, { useState } from 'react'
import AgeStep from '../../components/ageStep/AgeStep'
import EmailStep from '../../components/emailStep/EmailStep'
import SummaryStep from '../../components/summaryStep/SummaryStep'
import NameStep from '../../components/nameStep/NameStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  // eslint-disable-next-line no-unused-vars
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = ({productId}) => {
  const [currentStep, setStep] = useState('name')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name:{
      firstName:'',
      lastName:''
    }
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  const gotoCurrentStep=(currentStep:string)=> {
    switch (currentStep) {
      case 'name':
        return <NameStep cb={getStepCallback('email')} />
      case 'email':
        return <EmailStep cb={getStepCallback('age')} />
      case 'age':
        return <AgeStep cb={getStepCallback('summary')} />
      case 'summary':
        return <SummaryStep collectedData={collectedData} />
      default:
        return null
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
       {gotoCurrentStep(currentStep)}
    </>
  )
}

export default Buyflow
