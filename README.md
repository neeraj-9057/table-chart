## Step 



first of all we have to install angular cli if not install yet

after that we have to genrate a  folder (folder-name= table-chart)by using command (ng new< foldername>) in which we can perform all the task 

then i genrate a 2 component(1.table 2.chart) in folder to perform diff diff task on a button click

(command to genrate component= ng g c < component name >)

after that i create a html,css and javascript code of anguler-mterial table in table component

and then i create a html,css and javascript code of chart in chart component

then i go in app-routing.module.ts and import chart component and table component to add the routing on both component

then i make a fake api(before  make a api u have to install json server by using "npm install -g json-server" command ) that have save in db.json file 

then start the json server using "json-server --watch db.json" command

after that i add the data(that we have to show in table ) in bd.json file 

then i make a service to call the api(use "ng g service services/< servicename >" command to genrate service)

after genrate of service i make a function in service to call api from server

then the function that were made in service are called in table.component.ts file

and after that all i start ng serve command o to run my application 
