import { useNavigate } from 'react-router'

function BannerPage(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Banner</h1>
      <button onClick={() => navigate('/settings')}>Settings</button>
      <button onClick={() => navigate('/history')}>History</button>
      <button onClick={() => navigate('/pull')}>Pull</button>
    </div>
  )
}

export default BannerPage
