// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo

// can also add ?per_page=5 to select results  This would be faster in case there are tons of data
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // for loop over twitter
    for (var i = 0; i < 5; i++){
      // create a item var
      var twitter = data[i];
      // console log data 5 times.
      // also could console.log(data[i].user.login)
      console.log(twitter.user.login)
      // could also console.log(data[i].twitter.url)
      console.log(twitter.url)
    }

    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
  });
