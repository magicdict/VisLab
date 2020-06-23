export class PolarOption {
    static IPolarStardard = {
        angleAxis: {
            type: 'category',
            data: [],   //整体数据要设定一下，不然数据将越过坐标范围
            z: 10,
            interval: 50
        },
        title: {
            text: ""
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        radiusAxis: {
        },
        polar: {
            radius: '70%'
        },
        series: [],
        legend: {
            //show: true,
            //top: 30,
            data: []
        }
    };


    static PolarItem = {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '',
        stack: 'stackname'
    }
}