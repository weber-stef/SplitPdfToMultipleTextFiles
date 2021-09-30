for f in * .pdf;
do pdftotext "$f"
"test/${f%.*}.txt";
done