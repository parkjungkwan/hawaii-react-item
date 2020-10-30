JWT 는 Json Web Token 의 약자이며 authentication header 내에서 사용되는 토큰 포맷이다.

이 토큰은 두 개의 시스템끼리 안전한 방법으로 통신할 수 있도록 설계를 도와준다.

편의상 JWT 를 Bearer token 으로 부르기로 한다.

Bearer token 의 구성 요소는 header, payload, signature 이다.



- header: 토큰 타입과 암호화 방법을 보관하는 토큰의 한 부분으로 base-64 로 인코딩 된다.

- payload: 유저 정보, 상품 정보 등 다양한 종류의 정보를 저장할 수 있고, base-64 로 인코딩 된다.

- signature: header, payload, secret key 의 조합이다. secret key 는 서버에서 안전하게 보관되어야 한다.
