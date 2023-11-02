function initialize() {
  tableau.extensions.initializeAsync().then(
    function () {
	  var dashboard = tableau.extensions.dashboardContent.dashboard;
	  document.getElementById("output").innerHTML = "It is <strong>" + dashboard.name + "</strong>";
    }, 
    function (err) {
	  document.getElementById("output").innerHTML = "Failed: " + err.toString();
    }
  );
}