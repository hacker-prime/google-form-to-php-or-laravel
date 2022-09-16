# Google Form to PHP or Laravel
The purpose of this repository is to show how data can be sent from a Google Form to either PHP or Laravel. The data will not be stored to a database but a txt file as it is quicker to test.I am doing this to help solidfy my experience with this, particularly the Laravel aspect since I am new to it  and to help others especially the less experienced. There will be two folders, pure php and laravel respectively. 

## Research
These are some of the links I consulted to help understand all of this
* [How to Install Laravel on Windows 10](https://www.youtube.com/watch?v=aujB-TLZCDE)
* [How to Auto-Send Emails on a Google Form Submission](https://www.youtube.com/watch?v=1CQymthRcyo) 
* [Google Spreadsheet Post data to MySQL database @local PC](https://www.youtube.com/watch?v=SMYgZb4Zg84)
* https://stackoverflow.com/questions/9265274/php-create-and-save-a-txt-file-to-root-directory
* https://stackoverflow.com/questions/48457618/php-create-file-in-same-directory-as-script
* https://www.endpointdev.com/blog/2021/11/forwarding-google-forms-responses-to-api/ 

## Ngrok
Google App Script can only work with a public url that can be accessed via the internet and I was doing development on the localhost/development environment so I used [ngrok](https://ngrok.com/)to bypass this issue. When you move from development to production you'd just use the registered domain in question for example shaynhacker.com in the url section of Google App Script.


## Laravel
When testing via Laravel, you need two two terminal windows.
* The first terminal window should utilize php artisan serve so we have a server that's running
* The second terminal window should have ngrok running.
* NOTE - The first terminal window will have the server running on the following url/port - http://127.0.0.1:8000/ and the second terminal window should have ngrok running on the same port. The ngrok command for that would be as follows: './ngrok http 8000'. Also, the ngrok file should be placed at the root level of the laravel folder so that when it runs the folder it is in will be used for the public url that will be accessible over the internet.
* During my testing/experimenting I was using web.php but it turns out that you should api.php instead. The web.php is used for serving webpages while the api.php is for receiving or sending out data.      
* The file in the php folder labeled googleappscript.js can also be used if we send the data to a laravel backend/application. However, the url to be used in Google App Script would have to be something like the following:
    * https://3cde-96-43-164-151.ngrok.io/api/data
    * In the url directly above, the last part of the path 'data' is the endpoint that is used in api.php. You could name it whatever you like. 
   