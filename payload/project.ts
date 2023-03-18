import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '공공데이터 기반의 나들이 경로 추천 사이트',
      startedAt: '2022-08',
      endedAt: '2022-12',
      where: '3인 팀 프로젝트',
      descriptions: [
        { content: '공공데이터를 이용한 국내 나들이 경로 추천 사이트 개발' },
        { content: 'Spring MVC 모델과 Oracle Cloud DB를 이용 및 데이터베이스 설계' },
        { content: 'Spring Boot JPA, Tythymeleaf, Spring Security 등을 사용하여 백엔드 서버 개발' },
        { content: 'Spring Security를 이용한 비밀번호 암호화, Spring Boot JPA를 이용하여 DB 접근' },
        { content: ' 로그인/회원가입 유효성 검사 로직 구현' },
        {
          content: 'https://github.com/ikk5515/RoutePlanner_Project',
          href: 'https://github.com/ikk5515/RoutePlanner_Project',
        },
      ],
    },
    {
      title: 'JSP를 이용한 음악 공유 사이트',
      startedAt: '2022-08',
      endedAt: '2022-12',
      where: '개인 프로젝트',
      descriptions: [
        { content: '국내/해외 음악 추천 및 질문 답변 게시판 개발' },
        { content: 'JDBC를 이용한 MySQL 연동 및 데이터베이스 설계' },
        { content: 'jsp, bootbootstrap, MySQL, Tomcat Server 등을 사용하여 서비스 개발' },
        { content: '로그인/회원가입, 음악 추천 게시글 작성, 댓글 및 페이징 기능 구현' },
        {
          content: 'https://github.com/ikk5515/JSPWebProject',
          href: 'https://github.com/ikk5515/JSPWebProject',
        },
      ],
    },
  ],
};

export default project;
