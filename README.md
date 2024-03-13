# 오승목 202030321학번

03월 20일 강의 내용

## 03월 13일 강의 내용
### GitHub 사용법 
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

### 1. HTML 살펴보기
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

### 2. CSS란 무엇인가?

### 3. 자바스크립트
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