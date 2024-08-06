# Node.js API 서버 만들기

#### 사용한 라이브러리 : express , uuid-apikey
#### 사용한 플랫폼 : Postman

파라미터에 콜론이 있는 경우 (/api/users/:type)
어떤 값이든 들어올 수 있다.

요청한 파라미터 값을 받아올 수 있다.
요청.params;

응답.send(); 
사용자에게 전달 해 줄 수 있다.

uuid-apikey : api키가 맞을때만 정보 제공을 하기위해 api키 생성

uuidAPIKey.create();
시스템마다 다른 apikey를 제공 할 경우 create 값을 db에 추가
