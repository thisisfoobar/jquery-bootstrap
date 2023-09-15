let movieList = [];
let movieId = 0;

// Take form inputs and add to table
$("#movie-form").on("submit", function (e) {
  e.preventDefault();
  movieId++;

  let movieData = {
    movieTitle: $("input[type=text]").val(),
    movieRating: $("input[type=num]").val(),
    movieId: movieId,
  };
  movieList.push(movieData);

  const appendHTML = createHTMLString(movieData);

  $("#movie-data-table").append(appendHTML);

  $("#movie-form").trigger("reset");
});

$(".fas").on("click", function (e) {
  let direction = $(e.target).hasClass("fa-sort-down") ? "down" : "up";
  let sortBy = $(e.target).attr("id");
  let moviesSorted = sortMovies(movieList, sortBy, direction);
    console.log($(e.target).hasClass("fa-sort-down"))
  $("#movie-data-table").empty();

  for (let movie of moviesSorted) {
    const appendHTML = createHTMLString(movie);

    $("#movie-data-table").append(appendHTML);
  }

  $(e.target).toggleClass("fa-sort-down");
  $(e.target).toggleClass("fa-sort-up");
});

function sortMovies(movieList, sortBy, direction) {
  return movieList.sort(function (a, b) {
    // since rating is a number, we have to convert these strings to numbers
    if (sortBy === "rating") {
      a[sortBy] = +a[sortBy];
      b[sortBy] = +b[sortBy];
    }
    if (a[sortBy] > b[sortBy]) {
      return direction === "up" ? 1 : -1;
    } else if (b[sortBy] > a[sortBy]) {
      return direction === "up" ? -1 : 1;
    }
    return 0;
  });
}

// click event for delete button
$("#movie-table").on("click", "button", function (e) {
  removeMovie(e.target.parentElement.parentElement);
});

// remove table row
function removeMovie(movie) {
  $(movie).remove();
}

// Creates HTML string to be added to table
function createHTMLString(data) {
  return `
    <tr>
        <td>${data.movieTitle}</td>
        <td>${data.movieRating}</td>
        <td>
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>`;
}
