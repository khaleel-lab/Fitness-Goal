import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import { HorizontalScrollbar } from './';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(['all', ...bodyPartsData]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exerciseData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			);

			const searchedExercises = exerciseData.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search)
			);

			setSearch('');
			setExercises(searchedExercises);
		}

		window.scrollTo({ top: 2000, behavior: 'smooth' });
	};

	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb='50px'
				textAlign='center'
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					sx={{
						input: {
							fontWeight: '700',
							border: 'none',
							borderRadius: '4px',
							outline: 'none',
						},
						width: { lg: '800px', xs: '350px' },
						backgroundColor: '#fff',
						borderRadius: '40px',
					}}
					height='76px'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
					}}
					placeholder='Search Exercises'
					type='text'
					onSubmit={handleSearch}
				/>
				<Button
					className='search-btn'
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>

			<Typography
				fontWeight={600}
				sx={{ fontSize: { lg: '44px', xs: '30px' } }}
				mb='50px'
				textAlign='center'
			>
				Choose Which Part Exercises You <br /> Know More
			</Typography>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					p: '20px',
				}}
			>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					isBodyParts
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
