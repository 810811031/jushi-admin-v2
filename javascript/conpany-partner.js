console.log(_china)

var container = document.getElementById('echarts')
var myChartChina = echarts.init(container)
echarts.registerMap('china', _china)

var optionMap = {
    color:"#CAE6FF",
    selectedMode: 'single',
    grid: {
        top: '4%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series : [
        {
            name: '',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            itemStyle: {
                normal:{
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth:1,
                    borderColor:'#e1e1e1',
                    areaStyle: {
                        color: '#red',//默认的地图板块颜色
                    },
                },
                emphasis:{
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.15)'
                },
            },
            showLegendSymbol: true,
            label: {
                normal: {  
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: '#666'
                    }
                },
                emphasis: {
                    show: true
                }
            }, 
            data:[
                { name: '河南省', selected: true },
                { name: '山东省', selected: true },
                { name: '安徽省', selected: true },
                { name: '福建省', selected: true },
                { name: '浙江省', selected: true },
                { name: '江苏省', selected: true },
                { name: '上海市', selected: true },
                { name: '北京市', selected: true },
            ]
        }
    ]
}

myChartChina.setOption(optionMap)