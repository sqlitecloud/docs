const path = require('path')
const fs = require("fs")
const fm = require('front-matter')
const withMarkdoc = require('@markdoc/next.js')

//this function return an array with all the files present in an base folder with ther relative path
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

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Understanding caching', href: '/docs/understanding-caching' },
      {
        title: 'Predicting user behavior',
        href: '/docs/predicting-user-behavior',
      },
      { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
      {
        title: 'Introduction to string theory',
        href: '/docs/introduction-to-string-theory',
      },
      { title: 'The butterfly effect', href: '/docs/the-butterfly-effect' },
    ],
  },
  {
    title: 'Advanced guides',
    links: [
      { title: 'Writing plugins', href: '/docs/writing-plugins' },
      { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
      { title: 'Temporal paradoxes', href: '/docs/temporal-paradoxes' },
      { title: 'Testing', href: '/docs/testing' },
      { title: 'Compile-time caching', href: '/docs/compile-time-caching' },
      {
        title: 'Predictive data generation',
        href: '/docs/predictive-data-generation',
      },
    ],
  },
  {
    title: 'API reference',
    links: [
      { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
      { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush' },
      { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert' },
      { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/docs/how-to-contribute' },
      { title: 'Architecture guide', href: '/docs/architecture-guide' },
      { title: 'Design principles', href: '/docs/design-principles' },
    ],
  },
]


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
  env: {
    customKey: 'fdsa',
    navigation: navigation,
    navigationTest: navigationTest,
    allMdFiles: allMdFiles,
  },
}

module.exports = withMarkdoc()(nextConfig)


