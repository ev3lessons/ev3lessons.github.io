import os
import time
fo = open("lessonsul", "rw+")
fo2 = open("lessonslist", "rw+")
fo3 = open("lessonssearch", "rw+")

#lessonslist      lessonssearch    lessonsul
#print "Name of the file: ", fo.name

x = 0
y = 0
while y < 40:
 print '---'
 print 'title: "'+fo2.readline().replace("\n","")+'"'
 print 'searchterms: "'+fo3.readline().replace("\n","")+'"'
 print 'lang: "ar"'
 print '---'
 x = 0
 y = y+1
 while x != 1:
	line = fo.readline().replace("\n","")
	print line
	#time.sleep(0.1)
	if "</ul>" in line:
		x = 1
 #fo.readline()
# Close opend file
fo.close()
