function updateImportPaths(oldPath, newPath, sourceCode) {
  const oldDirLevels = oldPath.split('/').length - 1;
  const newDirLevels = newPath.split('/').length - 1;
  const dirLevelChange = newDirLevels - oldDirLevels;

  const updatedSourceCode = sourceCode.replace(/from ['"](.*)['"]/g, (match, importPath) => {
    let updatedPath = importPath;
    for (let i = 0; i < Math.abs(dirLevelChange); i++) {
      if (dirLevelChange > 0) {
        updatedPath = `../${updatedPath}`;
      } else {
        updatedPath = updatedPath.replace(/^\.\.\//, '');
      }
    }
    return `from '${updatedPath}'`;
  });

  return updatedSourceCode;
}

// Example usage
const oldPath = '/var/folders/b4/nfmp_93x3b51md9m_8mh43g40000gn/T/second-repos/kotiya/Portfolio/src/components/About/About.js';
const newPath = '/var/folders/b4/nfmp_93x3b51md9m_8mh43g40000gn/T/second-repos/kotiya/Portfolio/app/about/page.tsx';
const sourceCode = `
import React from 'react';
import { SomeComponent } from '../../shared/components/SomeComponent';

// Rest of the code...

export default About;
`;

const updatedSourceCode = updateImportPaths(oldPath, newPath, sourceCode);
console.log(updatedSourceCode);
