import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const STATIC_QUESTIONS = [
  `What is the trend of new users per month in 2022?`,
  `User items in 2021?`,
  `How many users are there in 2021?`,
  `Total number of registered users?`,
  `What is the trend of new users per month?`,
  `What is the number of active users per year asc?`,
  `Users who submitted the most stories on Hacker News?`,
  `Users who got the most voted on Hacker News?`,
  `How many people on Hacker News only post comments and no stories?`,
  `What are the most shared website domains?`,
  `How many github websites are shared per month?`,
  `Top TLD that is most used by the shared sites?`,
  `How frequently are SQL vs Hadoop mentioned on Hacker News each month?`,
  `Stories with most comments in 2022?`,
  `Stories with most score in 2022?`,
];

// default is 3000 ms
const INTERVAL = 5000;

export default function HorizontalBar() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATIC_QUESTIONS.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: 30,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.2rem',
        color: '#777',
      }}
    >
      <Link href={`/?search=${encodeURIComponent(STATIC_QUESTIONS[index])}`}>
        <Typography
          sx={{
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >{`${STATIC_QUESTIONS[index]}`}</Typography>
      </Link>
    </Box>
  );
}
