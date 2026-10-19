import { useNavigate } from 'react-router'

function WelcomePage(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/home')}>Continue</button>
    </div>
  )
}

export default WelcomePage
