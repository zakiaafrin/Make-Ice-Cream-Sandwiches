// h1 tag
var title = document.createElement("h1");
title.innerHTML = "Making Ice Cream Sandwiches";
document.body.appendChild(title);
title.style.color = "orange";
// p tag
var para1 = document.createElement("p");
para1.innerHTML = "Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
document.body.appendChild(para1);
para1.style.fontSize = "20px";
// div
var div = document.createElement("div");
div.style.backgroundColor = "orange";
div.style.padding = "20px";

// h3 tag
var header3 = document.createElement("h3");
header3.innerHTML = "Ingredients";
div.appendChild(header3);
document.body.appendChild(div);

// ul tag
var ulTag = document.createElement("ul");

var li1 = document.createElement("li");
li1.innerHTML = "Cookies and Cream ice cream";
ulTag.appendChild(li1);
var li2 = document.createElement("li");
li2.innerHTML = "Large chocolate chip cookies";
ulTag.appendChild(li2);
var li3 = document.createElement("li");
li3.innerHTML = "M&M's minis";
ulTag.appendChild(li3);
var li4 = document.createElement("li");
li4.innerHTML = "Reese's mini peanut butter cups";
ulTag.appendChild(li4);
div.appendChild(ulTag);
document.body.appendChild(div);
// alert("hi");

// img tag
var pic1 = document.createElement("img");
pic1.src = "ice-cream.JPG";
document.body.appendChild(pic4);
pic4.style.width = "24%";

// p tag
var para2 = document.createElement("p");
para2.innerHTML = "For more information about this recipe, please visit ";
// link tag
var link = document.createElement("a");
link.href = "https://www.tasteofhome.com/recipes/candy-craze-ice-cream-sandwiches/";
link.innerHTML = "The Taste of Home website";
para2.appendChild(link);
document.body.appendChild(para2);