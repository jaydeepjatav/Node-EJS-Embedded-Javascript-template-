# Node-EJS-Embedded-Javascript-template-
EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is often used with Node.jsto create dynamic web pages.
EJS(Embedded javascript templates) which have to use a create a blueprint some pages.
EJS is a simple templating language that lets you generate HTML markup with plain Javascrip.

**start with installation**
          
          npm -i EJS


**using Ejs**
        app.set("view engine","ejs" );
        app.get("/", (res,req) +> {
             res.render("home.js");
        });
