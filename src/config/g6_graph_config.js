import G6 from '@antv/g6';


export function initDefaultGraph(width, height, boxId) {
    const graph = new G6.Graph({
        container: boxId,
        width,
        height,
        modes:{
          default:['drag-node']
        },
        fitView: true,
        fitViewPadding: [18, 18, 18, 18],
        layout: {
            type: 'dagre',
            rankdir: 'TB', // 可选，默认为图的中心
            // nodesep: 90, // 可选
            // ranksep: 20, // 可选
            controlPoints: true, // 可选
        },
        defaultNode: {
            type: 'circle',
            icon: {
                show: true,
                img: require('@/assets/fpga.png'),
                // text: '...', 使用 iconfont
                width: 120,
                height: 120,
                cursor: 'pointer',
            },
            size: [130, 130],
            linkPoints: {},
            style: {
                fill: 'transparent',
                stroke: 'transparent',
                lineWidth: 3,
            },
            labelCfg: {
                position: 'top',
                offset: 5,
                style: {
                    cursor: 'pointer',
                    fontSize: 30,
                    fill: 'rgba(0,0,0,0.65)',
                },
            },
        },
        defaultEdge: {
            // type: 'polyline',
            style: {
                radius: 100,
                offset: 45,
                // endArrow: true,
                lineWidth: 3,
                stroke: '#000000',
            },
        },
    });

    return graph;
}
