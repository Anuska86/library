(function() {
  getSalesAndStocks();
})()

function getSalesAndStocks() {
  fetch(`http://localhost:8000/finance/salesAndStocks`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
.catch(function(err) {
    console.info(err);
});
}

