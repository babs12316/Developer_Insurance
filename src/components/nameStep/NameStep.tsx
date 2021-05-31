import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value:object) => void
}

const NameStep: React.FC<NameStepProps> = ({cb}) => {
  const [name, setName] = useState({
      firstName:'',
      lastName:''
  })
  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="string"
          aria-label="firstName-input"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName({...name,firstName:e.target.value})}}
          value={name.firstName}
          required
        ></input>
      </div>
      <div>
        Last Name:{' '}
        <input
         aria-label="lastName-input"
          type="string"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName({...name,lastName:e.target.value})}}
          value={name.lastName}
          required
        ></input>
      </div>
      <button disabled={name.firstName && name.lastName ? false: true} onClick={() => cb('name', name)}>Next</button>
    </>
  )
}

export default NameStep
