import { useHistory } from 'react-router'
import { useAuth } from '../contexts/Auth'

const Notes = () => {

    // Get current user and signOut function from context
    const { user, signOut } = useAuth()

    const history = useHistory()

    async function handleSignOut() {
    // Ends user session
    await signOut()

    // Redirects the user to Login page
    history.push('/signin')
    }
    
    return (  
        <div className="container">
            <p>Welcome, {user?.id}!</p>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
}
 
export default Notes;