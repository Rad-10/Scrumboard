// import { exec } from 'child_process';
const path = require('path');
const fs = require('fs');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

describe('createAll list and deleteAll local', () => {
  it('initial delete/cleanup', async () => {
    const script = `npm run deleteAll Local Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();
  });

  it('npm run createAll Local', async () => {
    const script = `npm run createAll "My" 0.0.1 DXIL "" Pega`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // want message to contain component name
    expect(stdout).toContain('created Pega_DXIL_My');

    // don't want message with already exists
    expect(stdout).not.toContain('already exists');

    // check to see file exists

    // pick one
    const newFileName = 'Pega_DXIL_MyBoolean';

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
    const script = 'npm run list Local';
    const { stdout, stderr } = await exec(script);

    expect(stderr).not.toBeNull();

    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stdout).toContain('Pega_DXIL_MyText');
    expect(stdout).toContain('Pega_DXIL_MyTextInput');
    expect(stdout).toContain('Pega_DXIL_MyParagraph');
    expect(stdout).toContain('Pega_DXIL_MyEmail');
    expect(stdout).toContain('Pega_DXIL_MyPhone');
    expect(stdout).toContain('Pega_DXIL_MyURL');
    expect(stdout).toContain('Pega_DXIL_MyInteger');
    expect(stdout).toContain('Pega_DXIL_MyDecimal');
    expect(stdout).toContain('Pega_DXIL_MyCurrency');
    expect(stdout).toContain('Pega_DXIL_MyPercentage');
    expect(stdout).toContain('Pega_DXIL_MyBoolean');
    expect(stdout).toContain('Pega_DXIL_MyDate');
    expect(stdout).toContain('Pega_DXIL_MyDateTime');
    expect(stdout).toContain('Pega_DXIL_MyTimeOfDay');
    expect(stdout).toContain('Pega_DXIL_MyPicklist');
    expect(stdout).toContain('Pega_DXIL_MyDetails');
    expect(stdout).toContain('Pega_DXIL_MyTwoColumnDetails');
    expect(stdout).toContain('Pega_DXIL_MyForm');
    expect(stdout).toContain('Pega_DXIL_MyTwoColumnForm');
    expect(stdout).toContain('Pega_DXIL_MyPage');
    expect(stdout).toContain('Pega_DXIL_MyCaseWidget');
    expect(stdout).toContain('Pega_DXIL_MyPageWidget');
    expect(stdout).toContain('Pega_DXIL_MyPageCaseWidget');
    // done();
  }, 10000);

  it('compare created to default', async () => {
    const compList = [
      'Pega_DXIL_MyText',
      'Pega_DXIL_MyTextInput',
      'Pega_DXIL_MyParagraph',
      'Pega_DXIL_MyEmail',
      'Pega_DXIL_MyPhone',
      'Pega_DXIL_MyURL',
      'Pega_DXIL_MyInteger',
      'Pega_DXIL_MyDecimal',
      'Pega_DXIL_MyCurrency',
      'Pega_DXIL_MyPercentage',
      'Pega_DXIL_MyBoolean',
      'Pega_DXIL_MyDate',
      'Pega_DXIL_MyDateTime',
      'Pega_DXIL_MyTimeOfDay',
      'Pega_DXIL_MyPicklist',
      'Pega_DXIL_MyDetails',
      'Pega_DXIL_MyTwoColumnDetails',
      'Pega_DXIL_MyForm',
      'Pega_DXIL_MyTwoColumnForm',
      'Pega_DXIL_MyPage',
      'Pega_DXIL_MyCaseWidget',
      'Pega_DXIL_MyPageWidget',
      'Pega_DXIL_MyPageCaseWidget'
    ];

    compList.forEach(component => {
      const componentDir = path.resolve(`src/components/${component}`);
      const assetDir = path.resolve(`test/assets/components/createAll/${component}`);

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
    });
  }, 10000);

  it('npm run deleteAll Local', async () => {
    const script = `npm run deleteAll Local Y`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // pick one
    const newFileName = 'Pega_DXIL_MyBoolean';

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
  }, 10000);
});
