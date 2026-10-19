import { useState } from 'react'

type SecretInputProps = {
  id: string
  value: string
  onChange: (value: string) => void
}

function SecretInput({ id, value, onChange }: SecretInputProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <input
        id={id}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default SecretInput
