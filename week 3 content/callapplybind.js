//CALL, APPLY AND BIND IN JAVASCRIPT
//IT REDUCES CODE REDUNDANCY. EK FUNCTION KO ALAG ALAG OBJECT ME USE KARNE KE LIYE USE KARTE HAI TEENO KO.
// YA EK OBJECT KE FUNCTION KO DUSRE OBJECT ME DIRECTLY USE KARNE KE LIYE BHI ISKA ISTEMAL HOTA HAI 

let userDetails={ 
    name : "Ajay Suneja",
     Age : 28,
     Designation : "Software Engineer", 
     printDetails : function(){ 
         console.log(this) } //yaha this object ko point kar raha hai yani userdetail ko to humlog object ke
         // property ko bhi point karwa sakte hai this.name , this.age etc karke
     } 
     userDetails.printDetails();

     //2 object me 1 hi function ko use karna hai to hum code redundancy kam kar sakte hai 2 tarike se . 
     //pehla way 1st object  me function define karo or usko 2nd object me call kar lo
     //dusra way function ko alag se bana lo or dono object me call kar lo
  
     // first way
     let userDetails1={ 
        name : "jay Suneja",
         Age : 38,
         Designation : "Software Engineer", 
         printDetails : function(){ 
             console.log(this.name) }    
         } 
         userDetails1.printDetails();

         let userDetails2={ 
            name : "viay Suneja",
             Age : 22,
             Designation : "Software Engineer", 
             } 
             //USING CALL FUNCTION :isko function borrow karna bolte hai. jab chahiye show karne ke liye tab borrow kar lo
             userDetails1.printDetails.call(userDetails2);//calling printDetails from userDetails1 to userdetails2
             //function property ko 1st object ke sath normally usko property ko retrive karne jaisa likh kar
              // jisme object add karna hai function ko usko as a argument call me pass kar do
    
             //2nd way and dono way me hum or bhi  argument bhi add kar sakte hai.
             let userDetails3={ 
                name : "jay",
                 Age : 38,
                 Designation : "Software Engineer", 
                 
                 } 
                let printDetails = function(state , country){ 
                    console.log(`${this.name} ${state} ${country}`)
                } //template literal ya  fir + ka use kar sakte hai

                 let userDetails4={ 
                    name : "rajuSuneja",
                     Age : 38,
                     Designation : "Software Engineer",    
                     } 
        //calling outside function to use in the object using call function
        printDetails.call(userDetails3, 'delhi','india');//bus function ka naam likho or .call. object ko as 
        //argument of call pass kar do. function ke baki arguments ko bhi wahi pass karna hoga
        printDetails.call(userDetails4,'patna','india');

        //USING APPLY : same call ke jaisa hi hai bas jo call me humlog ek ek karke argument pass karte the
        // use array list me pass kar denge. baki sab same hai.

        let userDetails5={ 
            name : "ram",
             Age : 38,
             Designation : "Software Engineer", 
             
             } 
            let printDetail = function(state , country){ 
                console.log(`${this.name} ${state} ${country}`)
             } //template literal ya  fir + ka use kar sakte hai
              //return or console.log use karne pe bind me print hone ke bad undefined aata hai
             let userDetails6={ 
                name : "raj",
                 Age : 38,
                 Designation : "Software Engineer",    
                 } 
     printDetail.apply(userDetails5,['hajipur','mahua']);
     printDetail.apply(userDetails6,['lucknow','mahua']);

     // USING BIND: bind bhi bilkul call ki tarah hai bas difference ye hai ki call direct usi time invoke
     // karke call kar leta hai wahi bind bolta hai abhi invoke karke call mat karo. isko store/bind kar lo ek
     //variable me or jab jarurat ho to call kar lena.
     //EX= lets use bind in  
     let a = printDetail.bind(userDetails5,'hajipur','mahua');
     let b = printDetail.bind(userDetails6,'lucknow','mahua');
     console.log(a());
     console.log(b());