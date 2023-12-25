const fs = require('fs');

// const fileName = 'newFile.txt';
// const content = 'This is the content of the new file.';

// fs.writeFile(fileName, content, (err) => {
//   if (err) {
//     console.error('Error creating the file:', err);
//     return;
//   }
//   console.log(`'${fileName}' has been created with the content:\n${content}`);
// });


// const sourceFile = 'newFile.txt'; 
// const destinationFile = 'newFileCopy.txt';


// fs.copyFile(sourceFile, destinationFile, (err) => {
//     if (err) {
//       console.error('Error copying the file:', err);
//       return;
//     }
//     console.log(` '${sourceFile}' has been copied to '${destinationFile}'`);
//   });

//   const currentFileName = 'newFileCopy.txt'; 
// const newFileName = 'renamedFile.txt'; 

// fs.rename(currentFileName, newFileName, (err) => {
//   if (err) {
//     console.error('Error renaming the file:', err);
//     return;
//   }
//   console.log(`'${currentFileName}' has been renamed to '${newFileName}'`);
// });


// const directoryPath = './'; 


// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }
//   console.log('Files in the directory:');
//   files.forEach((file, index) => {
//     console.log(`${index + 1}: ${file}`);
//   });
// });


const fileName = 'renamedFile.txt'; 

fs.stat(fileName, (err, stats) => {
  if (err) {
    console.error('Error getting file information:', err);
    return;
  }

  console.log(`Information about '${fileName}':`);
  console.log('File size:', stats.size, 'bytes');
  console.log('File permissions:', stats.mode.toString(8)); 
  console.log('Last accessed:', stats.atime);
  console.log('Last modified:', stats.mtime);
  console.log('Created:', stats.birthtime);
});