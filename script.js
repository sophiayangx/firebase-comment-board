console.log("hi")

var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")
//
//commentInput.keydown(function(e) {
//  if (e.keyCode == "13") {
//    addListItem("comments", commentInput.val());
//  }
//})
//
//onNewListItem("comments", function(newComment) {
//  commentDisplay.append("<div>" + newComment + "</div>")
//})

commentInput.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("sophiasList", valueToSave);
  }
})

onNewListItem("sophiasList", function(value) {
  $("#firebase-display").append("<div>" + value + "</div>")
}) 