export class Timeline {
    static ITimelineStardard = {
        baseOption: {
            timeline: {
                show: true,
                autoPlay: true,
                playInterval: 1000,
                data: [],
                top: 20,
                label: { formatter: null }
            },
            tooltip: {
                trigger: 'item',
                formatter: null,
            },
            title: [],
            series: []
        },
        options: []
    }
}