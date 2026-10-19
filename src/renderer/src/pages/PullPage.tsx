import { useNavigate } from 'react-router'

function PullPage(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Pull</h1>
      <button onClick={() => navigate('/home')}>Finish</button>
    </div>
  )
}

export default PullPage
