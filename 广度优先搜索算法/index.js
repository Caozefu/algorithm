class BFS {
    constructor() {
        this.map = new Map();
        this.map.set('A', ['B', 'C']);
        this.map.set('B', ['E']);
        this.map.set('C', ['D', 'F']);
        this.map.set('E', ['H']);
        this.map.set('D', ['E']);
        this.map.set('F', ['G']);
        this.map.set('G', ['H']);
        this.map.set('H', []);
    }
    findTarget(start, end, map) {
        const startTime = new Date().getTime();
        const quene = [];
        quene.push(new Node(start, null));
        while(quene.length) {
            let node = quene.shift();
            if (node.id === end) {
                this.printPath(node);
                break;
            }
            map.get(node.id).forEach(item => {
                quene.push(new Node(item, node));
            })
        }
        const endTime = new Date().getTime();
        return endTime - startTime;
    }
    printPath (node) {
        let res = node;
        let arr = [];
        do {
            arr.unshift(res);
            res = res.parent;
        } while(res);
        let path = '';
        arr.forEach(item => {
            path += item.id + '=>';
        });
        console.log(path);
    }
}

class Node {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;
    }
}

let demo = new BFS();
console.log(demo.findTarget('A', 'H', demo.map));
