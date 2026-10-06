# SECURITY LAB — 해킹보안 퀴즈

극동대 해킹보안학과 학생을 위한 개인 학습용 프로젝트입니다. 학교 공식 서비스가 아닙니다.

## 기획

난이도 선택 → 4지선다 5문항 → 즉시 정답·해설 → 결과와 문항별 복습 → 오답 재도전.

| 단계 | 5문항 학습 주제 | 예상 시간 |
|---|---|---|
| 초급 | CIA, 피싱, MFA, 해시, 보안 윤리 | 3분 |
| 중급 | SQL 삽입, XSS, CSRF, TLS, 최소 권한 | 5분 |
| 고급 | TOCTOU, SSRF, 순방향 비밀성, IDOR, 비밀번호 저장 | 7분 |

각 단계는 100점 만점이며 문항당 20점입니다. 오답 재도전은 재도전한 문항 수를 기준으로 100점으로 환산합니다. 시간 제한은 없습니다. 풀이 기록은 새로고침이나 난이도 선택 시 초기화됩니다.

## 실행과 수정

별도 설치 없이 index.html을 브라우저에서 열면 됩니다. HTML, CSS, 문제 데이터, 채점 함수, 화면 코드가 모두 포함된 자체 완결형 정적 웹앱입니다. 문제 데이터는 index.html의 questions-source 스크립트에서 수정합니다. 전체 15문항의 지문·선택지·정답·해설이 포함되어 있습니다.

Node.js 22 이상에서 검증: `node check.cjs`.

## 배포

GitHub Pages의 Source를 GitHub Actions로 설정합니다. main 브랜치 변경 또는 Actions의 수동 실행 시 문항·채점 검사 → 정적 파일 준비 → Pages 업로드 → 배포 순서로 실행됩니다. PR에서는 검사만 실행합니다. 실제 사이트 URL은 성공한 deploy 작업에서 확인합니다.

- [GitHub 저장소](https://github.com/andrewy02/fe-security-quiz)
- [Actions 실행 내역](https://github.com/andrewy02/fe-security-quiz/actions)
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [OWASP 학습 자료](https://cheatsheetseries.owasp.org/) — 해당 문제 해설에 개별 자료 링크를 넣었습니다.
- [MITRE CWE-367](https://cwe.mitre.org/data/definitions/367.html)

문제는 개념 복습을 위해 새로 작성했으며 학교의 실제 시험 문제나 공인 난이도 기준을 의미하지 않습니다.
