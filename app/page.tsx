function updateImportPaths(oldPath, newPath, sourceCode) {
  // Determine directory level change based on old and new paths
  const oldDir = oldPath.split('/').slice(0, -1).join('/');
  const newDir = newPath.split('/').slice(0, -1).join('/');
  const levelChange = newDir.split('/').length - oldDir.split('/').length;

  // Update relative import paths in the source code accordingly
  let updatedSourceCode = sourceCode;
  for (let i = 0; i < levelChange; i++) {
    updatedSourceCode = updatedSourceCode.replace(/import\s+\{(.+?)\}\s+from\s+['"]\.\.\//g, "import {$1} from '../");
  }

  // Return updated source code
  return updatedSourceCode;
}

// Example usage
const oldPath = '/var/folders/b4/nfmp_93x3b51md9m_8mh43g40000gn/T/second-repos/kotiya/Portfolio/src/components/Home/Home.js';
const newPath = '/var/folders/b4/nfmp_93x3b51md9m_8mh43g40000gn/T/second-repos/kotiya/Portfolio/app/page.tsx';
const sourceCode = `import React from 'react';
import { Component1, Component2 } from '../../shared/components';

// Rest of the code...

export default Home;`;

const updatedSourceCode = updateImportPaths(oldPath, newPath, sourceCode);
console.log(updatedSourceCode);
