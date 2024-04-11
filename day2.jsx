// import { useRef } from 'react'
// import * as THREE from 'three'
// import { OrbitControls, ContactShadows, Stage, Stats } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'
// import { useControls } from 'leva'

// export default function Experience() {
//     const cubeRef = useRef()
//     const sphereRef = useRef()
//     const lightRef = useRef()
//     const shadowCameraRef = useRef()

//     // const { enabled, ...config } = useControls({
//     //     enabled: true,
//     //     size: { value: 25, min: 0, max: 100 },
//     //     focus: { value: 0, min: 0, max: 2 },
//     //     samples: { value: 10, min: 1, max: 20, step: 1 }
//     // })

//     // useHelper(lightRef, THREE.DirectionalLightHelper, 0.5)

//     const { ...args } = useControls('contact shadow', {
//         color: '#1d8f75',
//         opacity: { value: 0.4, min: 0, max: 1 },
//         blur: { value: 2.8, min: 0, max: 10 },
//         })

//     // const scene = useThree((state) => state.scene)

//     // useEffect(() => {
//     //     shadowCameraRef.current = new THREE.CameraHelper(lightRef.current.shadow.camera)
//     //     scene.add(shadowCameraRef.current)
//     //     return () => {
//     //         scene.remove(shadowCameraRef.current)
//     //     }
//     // }, [lightRef.current])

//     // useFrame((state, delta) => {
//     //     cubeRef.current.rotation.y += delta
//     // })

//     // useFrame(() => {
//     //     shadowCameraRef.current.update()
//     // })

//     return <>
//         <Stats />
//         <OrbitControls enableDamping={false} />
//         <ambientLight intensity={0.5} />
//         <directionalLight ref={lightRef}
//             shadow-mapSize={[1024, 1024]}
//             shadow-camera-near={8}
//             shadow-camera-far={10}
//             shadow-camera-top={10}
//             shadow-camera-bottom={-10}
//             shadow-camera-right={10}
//             shadow-camera-left={-10}
//             position={[1, 2, 3]} intensity={1.5} />

//         <group>
//             <mesh ref={sphereRef} position={-5,0,0} >
//                 <sphereGeometry />
//                 <meshStandardMaterial color="#82E0AA" />
//             </mesh>
//             <mesh ref={cubeRef} position-x={2} scale={1.5} >
//                 <boxGeometry />
//                 <meshStandardMaterial color="#F9E79F" />
//             </mesh>
//             {/* <mesh position-y={-1} rotation-x={THREE.MathUtils.degToRad(-90)} scale={10} receiveShadow>
//                 <circleGeometry />
//                 <meshStandardMaterial color="#5D6D7E" />
//             </mesh> */}
//         </group>

//         {/* <AccumulativeShadows
//             frames={Infinity}
//             temporalblend={ 100 }
//             position={[0, -0.99, 0]} 
//             scale={20} 
//             color="#316d39" 
//             opacity={0.4}>

//             <RandomizedLight
//                 amount={ 8 }
//                 radius={ 1 }
//                 ambient={ 0.5 }
//                 intensity={ 1 }
//                 position={ [ 1, 2, 3 ] }
//                 bias={ 0.001 }
//             />
//         </AccumulativeShadows>
//         { enabled && <SoftShadows {...config} />}
//     </> */}

//         <ContactShadows position={[0, -0.99, 0]} scale={10}
//             resolution={512} far={5}
//             frames={Infinity}
//             {...args}
//         /> </>
// }

// import { useRef } from 'react'
// import * as THREE from 'three'
// import { Environment, OrbitControls, Stage } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
// import { useControls } from 'leva'


// export default function Experience() {
//     const cubeRef = useRef()
//     const sphereRef = useRef()

//     const { intensity } = useControls({
//         intensity: {
//         value: 1, min: 0, max: 12
//         }
//      })

//         return <>
//         <Perf position="top-left" />
//         <OrbitControls enableDamping={false} />
//         <Environment
//             background
//             files="./hdri/lake_pier_4k.hdr"
//         />

//         {/* <ambientLight intensity={0.5} />
//         <directionalLight position={sunPosition} intensity={1.5} /> */}
//         <Stage>
//         <group>
//             <mesh ref={sphereRef} position-x={-2}>
//                 <sphereGeometry />
//                 <meshStandardMaterial color="#82E0AA" envMapIntensity={intensity} />
//             </mesh>
//             <mesh ref={cubeRef} position-x={2} scale={1.5}>
//                 <boxGeometry />
//                 <meshStandardMaterial color="#F9E79F" envMapIntensity={intensity} />
//             </mesh>
//             <mesh position-y={-1} rotation-x={THREE.MathUtils.degToRad(-90)} scale={10}>
//                 <circleGeometry />
//                 <meshStandardMaterial color="#5D6D7E" envMapIntensity={intensity} />
//             </mesh>
//         </group>
//         </Stage>
//     </>
// }

import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import TreeBoy from './TreeBoy'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
        <OrbitControls makeDefault />

        <group>
            <TreeBoy scale={2} position-y={-0.8} />
            <mesh receiveShadow position-y={-1} rotation-x={THREE.MathUtils.degToRad(-90)} scale={10}>
                <circleGeometry />
                <meshStandardMaterial color="#5D6D7E" />
            </mesh>
        </group>
    </>
}