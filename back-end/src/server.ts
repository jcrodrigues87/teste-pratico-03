import 'dotenv/config';
import { app } from './app';

const port = process.env.PORT;

app.listen(port || 3333, () => console.log(' ⚡ Node server proudly running on port ' + `${port}` + ' ⚡'));