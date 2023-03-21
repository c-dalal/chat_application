import React ,{useState}from 'react'
import axios from 'axios';

const LoginForm = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const handleSubmit = async(e) => {
            e.preventDefault();

            //userName / password =>chart engine = > give message
            // worked out then logged in if not try with new credientials

            const authObject = {'Project-ID': "cd8bc6fa-1d2c-41fc-8c99-27ef923b16ab","User-Name":username, "User-Secret":password,}
            try{
                await axios.get('https://api.chatengine.io/chats',{headers: authObject});
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                window.location.reload();
            }catch(error){
                setError('OOopsss , Incorrect credenticals')
            }
        
        
        }
  return (
    <div className="wrapper"> 
        <div className='form'>
            <h1 className='title'>
                Chat Application
            </h1>
            <form onSubmit={handleSubmit}> 
                <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                placeholder='UserName'
                required
                />

                 <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder='Password'
                required
                />

                <div align="center">
                    <button type="submit" className='button'>
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
   </div>
  )
}

export default LoginForm
