async function getSalesAndStocks() {
  const response = await fetch('http://localhost:8000/finance/salesAndStocks');
  const data = await response.json();
  labels = [];
  stockValues = [];
  salesValues = [];
  for (i = 0; i < data.length; i++) {
    let formattedTitle = '';
    if(data[i].title.length>30){
      formattedTitle = data[i].title.slice(0, 30)+' ...';
    }else{
      formattedTitle = data[i].title;
    }
     labels.push(formattedTitle);
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
              backgroundColor: "#6b9080",
              data: stockValues
           },
           {
            label: "Sales values",
            backgroundColor: "#a4c3b2",
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
  
  var barColors = [];
  for (let i = 0; i < 100; i++) {
    color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    barColors.push(color);
  }
  const response = await fetch('http://localhost:8000/finance/topBooks');
  const data = await response.json();
  labels = [];
  salesValues = [];
  for (i = 0; i < data.length; i++) {
     labels.push(data[i].title);
     salesValues.push(data[i].sales);
  }
  new Chart(document.getElementById("doughnut-chart"), {
     type: 'doughnut',
     data: {
      labels: labels,
      datasets: [{
        backgroundColor: barColors,
        data: salesValues
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

async function getTopCategories() {
  const response = await fetch('http://localhost:8000/finance/topCategories');
  const data = await response.json();
  labels = [];
  salesValues = [];
  for (i = 0; i < data.length; i++) {
     labels.push(data[i].name);
     salesValues.push(data[i].sales);
  }
  new Chart(document.getElementById("categories-chart"), {
     type: 'line',
     data: {
      labels: labels,
      datasets: [{
        label: "Number of",
        borderColor: "#6b9080",
        data: salesValues,
        fill: false
      }]
    },
    options: {
      title: {
        display: true,
        text: "Categories by sales"
      }
    }
  });
}