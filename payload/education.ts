import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '인하공업전문대학',
      subTitle: '컴퓨터정보과',
      startedAt: '2019-03',
      // endedAt: '2023-02',
    },
    {
      title: '계남고등학교',
      subTitle: '자연계열 졸업 (경기도 부천시)',
      startedAt: '2016-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
