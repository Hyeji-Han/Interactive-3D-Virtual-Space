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

// import { OrbitControls } from '@react-three/drei'
// import { useRef } from 'react'
// import { Perf } from 'r3f-perf'
// import * as THREE from 'three'
// import { Bloom, EffectComposer, Glitch, Noise, DepthOfField } from '@react-three/postprocessing'
// import { useControls } from 'leva'
// import { GlitchMode, BlendFunction } from 'postprocessing'


// export default function Experience() {
//     const cubeRef = useRef()
//     const sphereRef = useRef()

//     // const { delay, duration, strength, mode } = useControls({
//     //     delay: { value: [0.5, 1] },
//     //     duration: { value: [ 0.1, 0.3 ] },
//     //     strength: { value: [ 0.2, 0.4 ]},
//     //     mode: { options: Object.keys(GlitchMode)}
//     //     })

//     // const { blendFunction } = useControls({
//     //     blendFunction: { options: Object.keys(BlendFunction) }
//     // })

//     // const { offset, darkness, blendFunction } = useControls({
//     //     offset: { value: 0.3, min: -10, max: 10, step: 0.01 },
//     //     darkness: { value: 0.9, min: -10, max: 10, step: 0.01 },
//     //     blendFunction: { options: Object.keys(BlendFunction)}
//     //     })

//     return <>
//         <color args={["#000000"]} attach="background" />
//         <Perf position="top-left" />
//         <EffectComposer multisampling={8}>
//             <Bloom />
//         </EffectComposer>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[1, 2, 3]} intensity={1} />
//         <OrbitControls makeDefault />

//         <group>
//             <mesh ref={sphereRef} position-x={-2}>
//                 <sphereGeometry />
//                 <meshStandardMaterial color="#82E0AA" />
//             </mesh>

//             <mesh ref={cubeRef}rotation-y={THREE.MathUtils.degToRad(45)} position-x={2} scale={1.5}>
//                 <boxGeometry />
//                 <meshStandardMaterial 
//                     color={[8,1,1]}
//                     emissive={"white"}
//                     emissiveIntensity={1.1}
//                     toneMapped={false} />
//             </mesh>

//             <mesh position-y={-1} rotation-x={THREE.MathUtils.degToRad(-90)} scale={10}>
//                 <circleGeometry />
//                 <meshStandardMaterial color="#5D6D7E" />
//             </mesh>
//         </group>

//         <EffectComposer>
//             {/* <Glitch
//                 delay={delay}
//                 duration={duration}
//                 strength={strength}
//                 mode={GlitchMode[mode]}
//             />
//             <Noise
//                 premultiply
//                 blendFunction={BlendFunction[blendFunction]}
//             /> */}

//             {/* <Bloom mipmapBlur intensity={1} 
//                 luminanceThreshold={0.9}
//             /> */}
//             <DepthOfField
//                 focusDistance={0.003}
//                 focalLength={0.005}
//                 bokehScale={16}
//             />

//             {/* <DepthOfField
//                 focusDistance={focusDistance}
//                 focalLength={focalLength}
//                 bokehScale={bokehScale}
//             /> */}
// </EffectComposer></>
// }

// import * as THREE from 'three'
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { CylinderCollider, Physics, RigidBody } from '@react-three/rapier';
// import { useRef, useState } from 'react';
// import { Perf } from 'r3f-perf';
// import { useFrame } from '@react-three/fiber';

// export default function Experience() {
//     const cube = useRef()
//     const twister = useRef()
//     const [ hitSound ] = useState(() => new Audio("./hit.mp3"))

//     const model = useGLTF("./books.glb")

//     // useFrame((state, delta) => {
//     //     const time =state.clock.getElapsedTime()
//     //     const euler = new THREE.Euler(0, time, 0)
//     //     const quaternion = new THREE.Quaternion()
//     //     quaternion.setFromEuler(euler)
//     //     twister.current.setNextKinematicRotation(quaternion)

//     //     const x = Math.cos(time) * 2
//     //     twister.current.setNextKinematicTranslation({x: x, y: -0.8, z: 0})
        
//     // })
//     // const collisionEvent = (event) => {
//     //     console.log(event)
//     //     console.log(`${event.target.rigidBodyObject.name}가 ${event.other.rigidBodyObject.name}에 충돌`)
    
//     //     hitSound.currentTime = 0
//     //     hitSound.volume = Math.randon()
//     //     hitSound.play
//     // }

//     const cubeJump = () => {
//         console.log(cube.current)
//         if(cube.current.isSleeping()) cube.current.wakeUp() 
//         cube.current.applyImpulse({x: 0, y: 5, z: 0})
//         cube.current.applyTorqueImplulse({x: 0, y: 1, z: 0});
//     }
//     return <>
//         <ambientLight intensity={0.5} />
//         <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
//         <OrbitControls makeDefault />

//         <Physics 
//             gravity={[0,-9.81,0]}
//             debug>

//             <RigidBody name="공" colliders="ball" position={[-1.5, 2, 0]}>
//                 <mesh castShadow>
//                     <sphereGeometry />
//                     <meshStandardMaterial color="#82E0AA" />
//                 </mesh>
//             </RigidBody>

//             <RigidBody name="상자" type="dynamic" ref={cube} position={[1.5,2, 0]} friction={0} mass={1} 
//             //onCollisionEnter={ collisionEvent }
//             >
//                 <mesh castShadow onClick={cubeJump}>
//                     <boxGeometry />
//                     <meshStandardMaterial color="#F9E79F" />
//                 </mesh>
//             </RigidBody>

//             <RigidBody name="바닥" type="fixed" friction={0.3}>
//                 <mesh receiveShadow position-y={-1.25} rotation-x={THREE.MathUtils.degToRad(-90)} scale={10}>
//                     <planeGeometry />
//                     <meshStandardMaterial color="#5D6D7E" />
//                 </mesh>
//             </RigidBody>

//             {/* <RigidBody name="막대기" type="kinematicPosition" ref={twister} position={[0, -0.5, 0]}>
//                 <mesh scale={[0.5, 0.5, 4]}>
//                     <boxGeometry />
//                     <meshStandardMaterial color="yellow" />
//                 </mesh>
//             </RigidBody> */}

//             <RigidBody colliders={"trimesh"} position={[0,5,0]}>
//                 {/* <CylinderCollider args={[0.5, 1.25]} /> */}
//                 <primitive object={model.scene} scale={5}>
//                     <axesHelper />
//                 </primitive>
//             </RigidBody>

//         </Physics>
//     </>
// }

import * as THREE from 'three'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { CylinderCollider, Physics, RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';

