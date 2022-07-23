import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Logo } from '../assets';

const useStyles = makeStyles({
	navbar_logo: {
		width: 48,
		height: 48,
		margin: '0 20px',
	},
	navbar_link: {
		textDecoration: 'none',
		color: '#3A1212',
	},
	navbar_link_border: {
		borderBottom: '3px solid #FF2625',
	},
});

const Navbar = () => {
	const classes = useStyles();
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			sx={{
				gap: { sm: '122px', xs: '40px' },
				mt: { sm: '32px', xs: '20px' },
				justifyContent: 'none',
			}}
			px='20px'
		>
			<Link to='/'>
				<img src={Logo} alt='logo' className={classes.navbar_logo} />
			</Link>
			<Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
				<Link
					to='/'
					className={`${classes.navbar_link} ${classes.navbar_link_border}`}
				>
					Home
				</Link>
				<a href='#exercises' className={classes.navbar_link}>
					Exercises
				</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
