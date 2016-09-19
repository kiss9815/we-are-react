npm repo ""  를 하면 githoub 로 바로 이동

react-hot-loader: 특정 컴포넌트파일만 리로딩 할 수 있게 해주는 모듈
https://velopert.com/1492



디렉토리 구조
```
./
├── .babelrc                # babel 설정파일
├── build                   # 서버 빌드 디렉토리
├── package.json		
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server                  # 서버 디렉토리 (ES6)
│    ├── main.js            # 서버 사이드 메인 스크립트
│    └── routes
│        └── posts.js       # 예제 라우터
├── src
│    ├── App.js             # App 컴포넌트
│    └── index.js           # 클라이언트 사이드 메인 스크립트
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일
```

이렇게 만들고 난 뒤
$ babel server --out-dir build
서버 코드를 build 폴더에 컴파일
- > $ node build/app.js 로 실행


public/index.html 파일, src/App.js 파일, src/index.js 파일을 모두 작성했으면
webpack 을 통하여 컴파일
webpack 을 이미 글로벌설치를 한 상태라면 디렉토리를 생략하고 webpack 만 입력해도 됩니다.
$ ./node_modules/.bin/webpack




위의 명령어를 일일이 치기 번거로울 때 npm 스크립트에서 package.json 에 다음과 같이 작성
```
 "scripts": {
    "clean": "rm -rf build public/bundle.js",
    "build": "babel server --out-dir build && ./node_modules/.bin/webpack",
    "start": "set NODE_ENV=production&&node ./build/app.js",
    "development": "set NODE_ENV=development&&node ./build/app.js"
  },
```
  스크립트 실행 - > npm run
