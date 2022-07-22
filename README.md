Project create by Create react app and overrides by react-app-rewired

``` Step run app
1. yarn install or npm install
2. Change file .env
3. Run command

yarn start
=> Start for development

yarn build:dev
=> Build with .env.dev

yarn build:test
=> Build with .env.test

yarn build:production
=> Build with .env.production
```

| Folder | Description |
| ------ | ------ |
| scss | Định nghĩa các phần resource như css, multi language  |
| components | Các component dùng cho hệ thống. Folder _share chứa component dùng chung. Folder screens chứa component cho từng page |
| config | Chứa các config cho app như constant API_URL, PAGE_URL... |
| hooks | Chứa các custom hooks  |
| router | Định nghĩa các router cho app |
| screens | Chứa logic các màn hình |
| services | Định nghĩa các service sử dụng cho từng màn hình |
| store | Định nghĩa store redux |
| utils | Định nghĩa các phần logic chung common dùng cho app  |
