//SCOPE OF THIS
//agar koi this 'object literals ' me use ho raha hai to uska scope object hoga. agar 'object literal' me 
//defined kisi function me use ho raha hai to depend karega ki function call kaise ho raha hai. agar function ko call 
//object ke sath kar raha hai "object.funcname" to uska scope object bhar hi hoga. lekin agar function ko
// independent call kiya ja raha hai to uska scope global hoga .

//agar bas ek idependent function jo kisi object ke andar nai hai usme this use ho raha hai to uska scope
// global/window  hoga.

//agar constructor me ya constructor ke andar bane function me this use hoga to us this ka scope OBJECT me hi hoga

//example of this in function within object literals
const video = {
 title : 'a', 
 play : function play() {
  console.log(this); 
}
};
 video.play();//output = object scope

 //example of this in independent function
 function playVideo () { 
     console.log(this); 
    }
     playVideo();//output global scope

     //example of this in constructor function
     function Video(title) { 
         this.title = title; 
         console.log(this); 
        } 
        const v = new Video('b');//output = object

//example of this in foreachloop
const vids = { 
    title : 'a', 
    tags : ['a', 'b', 'c'], 
    showTags() {
     this.tags.forEach(function (tag) { 
         console.log(this, tag); // here this will return window/global scope
        }); 
    }
    }
    vids.showTags();
    //title with the tag in above example
    const vid = { 
        title : 'a', 
        tags : ['a', 'b', 'c'], 
        showTags() {
         this.tags.forEach(function (tag) { 
             console.log(this, tag); // here this will return  object scope. yaha this ko this.title 
             //kar sakte hai agar bas title print karwana hai pura object ke jagah par or foreach ka element to rahrga hi
         },this); //uper wale this ka sope global/window hoga agar yaha this na likhe to
        }
        }
        vid.showTags();