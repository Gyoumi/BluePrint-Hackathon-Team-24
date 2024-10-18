import { SERVER_PORT } from '../config.json';
import app from './app';

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port http://localhost:${SERVER_PORT}`);
  });
  