
console.log("It works!");
 if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }
     else if(process.env.NODE_ENV==='production'){
         console.log("we are in production mode")
     }