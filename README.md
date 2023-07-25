# pc-server
1. install MongoDB
2. install dependencies: npm install
3. import data to MongoDB Compass to db-name: "pc-db"
	- items: https://github.com/marvelannabell/pc-server/blob/main/pc-db.items.json
 	- categories: https://github.com/marvelannabell/pc-server/blob/main/pc-db.categories.json
5. run server: npm start
   server is listening on port: 3000
   
# endpoints user collection
1.	Register User (POST): http://localhost:3000/users/register
2.	Login User (POST): http://localhost:3000/users/login
3.	Logout User (GET): http://localhost:3000/users/logout
# endpoints recipes collection
4.	Create recipe (POST): http://localhost:3000/data/recipes
5.	All recipes (GET): http://localhost:3000/data/recipes
6.	Recipe Details (GET): http://localhost:3000/data/recipe/:id
7.	Update recipe (PUT): http://localhost:3000/data/recipe/:id
8.	Delete recipe (DELETE):  http://localhost:300/data/recipes/:id
9.	My recipes (GET): http://localhost:3000/data/catalog?where=_ownerId%3D%22{userId}%22
10.	My recipes (GET): http://localhost:3000/data/catalog?where=category%3D%22{category}%22
	# endpoints category collection
1. All categories (GET): http://localhost:3000/data/categories
2. Create category (POST): http://localhost:3000/data/categories

