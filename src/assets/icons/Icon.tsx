import React from 'react';
import {EyeOnIcon} from './EyeOnIcon';
import {EyeOffIcon} from './EyeOffIcon';
import {ThemeColors} from '../../theme/theme';
import {UseAppTheme} from '../../hooks/useAppTheme';
import {ArrowLeftIcon} from './ArrowLeftIcon';
import {ArrowRightIcon} from './ArrowRightIcon';
import {BellIcon} from './BellIcon';
import {BellOnIcon} from './BellOnIcon';
import {BookmarkIcon} from './BookmarkIcon';
import {BookmarkFillIcon} from './BookmarkFillIcon';
import { CameraIcon } from './CameraIcon';
import { ChatIcon } from './ChatIcon';
import { ChatOnIcon } from './ChatOnIcon';
import { CheckIcon } from './CheckIcon';
import { CommentIcon } from './CommentIcon';
import { ChevronRightIcon } from './ChevronRightIcon';
import { FlashOnIcon } from './FlashOnIcon';
import { FlashOffIcon } from './FlashOffIcon';
import { HeartIcon } from './HeartIcon';
import { HeartFillIcon } from './HeartFillIcon';
import { HomeIcon } from './HomeIcon';
import { HomeFillIcon } from './HomeFillIcon';
import { MessageIcon } from './MessageIcon';
import { NewPostIcon } from './NewPostIcon';
import { ProfileIcon } from './ProfileIcon';
import { ProfileFillIcon } from './ProfileFillIcon';
import { SearchIcon } from './SearchIcon';
import { SettingsIcon } from './SettingsIcon';
import { TrashIcon } from './TrashIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IcoName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = UseAppTheme();
  const SvgIcon = iconRegistry[name];

  return <SvgIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;
type IcoName = keyof IconType;
