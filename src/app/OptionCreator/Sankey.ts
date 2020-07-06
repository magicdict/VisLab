export class Sankey {
  static ISankeyStardard = {
    title: {
      text: '桑基图'
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: {
      type: 'sankey',
      layout: 'none',
      focusNodeAdjacency: 'allEdges',
      data: [],
      links: []
    }
  }
}