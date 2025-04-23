import fs from "fs";
import path from "path";

const readFiles = async (route) => {
  return new Promise((resolve, reject) => {
    const directoryPath = path.join(process.cwd(), route);
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        resolve([]);
      }
      resolve(files);
    });
  });
};
export default readFiles;
