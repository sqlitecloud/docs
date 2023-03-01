const withMarkdoc = require('@markdoc/next.js')

/*
const path = require('path')
const fs = require("fs")
const fm = require('front-matter')
const { introduction } = require('./src/pages/docs/introduction/nav');
const { commands } = require('./src/pages/docs/commands/nav');
const { plugins } = require('./src/pages/docs/plugins/nav');
const { sdk } = require('./src/pages/docs/sdk/nav');
*/

//this function return an array with all the files present in an base folder with ther relative path
/*
const readAllFilesFromAFolder = (dirMain, files, publicPath, hierarchy) => {
  const readDirMain = fs.readdirSync(dirMain);
  readDirMain.forEach((dirNext) => {
    if (fs.lstatSync(dirMain + "/" + dirNext).isDirectory()) {
      let child = {
        name: dirNext,
        // link: "#link-1",
        children: []
      }
      hierarchy.push(child);
      readAllFilesFromAFolder(dirMain + "/" + dirNext, files, publicPath + '../', child.children);
    } else {
      let child = {
        name: dirNext,
        // link: "#link-1",
      }
      hierarchy.push(child);
      files.push({
        completePath: dirMain + "/" + dirNext,
        path: dirMain + "/",
        filename: dirNext,
        publicPath: publicPath
      })
    }
  });
  return {
    files: files,
    hierarchy: hierarchy
  };
};
const navigationTest = readAllFilesFromAFolder('./src/pages/docs', [], '../', []);
*/

/*
const allFiles = navigationTest.files;
const allMdFiles = allFiles.map((file, i) => {
  let md = fs.readFileSync(file.completePath, 'utf8');
  var content = fm(md)
  return {
    markdown: md,
    attributes: content.attributes,
    completePath: file.completePath.replace("/app", ""),
    url: file.completePath.replace("/app", "").replace("./blog", "/blog").replace("md", "html"),
    path: file.path,
    filename: file.filename,
    publicPath: file.publicPath
  };
})
*/

/*
const config = {
  introduction,
  commands,
  plugins,
  sdk
}
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['jsx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
  env: {
  },
}

module.exports = withMarkdoc()(nextConfig)


