import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  name: {
    title: '김인기',
    small: '(Kim In Gi)',
  },
  contact: [
    {
      title: 'dlsrl5515@gmail.com',
      link: '#dlsrl5515@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '+821066212416',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/ikk5515',
      link: 'https://github.com/ikk5515',
      icon: faGithub,
    },
  ],
  notice: {
    title: '웹 백엔드 주니어 개발자 김인기입니다.',
    icon: faBell,
  },
};

export default profile;
