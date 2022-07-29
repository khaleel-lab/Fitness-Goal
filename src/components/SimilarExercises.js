import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { HorizontalScrollbar, Loader } from './';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '0' } }}>
			<Typography variant='h4' my={5}>
				Similar
				<span style={{ color: '#ff2625' }}> Target </span>
				Exercises
			</Typography>
			<Stack direction='row' sx={{ p: '2', position: 'relative' }}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollbar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>

			<Typography variant='h4' my={5}>
				Similar
				<span style={{ color: '#ff2625' }}> Equipment </span>
				Exercises
			</Typography>
			<Stack direction='row' sx={{ p: '2', position: 'relative' }}>
				{equipmentExercises.length ? (
					<HorizontalScrollbar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
