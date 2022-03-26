import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const ERR_DOC_NOT_FOUND = 'doc not found';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const main = () => {
  yargs(hideBin(process.argv))
    .command('* [doc]', 'print specified how-to', () => { }, (argv) => print(argv.doc))
    .help()
    .parse();
}

export async function print(doc) {
  if (!doc) {
    listDocs()
      .then(() => process.exit(0))
      .catch(err => {
        console.log(err);
        process.exit(1);
      });

    return;
  }

  try {
    await printDoc(doc);
    process.exit(0);
  } catch (err) {
    if (err.code === ERR_DOC_NOT_FOUND) {
      console.log(`Could not find doc "${doc}"`);
    } else {
      console.log(err);
    }

    process.exit(1);
  }
}

function getDocPath(docName) {
  const fileName = `${docName}.md`;
  return path.join(__dirname, 'doc', fileName);
}

async function listDocs() {
  return new Promise((resolve, reject) => {
    glob(path.join(__dirname, 'doc', '*.md'), (err, files) => {
      if (err) {
        reject(err);
      } else {
        const fileNames = files.map(file => path.basename(file).replace('.md', ''));
        console.log('\n' + fileNames.join('\n') + '\n');
        resolve();
      }
    });
  });
}

async function printDoc(docName) {
  const docData = await readDoc(docName);
  console.log(chalk['yellow'](docData));
}

async function readDoc(docName) {
  return new Promise((resolve, reject) => {
    const pathString = getDocPath(docName);
    fs.readFile(pathString, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}
