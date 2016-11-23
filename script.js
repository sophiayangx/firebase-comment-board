var commentInput = $("#comment-input")
var commentDisplay = $(".comment-display")

commentInput.keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
  }
})

onNewListItem("whats-my-name-again", function(newComment) {
  commentDisplay.append("<span>" + newComment + "</span>")
})