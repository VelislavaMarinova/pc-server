# pc-server
1. install MongoDB
2. install dependencies: npm install
3. import data to MongoDB Compass: https://github.com/marvelannabell/pc-server/blob/main/data.json
4. run server: npm start
   server is listening on port: 3000
   
# endpoints
•	Register User (POST): http://localhost:3000/users/register
•	Login User (POST): http://localhost:3000/users/login
•	Logout User (GET): http://localhost:3000/users/logout

•	Create recipe (POST): http://localhost:3000/data/recipes
•	All recipes (GET): http://localhost:3000/data/recipes
•	Recipe Details (GET): http://localhost:3000/data/recipe/:id
•	Update recipe (PUT): http://localhost:3000/data/recipe/:id
•	Delete recipe (DELETE):  http://localhost:300/data/recipes/:id
•	My recipes (GET): http://localhost:3000/data/catalog?where=_ownerId%3D%22{userId}%22
•	My recipes (GET): http://localhost:3000/data/catalog?where=category%3D%22{category}%22

