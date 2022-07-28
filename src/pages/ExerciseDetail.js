import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Detail, ExerciseVideos, SimilarExercises } from '../components';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { exerciseId } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl =
				'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/${exerciseId}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);
		};

		fetchExercisesData();
	}, [exerciseId]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	);
};

export default ExerciseDetail;
