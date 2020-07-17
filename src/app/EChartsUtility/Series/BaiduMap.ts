import { OptionBase } from "../OptionBase";

export interface BMapConfig {
    // 百度地图中心经纬度
    center: number[];
    // 百度地图缩放
    zoom: number;
    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
    roam: boolean;
    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    mapStyle: {
        styleJson: any;
    }
}

export class BaiduMapUtility {
    public static CreateMapOption() {
        let o = new OptionBase();
        o.bmap = {
            center: [110.3373, 20.0303],
            zoom: 15,
            roam: true,
            mapStyle: {
                styleJson: BaiduMapUtility.defaultstylejson
            }
        };
        o.series = [];
        return o;
    }
    public static defaultstylejson = [{
        'featureType': 'water',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    }, {
        'featureType': 'land',
        'elementType': 'all',
        'stylers': {
            'color': '#f3f3f3'
        }
    }, {
        'featureType': 'railway',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    }, {
        'featureType': 'highway',
        'elementType': 'all',
        'stylers': {
            'color': '#fdfdfd'
        }
    }, {
        'featureType': 'highway',
        'elementType': 'labels',
        'stylers': {
            'visibility': 'off'
        }
    }, {
        'featureType': 'arterial',
        'elementType': 'geometry',
        'stylers': {
            'color': '#fefefe'
        }
    }, {
        'featureType': 'arterial',
        'elementType': 'geometry.fill',
        'stylers': {
            'color': '#fefefe'
        }
    }, {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': {
            'visibility': 'on'
        }
    }, {
        'featureType': 'green',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    }, {
        'featureType': 'subway',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    }, {
        'featureType': 'manmade',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    }, {
        'featureType': 'local',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    }, {
        'featureType': 'arterial',
        'elementType': 'labels',
        'stylers': {
            'visibility': 'off'
        }
    }, {
        'featureType': 'boundary',
        'elementType': 'all',
        'stylers': {
            'color': '#fefefe'
        }
    }, {
        'featureType': 'building',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    }, {
        'featureType': 'label',
        'elementType': 'labels.text.fill',
        'stylers': {
            'color': '#999999'
        }
    }]
}