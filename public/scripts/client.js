/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const data = [
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac",
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants",
//     },
//     created_at: 1461116232227,
//   },
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd",
//     },
//     content: {
//       text: "Je pense , donc je suis",
//     },
//     created_at: 1461113959088,
//   },
// ];



$(document).ready(function () {

  const createTweetElement = function (tweet) {
    //article has to be the outside type
    let $tweet = ` 
    <section class='tweet'>
  <article>
    <header>
      <div class='avatar'>
      <img src=${tweet.user.avatars}>
      <h3>${tweet.user.name}</h3>
      </div>
      <h4 id='username'>${tweet.user.handle}</h4>
    </header>
    <main>
            <p>
              ${tweet.content.text}
            </p>
          </main>
          <footer id='tweet-foot'>
            <div class='foot-content'>
            <p>${timeago.format(tweet.created_at)}</p>
            <div id='icons'>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-repeat"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          </footer>
        </article>
        </section>
      `;
    return $tweet;
  };

  const renderTweets = function (arr) {
    const $container = $(".container");
    $.each(arr, (key) => {
      $container.append(createTweetElement(arr[key]));
    });
    return $container;
  };
  

  //Submit form

  $( ".textarea" ).submit(function( event ) {
   
    
    event.preventDefault();
    console.log('serialzied:', $( this ).serialize() );

    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      data: $( this ).serialize()
    })
  });

  //fetching tweets from /tweets page

  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets',
    })
    .then(function (tweet) {
      renderTweets(tweet);
  });
  }
  loadTweets()
});

