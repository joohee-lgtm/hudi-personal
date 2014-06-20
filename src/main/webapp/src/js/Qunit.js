QUnit.test("equal test", function(assert) {
	assert.equal(setUrl(1), "/collageJam/result?id=1", "equalSuccess");
	assert.equal(setUrl(), "/collageJam/main", "equalSuccess");
});

function setUrl(id) {
	var front = "/collageJam";
	var middle = "";
	var rear = "";
	if (!isNaN(id)) {
		middle = "/result?id=";
		rear = id.toString();
	} else {
		middle = "/main";
		rear = "";
	}
	return front + middle + rear;
}