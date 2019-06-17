'use strict'

function breadthFirstSearch(graph, root) {
  const nodesLen = {}
  for(let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity
  }
  nodesLen[root] = 0
  const queue = [root]
  console.log('queue', queue)
  let curr
  while(queue.length != 0) {
    curr = queue.shift()
    console.log('curr', curr)
    const curConnected = graph[curr]
    console.log('curConnected', curConnected)
    const neighborIdx = []
    let index =  curConnected.indexOf(1)
    while(index != -1) {
      neighborIdx.push(index)
      index = curConnected.indexOf(1, index + 1)
    }
    console.log('neighborIdx' , neighborIdx)
    for(let j = 0; j < neighborIdx.length; j++) {
      if(nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[curr] + 1
        queue.push(neighborIdx[j])
      }
    }
  }
  return nodesLen
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(breadthFirstSearch(exBFSGraph, 1));
