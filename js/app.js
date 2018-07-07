var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "My First dataset",
                // backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 34, 56, 45, 34, 56],
            },
            {
                label: "My second dataset",
                // backgroundColor: 'rgb(25, 99, 132)',
                fill: false,
                borderColor: 'rgb(25, 99, 132)',
                data: [5, 5, 5, 2, 20, 40, 45, 67, 23, 79, 31, 58],
            }
        ]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        }
    }
});