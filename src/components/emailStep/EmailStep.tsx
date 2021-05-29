import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({cb}) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
          value={email}
        ></input>
      </div>
      <button onClick={() =>cb('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
