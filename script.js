const ctx = document.getElementById('myChart');
const data = {
    labels: [
      'January',
      'February',
      'March',
      'April'
    ],
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(0, 255, 255)'
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
    }]
  };



  new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   new
const ctx1 = document.getElementById('myChart1');
const data1 = {
    labels: [
      'me',
      'you',
      'we',
      'they',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(226, 199, 166)',
        'rgb(78, 200, 300)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)'
      ]
    }]
  };




  new Chart(ctx1, {
    type: 'polarArea',
    data: data1,
    options: {
    }
  });
