var element = document.getElementById('test_el');
var hammertime = Hammer(element).on("tap", function(event) {
    alert('hello!');
});