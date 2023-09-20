// import { exec } from 'child_process';
const path = require('path');
const fs = require('fs');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

describe('create publish and delete local', () => {
  it('initial delete/cleanup', async () => {
    const script = `npm run deleteAll Local Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();
  });

  it('npm run create Local', async () => {
    const fileName = 'MyTestText';
    const newFileName = `Pega_DXIL_${fileName}`;
    const script = `npm run create Field Text ${fileName} "My Test Text" 0.0.1 DXIL "" "My Test Text Description" Pega`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // want message to contain component name
    expect(stdout).toContain(newFileName);

    // don't want message with already exists
    expect(stdout).not.toContain('already exists');

    // check to see file exists

    // const fileDir = path.resolve(`src/components/${newFileName}`);
    const createFile = path.resolve(path.join(`src/components/${newFileName}`, 'index.jsx'));
    const doesExist = fs.existsSync(createFile);
    expect(doesExist).toBeTruthy();

    // if (doesExist) {
    //   // remove it
    //   fs.rmdirSync(fileDir, { recursive: true });
    // }
  }, 20000);

  it('npm run publish (no fetch)', async () => {
    const fileName = 'MyTestText';
    const newFileName = `Pega_DXIL_${fileName}`;

    const script = `npm run publish ${newFileName} LoanV2 01-01-01 N noFetch`;
    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    expect(stdout).toContain(`${newFileName} schema is valid`);
    expect(stdout).toContain('Compiled successfully.');
    // done();
  }, 30000);

  it('npm run delete Local', async () => {
    const fileName = 'MyTestText';
    const newFileName = `Pega_DXIL_${fileName}`;
    const script = `npm run delete Local ${newFileName} Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // want message to contain component name
    expect(stdout).toContain(newFileName);

    // message deleted
    expect(stdout).toContain('is deleted');

    // check to see file exists

    // const fileDir = path.resolve(`src/components/${newFileName}`);
    const createFile = path.resolve(path.join(`src/components/${newFileName}`, 'index.jsx'));
    const doesExist = fs.existsSync(createFile);
    expect(doesExist).not.toBeTruthy();
  }, 10000);
});
