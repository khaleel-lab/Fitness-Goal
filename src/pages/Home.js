import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Exercises, HeroBanner, SearchExercises } from '../components';
import RandomQuote from '../components/RandomQuote';

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState('all');

	return (
		<Box>
			<RandomQuote />
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
