// import { exec } from 'child_process';
const path = require('path');
const fs = require('fs');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

describe('create list and delete local', () => {
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
  }, 10000);

  it('npm run list Local', async () => {
    const fileName = 'MyTestText';
    const newFileName = `Pega_DXIL_${fileName}`;

    const script = 'npm run list Local';
    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    expect(stdout).toContain(`${newFileName}`);
    // done();
  }, 10000);

  it('compare create to default', async () => {
    const fileName = 'MyTestText';
    const newFileName = `Pega_DXIL_${fileName}`;

    const componentDir = path.resolve(`src/components/${newFileName}`);
    const assetDir = path.resolve(`test/assets/components/create/${newFileName}`);

    // get files of directory
    const componentFiles = fs.readdirSync(componentDir);

    // get files of assets
    // const assetFiles = fs.readdirSync(assetDir);

    // compare
    componentFiles.forEach(file => {
      const componentFilePath = path.join(componentDir, file);
      const assetFilePath = path.join(assetDir, file);

      const componentFileData = fs.readFileSync(componentFilePath, { encoding: 'utf8' });
      const assetFileData = fs.readFileSync(assetFilePath, { encoding: 'utf8' });

      expect(componentFileData).toEqual(assetFileData);
    });
  }, 10000);

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
