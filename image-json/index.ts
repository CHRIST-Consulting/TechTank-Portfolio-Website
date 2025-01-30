import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'public', 'images', 'home', 'Clients');
const lines = ['First line', 'Second line', 'Third line', 'Fourth line'];

interface ClientImages {
  [key: string]: string[];
}

function getImagesFromDirectory(dir: string): string[] {
  try {
    const files = fs.readdirSync(dir);
    return files
      .filter(file => file.toLowerCase().endsWith('.png'))
      .map(file => `/images/home/Clients/${path.basename(dir)}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

function generateClientImagesJson(): void {
  const clientImages: ClientImages = {};

  lines.forEach(line => {
    const dirPath = path.join(baseDir, line);
    clientImages[line] = getImagesFromDirectory(dirPath);
  });

  const jsonContent = JSON.stringify(clientImages, null, 2);
  const outputPath = path.join(process.cwd(), 'public', 'clientImages.json');

  fs.writeFileSync(outputPath, jsonContent);
  console.log(`Client images JSON file has been generated at ${outputPath}`);
}

generateClientImagesJson();