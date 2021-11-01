


var initPcCharts = function () {
    var charts = echarts.init(document.getElementById('charts-pc'))
    var option = {
        title: {
            text: '收益模拟'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['成本费用', '收入', '收益率']
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
            type: 'value',
            name: '金额（元）',
            min: 0,
            max: 10000,
            axisLabel: {
                formatter: '{value} 元'
            }
            },
            {
            type: 'value',
            name: '收益率（%）',
            min: 0,
            max: 100,
            axisLabel: {
                formatter: '{value} %'
            }
            }
        ],
        series: [
            {
                name: '成本费用',
                type: 'bar',
                barWidth : 15,
                data: [
                    4000, 4000, 4000, 6200, 6200, 5000, 5000, 6000, 6200, 5800, 5600, 5400
                ],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4188F3'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }]),
                        barBorderRadius: [7, 7, 0, 0]
                    }
                }
            },
            {
            name: '收入',
            type: 'bar',
            barWidth : 15,
            data: [
                3000, 3000, 3000, 3000, 4200, 4200, 4200, 4200, 7000, 7200, 7000, 8500
            ],
            itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FDB32A'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }]),
                        barBorderRadius: [7, 7, 0, 0]
                    }
            }
            },
            {
            name: '收益率',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: 'rgb(255, 131, 110)',
                    lineStyle: {
                        color: 'rgb(255, 131, 110)'
                    }
                }
            },
            yAxisIndex: 1,
            data: [25, 40, 45, 50, 60, 70, 70, 70, 75, 80, 85, 85]
            }
        ]
    }

    if (charts) charts.resize()
    charts.setOption(option, true)
}


var initMoblieCharts = function () {
    
}


if (window._config_.isMoblie) {
    initMoblieCharts()
} else {
    if (!window._config_.map.initPcCharts) {
        window._config_.map.initPcCharts = initPcCharts
    }
}