// pages/index.tsx
import Head from "next/head";
import Image from "next/image";

const IISPage = () => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-64 p-4 bg-gray-200">
        <h3 className="mb-4">ICOA Server</h3>
        <ul className="p-0 list-none">
          <li className="mb-2">응용 프로그램 풀</li>
          <li className="mb-2">사이트</li>
          <li className="mb-2">Default Web Site</li>
        </ul>
      </div>
      <div className="flex-grow p-4 overflow-y-auto text-sm">
        <Section title="ASP.NET">
          <Icon title=".NET 권한 부여 규칙" />
          <Icon title=".NET 신뢰 수준" />
          <Icon title=".NET 컴파일" />
          <Icon title=".NET 오류 페이지" />
          <Icon title="SMTP 전자 메일" />
          <Icon title="공급자" />
          <Icon title="세션 상태" />
          <Icon title="연결 문자렬" />
          <Icon title="프 로필" />
        </Section>
        <Section title="FTP">
          <Icon title="FTP IPv4 주소 및..." />
          <Icon title="FTP SSL 설정" />
          <Icon title="FTP 권한 부여 규칙" />
          <Icon title="FTP 디렉터..." />
          <Icon title="FTP 로깅" />
          <Icon title="FTP 메세지" />
          <Icon title="FTP 방화벽 지원" />
          <Icon title="FTP 사용자 격리" />
          <Icon title="FTP 요청 필터링" />
          <Icon title="FTP 인증" />
        </Section>
        <Section title="IIS">
          <Icon title="ASP" />
          <Icon title="HTTP 응답 헤더" />
          <Icon title="ISAPI 및 CGI 제한" />
          <Icon title="ISAPI 필터" />
          <Icon title="MIME 형식" />
          <Icon title="기본 문서" />
          <Icon title="디렉터리 검색" />
          <Icon title="로그" />
          <Icon title="모듈" />
          <Icon title="서버 인증서" />
        </Section>
        <Section title="관리">
          <Icon title="압축" />
          <Icon title="오류 페이지" />
          <Icon title="요청 필터링" />
          <Icon title="인증" />
          <Icon title="작업자 프로세스" />
          <Icon title="처리기 매핑" />
          <Icon title="출력 캐시" />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h4 className="mb-4">{title}</h4>
    <div className="flex">{children}</div>
  </section>
);

const Icon = ({ title }) => (
  <div className="flex items-center mb-4 w-36">
    {/* <Image src="/icon.png" alt={title} width={32} height={32} /> */}
    <span className="ml-2">{title}</span>
  </div>
);

export default IISPage;
