'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderSitemap() {
    const sitemapPath = upath.resolve(upath.dirname(__filename), '../src/sitemap/sitemap.xml');
    const robotsPath = upath.resolve(upath.dirname(__filename), '../src/sitemap/robots.txt');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');
    
    sh.cp('-R', sitemapPath, destPath)
    sh.cp('-R', robotsPath, destPath)
};