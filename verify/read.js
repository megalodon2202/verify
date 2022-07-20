//READ EMPLOYEE DB USING D3
d3.csv("data.csv").then(function (data) {
  var doc = data;
  var button = d3.select("#button");//button
  var form = d3.select("#form");//user input

  button.on("click", process);
  form.on("submit", process);

  function process() {
    d3.select("tbody").html("")
    d3.selectAll("error").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toLowerCase().trim();


    //If input is less than 8
    if (inputValue.length < 8){
      d3.select("error").classed('noresults', true).html("Error: Invalid Authentication ID !!!")
      inputValue = "false"
    }
    var refinedText = doc.filter(doc => doc.uid.toLowerCase().trim().includes(inputValue));

	//If input is empty
    if (refinedText.length === 0 && inputValue !== "false"){
      d3.select("error").classed('noresults', true).html("Error: Invalid Authentication ID !!!")
    }

    for (var i = 0; i < refinedText.length; i++) {
      d3.select("tbody").insert("tr").html("<td>"+(refinedText[i]['uid'])+"</td>"+"<td>"+(refinedText[i]['name'])+ "</td>" +"<td>" +(refinedText[i]['position'])+"</td>" +"<td>" +(refinedText[i]['start'])+"</td>"  +"<td>" +(refinedText[i]['end'])+"</td>"+"<td>" +(refinedText[i]['profile'])+"</td>") }
  };
  window.resizeTo(screen.width,screen.height)
});
