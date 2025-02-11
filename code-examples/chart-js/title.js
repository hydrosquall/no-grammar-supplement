const actions = [
  {
    name: 'Title Position: start',
    handler(chart) {
      chart.options.plugins.legend.align = 'start';
      chart.options.plugins.legend.title.position = 'start';
      chart.update();
    }
  },
  {
    name: 'Title Position: center (default)',
    handler(chart) {
      chart.options.plugins.legend.align = 'center';
      chart.options.plugins.legend.title.position = 'center';
      chart.update();
    }
  },
  {
    name: 'Title Position: end',
    handler(chart) {
      chart.options.plugins.legend.align = 'end';
      chart.options.plugins.legend.title.position = 'end';
      chart.update();
    }
  },
];


const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
const data = {
  labels: Utils.months({count: DATA_COUNT}),
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        title: {
          display: true,
          text: 'Legend Title',
        }
      }
    }
  }
};

module.exports = {
  actions: actions,
  config: config,
};
