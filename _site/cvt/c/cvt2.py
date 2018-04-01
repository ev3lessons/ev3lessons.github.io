import os
import time
fo = open("a", "rw+")
fo2 = open("lessonslist", "rw+")

#lessonslist      lessonssearch    lessonsul
#print "Name of the file: ", fo.name

y = 0
while y != 65:
 x = 0
 name = fo2.readline().replace("\n","").replace(" ","-")
# print name
 y = y+1
 date = 2017 - y
 while x != 1:
	line = fo.readline().replace("\n","")
#	os.system('echo \''+line+'\' >> lessons/_posts/2017-01-01-'+name+'.markdown')
	os.system('echo \''+line+'\' >> lessons/_posts/'+str(date)+'-01-01-'+name+'.markdown')
	print line
	#time.sleep(0.1)
	if "</ul>" in line:
		x = 1
 #fo.readline()
# Close opend file
fo.close()
