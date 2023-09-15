/* 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
3. Remove the last paragraph in the article.
4. Set the font size of the title to be a random pixel size from 0 to 100.
5. Add an item to the list; it can say whatever you want.
6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
8. Add an event listener so that when you click on the image, it is removed from the DOM. */

console.log("Let's get ready to party with jQuery!");

$("article img").addClass("image-center");

$("article p").last().remove();

const newTitleSize = Math.round(Math.random() * 100);

$("#title").css("font-size", newTitleSize);

$("ol").append("<li>I'm a new list item!</li>");

$("aside")
  .empty()
  .append("<p>My apologies, this list should not have existed.</p>");

$("input[type=number]").on("keyup", function () {
  let bkrdColor = ''
  $("input[type=number]").each(function() {
    bkrdColor = `${bkrdColor},${$(this).val()}`
  })
  bkrdColor = bkrdColor.slice(1)
  $('body').css('background-color',`rgb(${bkrdColor})`)
});

$('img').on("click",function(){
    $(this).remove()
})
