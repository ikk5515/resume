import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '끊임없이 배우고자 노력하는 신입 백엔드 개발자 김인기입니다.',
    '항상 더 나은 코드가 무엇인지 고민하고 있으며, 다양한 기술을 공부하며 성장하는 개발자가 되기 위해 노력하고 있습니다.',
    '개인이 아닌 팀으로 협업하는 과정에서 적극적인 자세로 팀원들과 소통하며 팀 전체의 성장을 위해 노력하는 개발자가 되고싶습니다.',
  ],
  sign: 'KIM INGI',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: '2023-03-19',
};

export default introduce;
