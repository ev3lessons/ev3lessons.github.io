#!/bin/tcsh
echo "Working"
cd ~/Github/ev3lessons.com/
find ./ \( -name \~\$\* -o -name \*.DS_Store -o -name Thumbs.db -o -name \*.AppleDouble -o -name ._\* -o -name \*.recover -o -name \*.recover.Z -o -name \*.lck -o -name \*.bak -o -name \*.backup -o -name \*.bak.Z -o -name \*.backup.Z -o -name \*~.Z -o -name .\*~.Z -o -name \#\*\#.Z -o -name \*~ -o -name .\*~ -o -name \#\*\# -o -name ,\* -o -name .\#\* -o -name \#\* \) -print -exec rm -f {} ";"
rsync -avz ~/GitHub/ev3lessons.com/* sseshan@www.ev3lessons.org:~/public_html/
ssh sseshan@ev3lessons.com \~/public_html/fixperf
echo "Done"
