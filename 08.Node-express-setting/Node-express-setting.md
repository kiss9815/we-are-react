# Node Express 를 사용하여 프로젝트 구성하기

### npm setting
$ npm init

### 모듈 설치
$ npm install --save express react react-dom

### 개발 모듈 설치하기
$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server

### 전역 모듈 설치
$ npm install -g babel-cli webpack

//webpack 은 설치 했지만 전역모듈로 또 설치를 하겠습니다.

https://velopert.com/1492

velopert 님의 블로그를 따라 한거라 만드신 대로 하고 후기로 작성하겠습니다.

```
> ./
├── .babelrc                # babel 설정파일
├── build                   # 서버 빌드 디렉토리
├── package.json
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server                  # 서버 디렉토리 (ES6)
│    ├── app.js            # 서버 사이드 메인 스크립트
│    └── routes
│        └── user.js       # 예제 라우터
├── src
│    ├── App.js             # App 컴포넌트
│    └── index.js           # 클라이언트 사이드 메인 스크립트
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일
```

위와 같은 디렉토리 구조로 만듭니다.

### package.json
```
"scripts": {
   "clean": "rm -rf build public/bundle.js",
   "build": "./node_modules/.bin/babel server --out-dir build && webpack",
   "start": "set NODE_ENV=production&&node ./build/main.js",
   "development": "set NODE_ENV=development&&node ./build/main.js"
 },
```
window 유저는 환경변수 설정시 set 을 추가하고, 글로벌 모듈로 설치한 webpack 을 실행해서 build 를 합니다. 블로그에 있던 ./node_modules/.bin/webpack 명령어는 작동을 안해서 다음과 같이 수정했습니다.

### webpack.dev.config.js
위 블로그에도 설명이 있지만 react-hot-loader를 그냥 다운하시면

 ```
 module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
 ```
 다음과 같이 수정해야 합니다.


 ### 실행방법

 npm run build   ->   build 폴더에 빌드됨. -> npm rum development 을 통해 개발  -> npm run start  -> 배포

 [프로젝트 소스][1]

[1]: https://github.com/we-are-developer/we-are-react/tree/master/08.Node-express-setting/react-express-template
