<script lang="ts" setup>
import { ref } from 'vue'
import {
  MiniMap,
  Controls,
  Background,
  Panel,
  PanelPosition
} from '@vue-flow/additional-components'
import { VueFlow, isNode, useVueFlow, Elements, MarkerType } from '@vue-flow/core'

const elements = ref<Elements>([
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
  { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 } },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
  { id: '4', label: 'Node 4', position: { x: 150, y: 200 } },
  { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  {
    id: 'e1-3',
    label: 'edge with arrowhead',
    source: '1',
    target: '3',
    markerEnd: MarkerType.Arrow
  },
  {
    id: 'e4-5',
    type: 'step',
    label: 'step-edge',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' }
  },
  { id: 'e3-4', type: 'smoothstep', label: 'smoothstep-edge', source: '3', target: '4' }
])
const {
  onPaneReady,
  onNodeDragStop,
  onConnect,
  instance,
  addEdges,
  store,
  getNodes,
  nodes,
  onNodeClick
} = useVueFlow()

onPaneReady(({ fitView }) => {
  fitView()
})
onNodeDragStop((e) => console.log('drag stop', e))
onConnect((params) => addEdges([params]))

onNodeClick((e) => {
  console.log(e)
})

const updatePos = () =>
  elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 400,
        y: Math.random() * 400
      }
    }
  })

const logToObject = () => console.log(instance.value?.toObject())
const resetTransform = () => instance.value?.setTransform({ x: 0, y: 0, zoom: 1 })
const toggleclass = () =>
  elements.value.forEach((el) => (el.class = el.class === 'light' ? 'dark' : 'light'))

const addNode = () => {
  const newNode = {
    id: (elements.value.length + 1).toString(),
    type: 'default',
    data: { label: `Node ${elements.value.length + 1}` },
    position: { x: Math.random() * 400, y: Math.random() * 400 }
  }
  elements.value.push(newNode)
}

const removeNode = () => {
  if (elements.value.length > 0) {
    const removedNode = elements.value.pop()
    elements.value = elements.value.filter(
      (edge) => edge.source !== removedNode.id && edge.target !== removedNode.id
    )
  }
}
</script>
<template>
  <div style="height: 100vh">
    <VueFlow
      v-model="elements"
      class="vue-flow-basic-example"
      :default-zoom="1.5"
      :min-zoom="0.2"
      :max-zoom="4"
    >
      <Background pattern-color="#aaa" gap="8" />

      <MiniMap />

      <Controls />

      <Panel :position="PanelPosition.TopRight">
        <button style="margin-right: 5px" @click="addNode">Add Node</button>
        <button style="margin-right: 5px" @click="removeNode">Remove Node</button>
        <button style="margin-right: 5px" @click="resetTransform">reset transform</button>
        <button style="margin-right: 5px" @click="updatePos">change pos</button>
        <button style="margin-right: 5px" @click="toggleclass">toggle class</button>
        <button @click="logToObject">toObject</button>
      </Panel>
    </VueFlow>
  </div>
</template>
