import React, { useState } from 'react';
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
		textDecoration: 'none',
	},
});

const Navbar = () => {
	const classes = useStyles();
	const [active, setActive] = useState(true);
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
					className={
						active ? `${classes.navbar_link_border}` : `${classes.navbar_link}`
					}
					onClick={() => setActive((prevActive) => !prevActive)}
				>
					Home
				</Link>
				<a
					href='#exercises'
					className={
						!active ? `${classes.navbar_link_border}` : `${classes.navbar_link}`
					}
					onClick={() => setActive((prevActive) => !prevActive)}
				>
					Exercises
				</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
