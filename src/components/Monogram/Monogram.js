import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="120" height="120">
      <path d="M464 381h48l7 9 13 20 11 18 17 28 15 26 28 48 12 20 14 24 11 19 10 16 9 14 7 12 3 4 4-2 1-2v-64h-17l-4-5-10-19-9-15-14-23-8-12v-2h112l16 1 1 1 1 19v140l-5 5-11 9-22 22-7 8-16 16-9 11-15 15-2 3-3-1-14-25-9-16-9-15-16-27-12-20-14-25-13-21-16-29-10-16-15-26-13-22-11-19-9-14-2-4-3 1-8 14-13 20-17 28-13 21-27 45-12 19-10 15-12 19-2 5 24 24h151l34 1 7 10 10 16 14 24 10 19-1 3H380l-12-14-20-20-7-8-10-9-15-15-7-8-12-11-5-5 1-5 8-14 10-15 8-13 11-17 13-21 14-22 19-32 8-13 13-23 15-24 13-20 14-22 10-16 10-15z" fill="#FAFCFA" />
      <path d="M378 276h274l60 60 7 8 21 21 1 2 1 35v31l-2 2h-28l-37 1v-47l-12-14-14-13-7-9-124 1h-58l-66-1-7 8-9 10-8 8-11 9h-2l1 4v105l-13 18-10 18-12 22-7 13-2 2h-14l-6-2-3-5 1-198 17-17 7-8 7-7 7-8 30-30 7-8z" fill="#FAFCFA" />
    </svg>
  );
});
