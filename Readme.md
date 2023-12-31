
![1](https://github.com/abhishekv1000/Addition-Calculator-using-Simple-Express-Server/assets/114013340/4cf07be5-e7ef-418d-be84-08f834198577)
![2](https://github.com/abhishekv1000/Addition-Calculator-using-Simple-Express-Server/assets/114013340/dd87ef47-66a8-414f-ae38-e201e7f14d97)

![3](https://github.com/abhishekv1000/Addition-Calculator-using-Simple-Express-Server/assets/114013340/fcc8af10-3c3c-4847-8f59-e216dca624af)

step 1 = make calcuator js file 

step 2 = then call "npm init" & install express

step 3 = create a express server.

step 4 = create a html file  & write html
          
         <form action="/" method="post">
                 <input type="text" name="num1" placeholder="first num">
                 <input type="text" name="num2" placeholder="Second num">
                 <button> Calculator</button>
         </form>

step 5 = in js file , in server we write "app.get" for get content for our server which is open in browser -

       app.get('/', (req, res) => {
          res.send("hello world")      --------------------------- Hello world go in browser frontend 
             or 
          res.sendFile(__dirname + "/index.html") ------------------------------- Html goes into browser frontend
})

step 6 = for giving result of our calculation , we use "app.post" -
        
            app.post('/', (req, res) => {
                   console.log( "thanks for giving inputs" ) ------------------------------- shows in browser
             }

step 7 = install body parser for taking inputs which is giving by user.
         const bodyparser = require(body-parser)
         
         app.post('/', (req, res) => {
                     console.log(req.body.num1) --------------- num1 is the attribute of <input name="num1">  
  
         })

 
         ths allow to take input (num1) data in our terminal ---------
 
step 8 = with the help of app.post , we deliver addition of two input -
        
           app.post('/', (req, res) => {
                var num1 = Number(req.body.num1)
                var num2 = Number(req.body.num2)
  
               var result = num1 + num2
               res.send("The Addition Is " + result)
            }) 
