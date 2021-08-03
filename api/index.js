import app from './src/app';
import './src/db';

async function main() {
    await app.listen(app.get('port'), () => console.log('Server connected on port 3001'));
}
main();