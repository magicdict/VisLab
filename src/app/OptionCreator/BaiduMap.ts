import { Chart2D } from "./OptionBase";

export class BaiduMapOption extends Chart2D {
    public static CreateMapOption() {
        let o = new BaiduMapOption();
        o.series = [];
        return o;
    }
    public bmap: any = {
        center: [110.3373, 20.0303],
        zoom: 15,
        roam: true,
        mapStyle: {
            styleJson: BaiduMapOption.defaultstylejson
        }
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