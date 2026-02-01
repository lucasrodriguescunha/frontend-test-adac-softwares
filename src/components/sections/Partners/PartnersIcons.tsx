import { PartnersIcon } from './PartnersIcon';

import AppStoreIcon from '../../../assets/icons/app-store.png';
import UnityIcon from '../../../assets/icons/unity.svg';
import AndroidIcon from '../../../assets/icons/android.svg';
import PlayGamesIcon from '../../../assets/icons/play-games.png';
import AirBnbIcon from '../../../assets/icons/airbnb.svg';
import IbmIcon from '../../../assets/icons/ibm.svg';

export function PartnersIcons() {
  const partners = [
    { id: 1, src: AppStoreIcon, alt: 'App Store' },
    { id: 2, src: UnityIcon, alt: 'Unity' },
    { id: 3, src: AndroidIcon, alt: 'Android' },
    { id: 4, src: PlayGamesIcon, alt: 'Google Play Games' },
    { id: 5, src: AirBnbIcon, alt: 'Airbnb' },
    { id: 6, src: IbmIcon, alt: 'IBM' }
  ];

  return <PartnersIcon icons={partners} />;
}