function myFunction(){
var text;
fruits=document.getElementById("myInput").value;
switch(fruits){
    case "banana":
        document.write("banana is good");
        break;
    case "orange":
        text="i am not a fan of orange.";
        break;
    case "apple":
        text="apple is red";
        break;
    default:
        text="i have never heard of that fruits.......";
}
  document.getElementById("demo").innerHTML=text;
}