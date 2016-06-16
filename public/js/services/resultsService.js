angular.module("nashdrop")
  .service("resultsService", function(SEARCH_URL, $http){
    let result = null;

    this.getDropoffLocation = () => $http.get(SEARCH_URL);

    this.getItem = item => $http.get(SEARCH_URL + item)
      .then(response => result = response.data);

    this.passToResults = item => result = item;

    this.getResults = () => result;
  });
