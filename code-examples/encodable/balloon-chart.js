<Frame width={360} height={270} background="#A8E6FF">
  <BalloonPlot
    width={360}
    height={270}
    encoding={{
      x: {field: 'category', type: 'nominal', scale: {type: 'point'}},
      y: {
        field: 'profit',
        type: 'quantitative'
      },
      size: {
        field: 'marketingCost',
        type: 'quantitative',
        scale: {zero: true, range: [0, 2500]}
      },
      color: {
        field: 'category',
        type: 'nominal',
        scale: {
          range: ['#42B537', '#F08900', '#E5090B', '#9E4DFF']
        }
      },
      text: {field: 'category'},
      text2: {field: 'profit', format: ',d'}
    }}
    data={[
      {
        category: 'Toys',
        marketingCost: 100,
        profit: 4000
      },
      {
        category: 'Office supplies',
        marketingCost: 200,
        profit: 3000
      },
      {
        category: 'Grocery',
        marketingCost: 400,
        profit: 2000
      },
      {
        category: 'Electronics',
        marketingCost: 300,
        profit: 6000
      },
      {
        category: 'Clothing',
        marketingCost: 400,
        profit: 1500
      }
    ]}
  />
</Frame>;
