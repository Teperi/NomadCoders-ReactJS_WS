# #1

2019.02.19

## 설치

- 윈도우에 우분투 설치: Windows Subsystem for Linux<sup id="sup1">[*1*](#footnote1)</sup>
  - 만약 Subsystem 이 되지 않을 경우: [블로그 참조](https://webnautes.tistory.com/1170)

- [Node.js / npm 설치](https://github.com/nodesource/distributions/blob/master/README.md)
  - Node.js 설치할 경우 npm 이 자동으로 설치됨

- [Yarn 설치](https://yarnpkg.com/en/docs/install#debian-stable)

- [Create React App 설치](https://github.com/facebook/create-react-app)

## 환경 구축

```bash
cd /mnt/c/Github/NomadCoders-ReachJS_WS  # 경로 지정
sudo create-react-app movie_app   # 개발환경을 yarn 을 통해 바로 구축
cd movie_app
yarn start   # 서버 열기
```

## 출처

<b id="footnote1">1</b> : [윈도우 10에서 Bash shell 지원](https://blogs.msdn.microsoft.com/eva/?p=7633) [↩](#sup1)