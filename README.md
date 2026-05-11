
## Reflection
1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
res.send()  - if we want to send simple response directly from the route, like text, small HTML or data
res.sendFile() - if we want to send complete file from our project folder, like index.html or contact.html

2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
The path module helps create the correct full file path. Using path.join() with _dirname makes sure express can always find the file corrrectly no matter where the server is running from 
if i use only relative path like "public/index.html" the application may not find the file if current working directory changes. this could get errors like "Can not find file ". 

3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?
first I will create a file menu.html like how I created index.html inside the public folder. Then in the server.js I would create a new route for /menu and use res.sendFile() to send the menu.html file