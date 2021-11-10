var container = document.getElementById('echarts')
var myChartChina = echarts.init(container)
echarts.registerMap('china', china)

var place = ["上海", "浙江", "北京", "河南", "安徽", "江苏", "山东", "福建"]

var all = {
    "options": [{
        "series": [{
            "data": [ {
                "name": "上海",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FF7B63"
                    },
                    "normal": {
                        "areaColor": "#FF7B63"
                    }
                }
            },{
                "name": "浙江",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FFB528"
                    },
                    "normal": {
                        "areaColor": "#FFB528"
                    }
                }
            }, {
                "name": "北京",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FF7B63"
                    },
                    "normal": {
                        "areaColor": "#FF7B63"
                    }
                }
            },{
                "name": "河南",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FFEECC"
                    },
                    "normal": {
                        "areaColor": "#FFEECC"
                    }
                }
            },{
                "name": "安徽",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FEE78F"
                    },
                    "normal": {
                        "areaColor": "#FEE78F"
                    }
                }
            }, {
                "name": "江苏",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FEE78F"
                    },
                    "normal": {
                        "areaColor": "#FEE78F"
                    }
                }
            }, {
                "name": "山东",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FEE78F"
                    },
                    "normal": {
                        "areaColor": "#FEE78F"
                    }
                }
            }, {
                "name": "福建",
                "value": "<p>合伙人： JUSHI-Partner</p><p>联系电话：888888888</p><p style='width: 200px;'>地址：情地址详情地址详情地<br />址详情地址详情</p><img style='width: 150px;height: 150px;position: absolute;top: 5px; right:5px' src='/images/qr.png' />",
                "itemStyle": {
                    "emphasis": {
                        "areaColor": "#FFEECC"
                    },
                    "normal": {
                        "areaColor": "#FFEECC"
                    }
                }
            }],
            "label": {
                "emphasis": {
                    "show": false
                },
                "normal": {
                    "show": false
                }
            },
            "mapType": "china",
            "roam": false,
            "type": "map"
        }],
    }]
};

if (!window._config_.isMobile) {
    option = {
        baseOption: {
            timeline: {
                show: false,
            },
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'item',
                formatter: function (res) {
                    if (place.indexOf(res.name) == -1) return res.name 
                    var html = '<div style="min-height: 140px; box-sizing: border-box; padding: 5px 130px 5px 5px;background: #fff;">'
                             + '    <p style="font-weight: bold">'+ res.name +'</p>'
                             + res.data.value
                             + '<div>'
                    return html
                }
            },
            series: [],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
        },
        grid: {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        options: all.options
    }
    myChartChina.setOption(option)
} else {
    option = {
        baseOption: {
            timeline: {
                show: false,
            },
            backgroundColor: '#F5F5F5',
            series: [],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
        },
        grid: {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        options: all.options
    }
    myChartChina.setOption(option)
    myChartChina.on('click', function (item) {
        if (!item.data) return
        $('.partner-detail').html('<p class="partner-title">'+ item.name +'</p>' + item.data.value)
    })
}

