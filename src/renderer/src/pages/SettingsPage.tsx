import { useNavigate } from 'react-router'

function SettingsPage(): React.JSX.Element {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={() => navigate('/home')}>Back</button>
    </div>
  )
}

export default SettingsPage
