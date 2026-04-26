import fs from 'fs/promises';
import path from 'path';

export default async function buildHelper() {
  const src = path.resolve('src', 'frontend');
  const dest = path.resolve('build', 'frontend');

  try {
    await fs.rm(dest, { recursive: true, force: true });
  } catch (err) {
    console.log(err);
  }

  await fs.cp(src, dest, { recursive: true });





}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildHelper();
}
