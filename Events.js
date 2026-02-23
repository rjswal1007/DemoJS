// Events 

// 1 CLick Events

<button id="btn">Click Me</button>

document.getElementById("btn").addEventListener("click", function() {
   console.log("Button clicked!");
});

// Double click

document.getElementById("btn").addEventListener("dblclick", () => {
   console.log("Double click!");
});


// 2 Input Event 

<input id="name" type="text" />

document.getElementById("name").addEventListener("input", function() {
   console.log("Typing...");
});

// 3 Change Event

<select id="city">
   <option>Delhi</option>
   <option>Mumbai</option>
</select>


document.getElementById("city").addEventListener("change", function() {
   console.log("City changed!");
});

// 4 Form Submit

<form id="form">
   <input type="text" />
   <button>Submit</button>
</form>

document.getElementById("form").addEventListener("submit", function(e) {
   e.preventDefault(); // stop page refresh
   console.log("Form submitted");
});

// 5 addEventListener

element.addEventListener("event", function (){});

document.getElementById("btn").addEventListener("click", function(e) {
   console.log(e);
});