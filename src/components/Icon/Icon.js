import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import LinkedIn from './svg/linkedin.svg';
import Link from './svg/link.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import Twitter from './svg/twitter.svg';
import Phone from './svg/phone.svg';
import Message from './svg/message.svg';


export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  linkedin: LinkedIn,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
  phone: Phone,
  message: Message
};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
