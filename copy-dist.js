import * as fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

// Configurar __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config();

async function copyDistFolder() {
  const source = path.join(__dirname, 'dist');
  const destination = process.env.DIST_COPY_PATH;

  if (!destination) {
    console.error('ERROR: DIST_COPY_PATH no está definido en .env');
    process.exit(1);
  }

  try {
    await fs.copy(source, destination);
    //console.log(`¡Copia exitosa! De ${source} a ${destination}`);
    console.log(`¡Copia exitosa!`);
  } catch (err) {
    console.error('Error al copiar la carpeta dist:', err);
    process.exit(1);
  }
}

copyDistFolder();