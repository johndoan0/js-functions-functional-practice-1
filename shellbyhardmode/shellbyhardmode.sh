mkdir shelby
cd shelby
touch readme.txt
touch fizz.txt
touch buzz.txt
touch deleteme.txt
echo fizzbuzz > readme.txt
mkdir texts
mv *.txt texts
cd texts
rm deleteme.txt
mkdir news
cd news
curl http://www.nytimes.com/ > times.txt
grep -i america times.txt > national.txt