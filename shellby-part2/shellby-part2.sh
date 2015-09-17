input=$1
echo Naming new folder -- $input
mkdir $input
cd $input
touch index.html
mkdir imgs
mkdir styles
touch styles/styles.css