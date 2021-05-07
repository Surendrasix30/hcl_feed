import React,{Component} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'pie',
    options3d: {
        enabled: true,
        alpha: 25
    },
},
title: {
    text: 'Feedback'
},
plotOptions: {
    pie: {
        innerSize: 120,
        depth: 45
    },
},
series: [{
    name: 'Delivered amount',
    data: [
        ['VERY POOR', 8],
        ['POOR', 3],
        ['OK', 1],
        ['GOOD', 6],
        ['VERY GOOD', 8],
        ['TOTAL', 4],
    ]
}],
};

export default class NewCharts extends Component{
  render(){
    return (
      <HighchartsReact
      highcharts={Highcharts}
      options={options}
      height={80}
      width={50}
    />
    );
  }
}
