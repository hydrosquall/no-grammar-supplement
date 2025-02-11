const inputs = {
  min: -100,
  max: 100,
  count: 8,
  decimals: 2,
  continuity: 1
};

const generateLabels = () => {
  return Utils.months({count: inputs.count});
};

const generateData = () => (Utils.numbers(inputs));

const data = {
  labels: generateLabels(),
  datasets: [
    {
      label: 'Dataset',
      data: generateData(),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
      fill: false
    }
  ]
};

let smooth = false;

const actions = [
  {
    name: 'Fill: false (default)',
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.fill = false;
      });
      chart.update();
    }
  },
  {
    name: 'Fill: origin',
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.fill = 'origin';
      });
      chart.update();
    }
  },
  {
    name: 'Fill: start',
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.fill = 'start';
      });
      chart.update();
    }
  },
  {
    name: 'Fill: end',
    handler: (chart) => {
      chart.data.datasets.forEach(dataset => {
        dataset.fill = 'end';
      });
      chart.update();
    }
  },
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = generateData();
      });
      chart.update();
    }
  },
  {
    name: 'Smooth',
    handler(chart) {
      smooth = !smooth;
      chart.options.elements.line.tension = smooth ? 0.4 : 0;
      chart.update();
    }
  }
];

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
      }
    },
    interaction: {
      intersect: false,
    }
  },
};

module.exports = {
  actions: actions,
  config: config,
};
