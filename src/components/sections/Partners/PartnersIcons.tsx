import { PartnersIcon } from './PartnersIcon';

import AppStoreIcon from '../../../assets/icons/app-store.svg';
import UnityIcon from '../../../assets/icons/unity.svg';
import AndroidIcon from '../../../assets/icons/android.svg';
import PlayGamesIcon from '../../../assets/icons/play-games.svg';
import AirBnbIcon from '../../../assets/icons/airbnb.svg';
import IbmIcon from '../../../assets/icons/ibm.svg';

export function PartnersIcons() {
  return (
    <PartnersIcon
      icons={[
        { src: AppStoreIcon, alt: 'Plataforma App Store da Apple' },
        { src: UnityIcon, alt: 'Engine de jogos Unity' },
        { src: AndroidIcon, alt: 'Sistema operacional Android' },
        { src: PlayGamesIcon, alt: 'Plataforma Google Play Games' },
        { src: AirBnbIcon, alt: 'Plataforma de hospedagem Airbnb' },
        { src: IbmIcon, alt: 'Empresa de tecnologia IBM' },
      ]}
    />
  );
}
