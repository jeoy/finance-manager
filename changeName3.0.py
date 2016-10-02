#encoding:utf-8
import os
import sys

path="/Users/jeoy/filename/name/"
files = os.listdir(path) #路径可以自己
i = 0 

fcurse = open("/Users/jeoy/filename/coco2014_filename.train.txt",'r')

print files
flag = 0
j = 0
for name in files:
    a = os.path.splitext(name)
   
    if a[1] == '.jpg' or a[1] == '.png':  #txt可以自己手动修改成你想改的文件名
        line = fcurse.readline(); 
        line=line.strip('\n')
        newname = line #.py也是可以修改
        
        i = i+1 
        
        print "把"+name+"改成"+newname
        os.rename(path+name,path+newname)

        flag = 0;

print "全部修改完成！"
fcurse.close()
