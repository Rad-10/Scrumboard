// import { exec } from 'child_process';
const path = require('path');
const fs = require('fs');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

describe('promote and revert webpack', () => {
  it('npm run promoteWebPack', async () => {
    const script = `npm run promoteWebPack`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // want message to contain component name
    expect(stdout).toContain('Bundler now using');
    expect(stdout).toContain('webpack.config.js');

    // utilize
    expect(stdout).toContain('Utilize this file for webpack modifications.');

    // verify new file exists
    const webPackFile = path.resolve('webpack.config.js');

    expect(fs.existsSync(webPackFile)).toBeTruthy();

    // if (doesExist) {
    //   // remove it
    //   fs.rmdirSync(fileDir, { recursive: true });
    // }
  }, 10000);

  it('npm run revertWebPack', async () => {
    const script = `npm run revertWebPack`;

    const { stdout, stderr } = await exec(script);
    // console.log(stdout);
    expect(stdout).not.toBeNull();
    expect(stderr).not.toBeNull();

    // want message to contain component name
    expect(stdout).toContain('marked as not used.');
    expect(stdout).toContain('webpack.config.js');

    // message with bundler
    expect(stdout).toContain('Bundler reverted to using internal webpack.config.js.');

    // verify file marked as not used
    const webPackFile = path.resolve('webpack.config.js.notused');

    expect(fs.existsSync(webPackFile)).toBeTruthy();

    // if (doesExist) {
    //   // remove it
    //   fs.rmdirSync(fileDir, { recursive: true });
    // }
  }, 10000);
});
