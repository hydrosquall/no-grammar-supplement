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
      title: {
        display: true,
        text: 'Chart Title',
      },
      subtitle: {
        display: true,
        text: 'Chart Subtitle',
        color: 'blue',
        font: {
          size: 12,
          family: 'tahoma',
          weight: 'normal',
          style: 'italic'
        },
        padding: {
          bottom: 10
        }
      }
    }
  }
};

module.exports = {
  config: config,
};
