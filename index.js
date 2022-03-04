// const express = require("express");

// const app = express();

//  app.use(logger); // logger() logger

// app.get("/users", logger, (req, res) => {
//   return res.send({ route: "/users", role: req.role });
// });

// app.get("/students", (req, res) => {
//   return res.send({ route: "/students", role: req.role });
// });

// app.get("/admin", (req, res) => {
//   return res.send({ route: "/admin", role: req.role });
// });

// app.get("/products", loggedIn("seller"), (req, res) => {
//   return res.send("Yes you can get the product");
// });

// function loggedIn(role) {
//   return function logger(req, res, next) {
//     if (role === "seller") {
//       return next();
//     }
//     return res.send("Not allowed");
//   };
// }

// function logger(req, res, next) {
//   if (req.path === "/users") {
//     req.role = "user";
//   } else if (req.path === "/admin") {
//     req.role = "admin";
//   } else {
//     req.role = "somebody";
//   }
//   console.log("called");
//   next();
// }

// app.listen(5000, () => {
//   console.log("listening on port 5000");
// });

// Consider you have a books API where in you have 3 APIs

// GET /books ( has 1 middleware allBooks which prints the console.log ( "Fetching all books")

// GET /book/:name ( :name is a variable and we will learn this later in the course but
//      this means if you do book/GameOfThrones or book/HarryPotter then all of them will hit this API so 
//      we need a middleware singleBook for this api which will fetch the name of the book 
//      and for that you need to do req.params.name ( we will learn this too in future ) and
//       you have to add this book name to the request like req.name = req.params.name 
//       and then in the route handler you need to return json like {bookName: req.name}.



const express = require("express");
const app = express();

app.use(logger);


app.get("/books", function(request, response){
    const books = {
        Ulysses: `Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.`,

        Lolita: `The book is internationally famous for its innovative style and infamous for its controversial subject: the protagonist and unreliable narrator, middle aged Humbert Humbert, becomes obsessed`,

        Middlemarch: `Middlemarch: A Study of Provincial Life is a novel by George Eliot, the pen name of Mary Anne Evans, later Marian Evans.`,

        Beloved: `Beloved (1987) is a Pulitzer Prize-winning novel by Nobel laureate Toni Morrison. The novel, her fifth, is loosely based on the life and legal case of the slave Margaret Garner, about whom Morrison.`,

    }
    response.send(JSON.stringify(books))
});

    app.get("/Ulysses", function(request, response){
        return response.send({ route: "/Ulysses"})

});


app.get("/Beloved", function(request, response){
    return response.send({ route: "/Beloved"})

});

function logger(request,response, next){
    console.log ( "Fetching all books");
    next();
}


app.listen(4500, () =>{
    console.log("listning")
});


