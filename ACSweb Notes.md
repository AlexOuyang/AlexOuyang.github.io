

http://acms.ucsd.edu/students/website-and-file-sharing/webpage.html

How to use UCSD Acsweb server to hose your own website

1. Log on to the server:

                ssh username@acsweb.ucsd.edu

2. Get into the public html directory where all static web pages belong:

                cd public_html/

3. Remove everything in the directory using:

                rm -fr *

4. Then back to local, and reupload all the files in the current directory to the server using:

                scp -r * c2ouyang@acsweb.ucsd.edu:~c2ouyang/public_html


5. If Certain Scripts are forbidden to be viewed on ACS web server, type in: 

                chmod 755 -R *

to allow all the files be accessed by everyone on the web
