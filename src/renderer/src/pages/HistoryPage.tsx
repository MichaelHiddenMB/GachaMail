import { useNavigate } from 'react-router'

function HistoryPage(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>History</h1>
      <button onClick={() => navigate('/home')}>Back</button>
    </div>
  )
}

export default HistoryPage
