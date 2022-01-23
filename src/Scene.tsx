import React, { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
import { SpaceDust } from './SpaceDust';
import { Sparks } from './Sparks';
import { SparkStorm } from './SparkStorm';

export const Controls = (props) => {
	const { gl, camera } = useThree();
	return <orbitControls args={[camera, gl.domElement]} { ...props } />
}

const colors = {
	malevolentIllusion: [
	  '#c06995',
	  '#de77c7',
	  '#df86df',
	  '#d998ee',
	  '#ceadf4',
	  '#c6bff9',
	],
	sunnyRainbow: [
	  '#fbe555',
	  '#fb9224',
	  '#f45905',
	  '#be8abf',
	  '#ffeed0',
	  '#feff89',
	],
  };
export function Scene() {
	return (
		<Suspense fallback={null}>
			<>
				<Controls />
				<pointLight distance={100} intensity={4} color="white"/>
				<SpaceDust count={10000} />
				<Sparks colors={colors.malevolentIllusion} count={20} radius={10} />
				<SparkStorm count={500} colors={colors.sunnyRainbow} />

			</>
		</Suspense>
	)
}