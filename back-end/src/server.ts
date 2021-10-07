import 'dotenv/config';
import { app } from './app';

const port = 3333;

app.listen(port || 3333, () => console.log(' ⚡ Node server proudly running on port ' + `${port}` + ' ⚡'));