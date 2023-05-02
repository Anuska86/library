async function getSalesAndStocks() {
  const response = await fetch('http://localhost:8000/finance/salesAndStocks');
  const data = await response.json();
  labels = [];
  stockValues = [];
  salesValues = [];
  for (i = 0; i < data.length; i++) {
     labels.push(data[i].title);
     stockValues.push(data[i].stock_value);
     salesValues.push(data[i].sales_value);
  }
  new Chart(document.getElementById("bar-chart"), {
     type: 'bar',
     data: {
        labels: labels,
        datasets: [
           {
              label: "Stock values",
              backgroundColor: "red",
              data: stockValues
           },
           {
            label: "Sales values",
            backgroundColor: "green",
            data: salesValues
         }
        ]
     },
     options: {
        legend: { display: true },
        title: {
           display: true,
           text: 'Stock/Sales per book'
        }
     }
  });
}

async function getTopBooks() {
  const response = await fetch('http://localhost:8000/finance/topBooks');
  const data = await response.json();
  labels = [];
  stockValues = [];
  for (i = 0; i < data.length; i++) {
     labels.push(data[i].title);
     stockValues.push(data[i].sales);
  }
  new Chart(document.getElementById("doughnut-chart"), {
     type: 'doughnut',
     data: {
      labels: labels,
      datasets: [{
        backgroundColor: barColors,
        data: stockValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Books by ranking"
      }
    }
  });
}

