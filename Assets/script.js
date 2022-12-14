var cityFormEl = document.querySelector('#city-form');
var searchHistoryEl = document.querySelector('#search-history');
var cityInputEl = document.querySelector('#cityname');
var resultsContainerEl = document.querySelector('#results-container');
var citySearchTerm = document.querySelector('#city-search-term');

// when search button is clicked, results will display on the right
// search term will be in search history
// result will display cityname(today's date) icon representation, Temperature, wind, humidity on the top
// result will display 5 day forecast on the bottom


var formSubmitHandler = function (e) {
  e.preventDefault();

  var cityname = cityInputEl.value.trim();

  if (cityname) {
    getWeather(cityname);

    resultsContainerEl.textContent = '';
    cityInputEl.value = '';
  } else {
    alert('Please enter a city name');
  }
};

cityFormEl.addEventListener('submit', formSubmitHandler);

var getWeather = function (city) {
  var coordinateUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=43e9f965132c49cafd2c625109b0f45f';

  fetch(coordinateUrl)
    .then(function(response) {
      if (response.ok) {
        console.log(response);
      } else {
        alert('Error:' + response.statusText);
      }
    })
    .catch(function(error) {
      alert('Unable to connect to OpenWeather');
    })
  
  
  
  
  var apiUrl = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=43e9f965132c49cafd2c625109b0f45f';
}







// var getUserRepos = function (user) {
//   var apiUrl = 'https://api.github.com/users/' + user + '/repos';

//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, user);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to GitHub');
//     });
// };

// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

// var displayRepos = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('a');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';
//     repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//   }
// };

// userFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);
