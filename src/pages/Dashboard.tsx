import DataTable from '../components/DataTable'
import { TextField, Button, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { setToken } from "../api/token";

function Dashboard() {
  
  const [token, setUserToken] = useState('');
  const [savedTokens, setSavedTokens] = useState<string[]>([]);

  useEffect(() => {
    const storedTokens = localStorage.getItem('userTokens');
    if (storedTokens) {
      setSavedTokens(JSON.parse(storedTokens));
    }
  }, []);

  const handleTokenSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (token.trim() === '') {
      return; 
    }
    const newTokens = [...savedTokens, token];
    localStorage.setItem('userTokens', JSON.stringify(newTokens));
    setSavedTokens(newTokens);
    setUserToken('');
    
  }

  const handleTokenDelete = (tokenToDelete: string) => {
    const newTokens = savedTokens.filter(userToken => userToken !== tokenToDelete);
    localStorage.setItem('userTokens', JSON.stringify(newTokens));
    setSavedTokens(newTokens);
  }

  return (
    <div>
      
      <div className="flex flex-row p-2 m-2 text-center">
        <form onSubmit={handleTokenSubmit} className='px-3'>
          <TextField
            label="Enter Token"
            value={token}
            onChange={(event) => setUserToken(event.target.value)}
          />
          <div className="pt-2"><Button type="submit">Submit</Button></div>
        </form>
        <TextField
          select
          label="Saved Tokens"
          value={token}
          sx={{ width: "205px" }}
          onChange={(event) => setUserToken(event.target.value)}
        >
          {savedTokens.map((token) => (
            <MenuItem key={token} value={token}>
              <div className="flex flex-row">
                {token}
                <div className="cursor-pointer hover:text-red-500" onClick={() => handleTokenDelete(token)}>
                  <Delete />
                </div>
              </div>
            </MenuItem>
          ))}
        </TextField>
        <div className="flex flex-col sm:flex-row">
          <div className="pt-3 pl-3 max-h-7">Need a token?</div>
          <div className="mt-7 sm:mt-3 pl-3 max-h-7 text-indigo-600 hover:text-indigo-300" id='FlaskLink'>
            <Link to="https://review-keybase.glitch.me/" target="_blank">
              go to TOKENS
            </Link>
          </div>
        </div>
        
      </div>
      <DataTable />
    </div>
   
  )
}

export default Dashboard;