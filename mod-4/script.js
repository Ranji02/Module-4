//j or J, you are to print out Goodbye JSomeName
//any other letter, you are to print out Hello SomeName


var speakWord1 = "Hello",speakWord2="Good Bye";
function speak(name){
	var firstLetter = name.charAt(0).toLowerCase();
	if (firstLetter === 'j') {
		console.log(speakWord2 + " " + name);
	}
	else{
		console.log(speakWord1 + " " + name);
	}
}

(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	speak(names[i]);
}
})();

