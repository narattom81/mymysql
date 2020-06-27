…or create a new repository on the command line
echo "# mymysql" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/narattom81/mymysql.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/narattom81/mymysql.git
git push -u origin master

--to add a book
$ curl -X POST -H "Content-Type: application/json" -d '{"book_name":"testbook","author":"shaan"}' http://localhost:3000/add_book

--to get all the books
$ curl -X GET -H "Content-Type: application/json" http://localhost:3000/books
