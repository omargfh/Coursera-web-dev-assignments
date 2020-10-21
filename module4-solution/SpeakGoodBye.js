(function (window) {

var speakWord = "Goodbye";

var byeSpeaker = {};
byeSpeaker.speak = function(name) {
	console.log(speakWord + " " + name);
}
 window.byeSpeaker = byeSpeaker;

})(window);

