

http://acms.ucsd.edu/students/website-and-file-sharing/webpage.html

How to use UCSD Acsweb server to hose your own website

1. Log on to the server:

                ssh username@acsweb.ucsd.edu

2. Remove everything in the directory using:

                rm -fr *

3. Then Reupload all the files in the current directory to the server using:

                scp -r * c2ouyang@acsweb.ucsd.edu:~c2ouyang/public_html


4. If Certain Scripts are forbidden to be viewed on ACS web server, type in: 

                chmod 755 -R *

to allow all the files be accessed by everyone on the web
