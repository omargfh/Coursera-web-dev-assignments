document.addEventListener("DOMContentLoaded", function (event) {

	document.getElementById("nav-button").addEventListener("click", function() {
	var element = document.getElementById("header-background");
	var elementOther = document.getElementById("toggle-nav");
	element.classList.toggle("hidden");
	elementOther.classList.toggle("hidden");
	elementOther.classList.toggle("header");
	elementOther.classList.toggle("header-mini");
	});

	var searchBar = document.getElementById("search-bar");
	var searchBarText = document.getElementById("search-bar-text");

	document.getElementById("search-bar-text").addEventListener("click", function() {
		searchBarText.classList.add("hidden");
		searchBar.classList.add("animate-search-bar");
	});

	// document.querySelector("body").addEventListener("click", function() {
	// 	searchBarText.classList.remove("hidden");
	// });


})

