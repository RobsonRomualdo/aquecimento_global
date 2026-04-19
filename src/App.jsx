import AppRoutes from './routes/router.jsx';
import { Box } from '@mui/material';

function App() {

  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <AppRoutes />
      </Box>
    </>
    
  )
}

export default App
