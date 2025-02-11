function triggerHover(chart) {
  if (chart.getActiveElements().length > 0) {
    chart.setActiveElements([]);
  } else {
    chart.setActiveElements([
      {
        datasetIndex: 0,
        index: 0,
      }, {
        datasetIndex: 1,
        index: 0,
      }
    ]);
  }
  chart.update();
}

function triggerTooltip(chart) {
  const tooltip = chart.tooltip;
  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], {x: 0, y: 0});
  } else {
    const chartArea = chart.chartArea;
    tooltip.setActiveElements([
      {
        datasetIndex: 0,
        index: 2,
      }, {
        datasetIndex: 1,
        index: 2,
      }
    ],
    {
      x: (chartArea.left + chartArea.right) / 2,
      y: (chartArea.top + chartArea.bottom) / 2,
    });
  }

  chart.update();
}

const actions = [
  {
    name: 'Trigger Hover',
    handler: triggerHover
  },
  {
    name: 'Trigger Tooltip',
    handler: triggerTooltip
  }
];

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      hoverBorderWidth: 5,
      hoverBorderColor: 'green',
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      hoverBorderWidth: 5,
      hoverBorderColor: 'green',
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
  },
};

module.exports = {
  actions: actions,
  config: config,
};
