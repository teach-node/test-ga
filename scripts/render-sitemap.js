'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderSitemap() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/sitemap/sitemap.xml');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');
    
    sh.cp('-R', sourcePath, destPath)
};