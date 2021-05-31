import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = ({cb}) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setAge(Number(e.target.value))}}
          value={age}
        ></input>
      </div>
      <button onClick={() => cb('age', age)}>Next</button>
    </>
  )
}

export default AgeStep
