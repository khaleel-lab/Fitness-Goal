import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { fetchData, randomQuoteOptions } from '../utils/fetchData';

const RandomQuote = () => {
	const [randomQuote, setRandomQuote] = useState({});

	useEffect(() => {
		const fetchRandomQuoteData = async () => {
			const randomQuoteData = await fetchData(
				'https://bodybuilding-quotes1.p.rapidapi.com/random-quote',
				randomQuoteOptions
			);
			setRandomQuote(randomQuoteData);
			console.log({ randomQuoteData });
		};
		fetchRandomQuoteData();
	}, []);

	return (
		<Box
			sx={{
				mt: { lg: '20px', xs: '70px' },
				m: '20px 20px',
				maxWidth: { lg: 480, xs: '100%' },
			}}
		>
			<Paper elevation={24} style={{ padding: '25px', background: '#fffafb' }}>
				<Typography
					variant='subtitle1'
					component='div'
					sx={{
						color: '#FF2625',
						fontWeight: '600',
						fontSize: '18px',
						opacity: 0.6,
					}}
				>
					Fitness Quote:
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{randomQuote.quote}
				</Typography>
				<Typography gutterBottom variant='h6' component='div' textAlign='end'>
					- {randomQuote.author}
				</Typography>
			</Paper>
		</Box>
	);
};

export default RandomQuote;
