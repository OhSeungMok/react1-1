# 오승목 202030321학번
## 03월 27일 강의 내용
### JSX(Java Script XML)
#### JSX(Java Script XML)란?
* Javascript에 XML을 추가한 확장한 문법입니다.
#### JSX의 역할
* JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
* React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해줍니다.
* 만일 JS작업할 경우 직접 createElement함수를 사용해야 합니다.
* JSX는 가독성을 높여주는 역할을 합니다.
``` js
import Hello from './Hello'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello toWhat="World" />
  </React.StrictMode>
);
//모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부릅니다.

import React from "react"; 

class Hello extends React.Component {
    render() { //render이라는 함수를 통해 div태그를 전달 
        return <div>Hello {this.props.toWhat}</div>
    } //props 는 properties 의 줄임말입니다. 우리가 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용합니다.
}

// const root = ReactDOM.creatPortal(document,getElementById('root'))
// root.render(<Hello toWhat="World "/>)
export default Hello;
// 
```
* 모든 자바스크립트 문법을 지원합니다.
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다
* 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
```js
const name = '승목';
const element = <h1>안녕 {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
```
* 만일 태그의 속성값을 사용하고 싶을 때는 다음과 같이 합니다.
``` js
const element = <div tabIndex='0'></div>;
const element = <img src={user.avataUrl}></img>;
```
https://github.com/soaple/first-met-react-practice-v18
소스코드를 잘 모르겠다면 공부하기!
## 03월 20일 강의 내용
### 리액트
#### 리액트는 무엇인가?
**React란?** 웹 및 앱 유저 인터페이스를 위한 라이브러리.
* 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트입니다.
* SPA(Single Page Application)를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됩니다.

#### 리액트의 장점
1. **빠른 업데이트와 렌더링 속도**
    * 이 것을 가능하게 하는 것이 바로 Virtual DOM입니다.
    * DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이것은 W3C의 표준입니다.
    * Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 떄문에 고안된 방법입니다.
    * DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다.

2. **컴포넌트 기반 구조**
    ```
    컴포넌트(component)
    컴포넌트란, 재사용이 가능한 각각의 독립된 모듈이다. (재사용 가능한 UI 코드 조각)
    우리가 흔히 이용하는 웹사이트들을 살펴보면, 반복되는 요소가 아주 많다는 것을 알 수 있다.
    ``` 
    * 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
    * 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
    * 그래서 리액트로 개발을 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.

3. **재사용성**
    * 반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다.
    * 또한 유지보수가 용이합니다.
    * 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

4. 든든한 지원군
    * 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

5. 활발한 지식 공유 & 커뮤니티
6. 모바일 앱 개발가능
    * 리액트 네이트브라는 모바일 환경 UI프레임워크를 사용하면 크로스 프랫폼(cross-platform) 모바일 앱을 개발할 수 있습니다.
    
#### 리액트의 단점
1. 방대한 학습량
    * 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.
2. 높은 상태 관리 복잡도
    * state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.
    
## 03월 13일 강의 내용
#### GitHub 사용법 
``` 
1. 해야할 일을 이슈로 가서 제작
2. (local/origin) git pull upstream/origin master -rebase
3. 이슈 번호로 새로운 브런치 생성
4. 작업
5. (local/no) git commit -am "?"   ? = 이슈명("커밋 #3") git add .    git commit -m "커밋"
6. git pull upstream/origin master —rebase (새로운 master를 가져오기 위함)
7. conflict 해결 (존재 한다면)
8. git push origin "branch name" *강제 push 는 -f 붙이기 (push -f origin)
9. github 들어가서 PR 올리기
10. Upstream에 murge 된 후에 Branch 삭제하기. *모든 작업이 끝나기 전엔 Branch 지우지않기.

VIM
q : 나가기
wq : 저장 후 나가기
i = insert : 입력 모드
esc : 입력모드 종료

Branch
git switch name   name은 (바꾸려는 브런치 명)
git switch -c name   name은 (브런치 생성과 변경)
git branch (브런치 목록 확인)
git branch -d name (브런치 삭제) * D를 사용 시 강제 삭제...

Rebase
git rebase -i HEAD~4  4은 (보여줄 커밋의 숫자를 의미함 더 많이 더 적게도 됌.)
git rebase --abort : Rebase 취소
git rebase --continue : Rebase 계속 (충돌)

충돌 발생 시 반복
충돌 하나 수정 -> git add . ->git rebase --continue

합칠 때 둘 중 아래(최신)있는 커밋을 pick -> s (squash)로 바꾸고 저장.

기타
git stash : 마지막 커밋 이후에 모든 변경사항 숨겨짐.
git stash pop : 마지막 나타나게 함.
git commit —amend 가장 최근의 커밋을 수정할 수 있음. * 주로 커밋이름 바꿀 때 씀.
```

### HTML 살펴보기
* HTML이란 무엇인가?
* 웹사이트의 뼈대를 구성하는 태그들
* SPA(Single Page Applicateion)

#### HTML이란 무엇인가?
``` html
<table> </table>
<br>
<img>
```

#### SPA(Single Page Application)
싱글 페이지 애플리케이션(Single Page Application, SPA)은 말그대로 하나의 페이지를 사용하는 애플리케이션이다. SPA는 서버로부터 새로운 페이지를 가져오는 것이 아닌, 하나의 페이지에서 내용을 동적으로 변경하는 사용자 웹앱을 의미한다.
무한 스크롤(인스타, 페이스북, 유튜브 등)

### 자바스크립트
* 자바스크립트란 무엇인가?
* ES6(ECMAScript6) 표준 ECMA-262
* 자바스크립트의 자료형

#### ECMA 스크립트
ECMA스크립트(ECMAScript, 또는 ES[1])란, Ecma International이 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어를 말한다. 자바스크립트를 표준화하기 위해 만들어졌다.

``` javascript
//Number type
let n1 = 1234;
let n2 = 5.876;

//String type
let s1 = "hello";
let s2 = "world";

//Boolean type
let b1 = true;
let b2 = false;

//null type
let n = null;

//Underfined type
let ul;
let u2 = underfined;

//Array type
let arr = [1, 2, 3, 4];

//Object type
let obj = (a: "apple", b: "banana", c: "carrot");

var : 중복선언 가능, 재할당가능
let : 중복 선언 불가능, 재할당 가능
const : 중복 선언 불가능, 재할당 가능
Array type : 배열
object type
```
#### 자바스크립트 함수
* Function statement형 : 일반적 함수의 형태
* Arrow function expression형 : 화살표 함수
``` javascript
// function statement
function sum(a,b) {
    return a + b;
}
console.log(sum(10,20)); //출력결과 : 30

// arrow fuction expression
const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(10,20)) //출력결과 : 200
```