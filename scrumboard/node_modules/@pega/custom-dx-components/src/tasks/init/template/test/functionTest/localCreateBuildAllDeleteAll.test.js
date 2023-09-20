// import { exec } from 'child_process';
const path = require('path');
const fs = require('fs');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

describe('create buildAll and deleteAll local', () => {
  it('initial delete/cleanup', async () => {
    const script = `npm run deleteAll Local Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();
  });

  it('npm run create Local text', async () => {
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
  }, 10000);

  it('npm run create Local page', async () => {
    const fileName = 'MyTestPage';
    const newFileName = `Pega_DXIL_${fileName}`;
    const script = `npm run create Widget PAGE ${fileName} "My Test Page" 0.0.1 DXIL "" "My Test Page Description" Pega`;

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
  }, 10000);

  it('npm run create Local details', async () => {
    const fileName = 'MyTestDetails';
    const newFileName = `Pega_DXIL_${fileName}`;
    const script = `npm run create Template DETAILS ${fileName} "My Test Details" 0.0.1 DXIL "" "My Test Details Description" Pega`;

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
  }, 10000);

  it('npm run buildAllComponents', async () => {
    const script = `npm run buildAllComponents N`;
    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    expect(stdout).toContain('Compiled successfully.');
    expect(stdout).not.toContain('Compiled with warnings.');
    expect(stdout).not.toContain('error');
    expect(stdout).not.toContain('Error');

    expect(stdout).toContain('Pega_DXIL_MyTestText');
    expect(stdout).toContain('Pega_DXIL_MyTestPage');
    expect(stdout).toContain('Pega_DXIL_MyTestDetails');
    // done();
  }, 30000);

  it('npm run deleteAll Local', async () => {
    const script = `npm run deleteAll Local Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // pick one
    const newFileName = 'Pega_DXIL_MyTestText';

    // want message to contain component name
    expect(stdout).toContain(newFileName);

    // message deleted
    expect(stdout).toContain('is deleted');

    // check to see file exists

    // I think run through a map of them here

    // const fileDir = path.resolve(`src/components/${newFileName}`);
    // const createFile = path.resolve(path.join(`src/components/${newFileName}`, 'index.jsx'));
    // const doesExist = fs.existsSync(createFile);
    // expect(doesExist).not.toBeTruthy();
  }, 20000);
});
