# SplitPdfToMultipleTextFiles

//1. Step: Split pdf to single pages in node:

//js/SplitPdfInSubPages.js

//ToDo: Give Variable for filename to function when calling it
//Create SinglePages-Folders on the Fly Give its Variable to function when calling it

//2. step on commandline
//for f in *.pdf; do pdftotext -enc UTF-8 -layout "$f" "${f%.*}.txt"; done
//3. Step moved text files to their own SubFolder folder
// ToDo: this sure can be done a better way by adding it to the first function...

//4. Step (not done yet): 
read the first line of each text-file and name the file like that (using the mv-Command)