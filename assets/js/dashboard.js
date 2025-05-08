var options = {
  chart: {
    width: "100%",
    height: 380,
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  series: [
    {
      data: [10, 5, 2, 14],
    },
  ],
  xaxis: {
    categories: ["Pendrive", "SSD", "Carregador", "Memória RAM"],
  },
  legend: {
    position: "right",
    verticalAlign: "top",
    containerMargin: {
      left: 35,
      right: 60,
    },
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#responsive-chart"),
  options
);

chart.render();
