import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'JAVA',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'Spring MVC',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Oracle',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'javascript',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'IntelliJ IDEA',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'GitHub',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip:
    '1: 기초 수준(문법을 이해함)\n2: 취미 수준(간단한 개발 가능)\n3: 프로젝트 개발 가능 수준',
};

export default skill;
