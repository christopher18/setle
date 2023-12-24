# example card https://www.setgame.com/sites/all/modules/setgame_set/assets/images/new/$1.png

# for numbers 1 through 81, download the image
for i in {1..81}
do
  curl https://www.setgame.com/sites/all/modules/setgame_set/assets/images/new/$i.png --output $i.png
done