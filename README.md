# 오승목 202030321학번
## 06월 11일 강의 내용
### Specialization (특수화, 전문화)
* 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.
* 범용적인 개념을 구별되게 구체화하는 것을 특수화라고 합니다
* 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.
* 리액트에서는 합성을 사용하여 특수화를 구현합니다.
* 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성 방식

### Containment와 Specialization을 같이 사용하기.
* Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다.
* Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.children을 추가했습니다.
* Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기위해 `<input>`과 `<button>`을 사용합니다. 이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됩니다.
* 이러한 형채로 Contianment와 Specialization을 동시에 사용할 수 있습니다.

### 상속에 대해 알아보기
* 합성과 대비되는 개념으로 상송(Inheritance)이 있습니다.
* 자식 클래스는 부모클래스가 가진 변수나 함수 등의 속성을 보여준다.
* 리액트에서는 상속이라는 방법을 사용하는 것보다는 합성을 사용하는 것이 더 좋음.

### 컨텍스트란 무엇인가?
* 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달되었습니다.
* 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공합니다.
* 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있습니다.
* 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있습니다.

### 컨텍스트를 언제 사용해야 할까?
* 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI테마, 현재 선택된 언어등이 있습니다.
* props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해집니다.
* 또한 반복적인 코드를 게쏙해서 작성해 주어야 하기 때문에 비효율적이고 가독성이 떨어집니다.
* 컨텍스트를 사용하면 이러한 방식을 깔끔하게 개선할 수 있습니다.
* 컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 합니다.

``` jsx

const ThemeContext = React.createContext('light')

function App() {
    return(
        <ThemeContext.Provider value='dark'>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}
function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton(props) {
    return(
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}
```

### 컨텍스트를 사용하기 전에 고려할 점
* 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용합니다.
* 하지만 무조건 컨텍스트를 사용하는 것은 좋은 것은 아닙니다. 왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문입니다.
* 따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합합니다.
* 데이터가 많아질수록 상위 컴포넌트가 점점 더 복잡해지기 때문입니다.
* 이런 경우 하위 컴포넌트를 여러 개의 변수로 나눠서 전달하면 됩니다.
* 하지만 어떤 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩된 컴포넌트들의 접근이 필요할 수 있습니다. 이런 경우 컨텍스트가 유리합니다.
* 컨텍스트는 해당 데이터와 데이터의 변경사항을 모두 하위 컴포넌트들에게 broadcast해주기 때문입니다.
* 컨텍스트를 사용하기에 적합한 데이터의 대표적인 에로는 '지역 정보', 'UI테마' 그리고 '캐싱된 데이터' 등이 있습니다.

### 컨텍스트 API
1. React.createContext
* 컨텍스트를 생성하기 위한 함수 입니다.
* 파라메타에는 기본값을 넣어주면 됩니다.
* 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider로 부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 위에서 설정한 초기값을 사용하게 됩니다.
``` jsx
const MyContext = React.createContext(초기값);
```

2. Context.Provider
* Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.
``` jsx
<MyContext.Provider value={/*some value*/}>
```
* Provider(제공자) 컴포넌트에는 value라는 prop이 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됩니다.
* 하위 컴포넌트를 consumer(소비자) 컴포넌트라고 부릅니다.

3. Context.Consumer 
* 함수형 컴포넌트에서 COntext.Consumer를 사용하여 컨텍스트를 구독 할 수 있습니다.
``` jsx
<MyContext.Consumer>
    {value => /*컨텍스트의 값에 따라서 컴포넌트들을 렌더링*/}
</MyContext.Consumer>
```
* 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부릅니다.
* Context.Consumer로 감싸주면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아서 리액트 노드로 리턴합니다.
* 함수로 전달되는 value는 Provider의 value prop과 **동일**합니다

4. Context.displayName
* 컨텍스트 객체는 displayName이라는 문자열 속성을 갖습니다.
* 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 displayName을 함께 표시해줍니다.
``` jsx
const MyContext = React.createContext(/*some value*/);
MyContext.displayName = 'MyDisplayName';

// 개발자 도구에 "MyDisplayName.Provider"로 표시됨
<MyContext.Provider>

// 개발자 도구에 "MyDisplayName.Consumer"로 표시됨
<MyContext.Consumer>
```

### 여러 개의 컨텍스트 사용하기
* 여러 개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용합니다.
* 하지만 두개 또는 그 이상의 컨텍스트 값이 자주 함께 사용될 경우 모든 값을 한 번에 제공해주는 별도의 render prop 컴포넌트를 직접 만드는 것을 고려하는 것이 좋습니다.

### useContext
* 함수형 컴포넌트에서는 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 더 좋은 방법이 있습니다. 바로 Hook입니다.
* useContext() 훅은 React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트 값을 리턴합니다.
``` jsx
function MyComponent(props) {
    const value =useContext(MyContext);
    return(
        ...
    )
}
```
* 이 방법도 가장 가까운 상위 Provider로 부터 컨텍스트의 값을 받아옵니다.
* 만일 값이 변경되면 useContext() 훅을 사용하는 컴포넌트가 재 렌더링 됩니다.
* 또한 useContext() 훅을 사용할 때에는 파라미터 컨텍스트로 객체를 넘겨줘야 된다.
``` jsx
// 올바른 사용법
useContect(MyContext)

// 잘못된 사용법
useContext(MyContext.Provider)
useContext(MyContext.Consumer)
```
## 06월 05일 강의 내용
* shared state는 state의 공유를 의미합니다.
* 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것입니다.

* 입력 컴포넌트 추출하기
```jsx
import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator() {
    const [temperature, setTemperrature] = useState('')
    const handleChange = (e) => {
        setTemperrature(e.target.value)
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input type="number" value={temperature}
            onChange={handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    )
}
```
* 이렇게 하는 이유는 용도에 따라 입력을 받을 수 있도록 해서 재사용이 가능하게 하기 위해서입니다.

### shared State 적용하기
* 다음은 하위 컴포넌트의 state를 부모 컴포넌트로 올려서 shared state를 적용합니다.
이것을 Lifting State Up (State 끌어 올리기)라고 합니다.
* 이를 위해 먼저 TemperatureInput 컴포넌트에서 온도 값을 가져오는 부분을 다음과 같이 수정합니다.
* 이렇게 수정하면 온도를 state에서 가져오지 않고 props를 통해 가져옵니다.
``` jsx
export default function TemperatureInput(props) {
    //const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        //setTemperature(e.target.value)
        props.onTemperatureChange(e.target.value)
    }
        return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleName[props.scale]})</legend>
            {/* <input type="number" value={temperature}
            onChange={handleChange} /> */}
            <input type="number" value={props.temperature}
            onChange={handleChange} />
        </fieldset>
    )
}
```
* 또 한가지 컴포넌트의 state를 사용하지 않기 때문에
입력 값이 변경되었을 때 상위 컴포넌트로 변경된 값을 전달해 주어야 합니다.
* 이를 위해 handler함수를 다음과 같이 수정해줍니다.
* 최종 코드는 다음과 같이 state는 제거되고, 상위 컴포넌트에서 전달받은 값만 사용합니다.
* 상위 컴포넌트인 Calculator에서 온도와 단위를 state로 갖고
* 두개의 하위 컴포넌트는 각각 섭씨, 화씨로 변환된 온도와 단위, 그리고 온도를 업데이트하기 위한 함수를 props로 갖고 있습니다
* 이렇게 모든 컴포넌트가 state를 갖지 않고, 상위 컴포넌트만 

### 합성에 대해 알아보기
* 합성(Compostion)은 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것입니다.
* 조합 방법에 따라 합서의 사용 기법은 다음과 같이 나눌 수 있습니다.
1. Containment(담다, 포함하다, 격리하다)
    * 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법입니다.
    * 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.
    * 범용적인 박스 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
    * 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.
    * 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용합니다. 
    * 리엑트에서는 props, children을 통해 하위 컴포넌트를 하나로 모아서 제공해줍니다.
    * 만일 여러 개의 chidren 집합이 필요할 경우에도 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어줍니다.
## 05월 29일 강의 내용
### textarea 태그
* HTML에서는 <.textarea>의 children으로 텍스트가 들어가는 형태입니다.
``` jsx
<textarea>
    안녕하세요, 여기에 이렇게 텍스트가 들어가게 됩니다.
</textarea>
```
* 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시합니다.
* select태그도 textarea와 동일합니다.
``` jsx
<select>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
</select>
```
``` jsx
export default function SignUp() {
    const [name, setName] = useState()
    const [gender, setGender] = useState('남자')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleSubmit = (e) => {
        alert(`이름 : ${name}, 성별 : ${gender}`)
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 : <input type="text" placeholder="이름을 입력하세요." value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label>
                성별 : 
                <select>
                    <option value={gender} onChange={handleChangeGender}>여성</option>
                    <option value={gender} onChange={handleChangeGender} selected>남성</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```

### File input 태그
* File input태그는 그 값이 읽기 전용이기 떄문에 리액트에서는 비제어 컴포넌트가 됩니다.
``` jsx
<input type="file"/>
```

### Input Null Value
* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
* 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.
``` jsx
ReactDOM.render(<input value="hi" />, rootNode);

setTimeout(function() {
    ReactDOM.render(<input value={null} />, rootNode);
}, 1000);
```

### 사용자 입력 값 받기
``` jsx
export default function SignUp() {
    const [name, setName] = useState()
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`이름 : ${name}`);
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 : <input type="text" placeholder="이름을 입력하세요." value={name} onChange={handleChangeName}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
```
## 05월 22일 강의 내용
### 리스트와 키
* 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것

* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값

* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링

* 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용

* 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

* 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트

* map함수 사용하기
``` jsx
{
  students.map((student) => {
    return <li key={student.id}>{student.name}</li>;
  });
}
```
## 05월 08일 강의 내용
### 이벤트 핸들러 추가하는 방법
``` jsx
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    //방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    
    //방법 2. arrow fucntion 사용해서 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
           {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}
```

### Arguments 전달하기
* 함수를 정의할 떄는 파라미터(Parameter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument) 혹은 인수 라고 부릅니다.
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.
``` jsx
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
* 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다.
* event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.
* 두 방법 모두 첫번째 매개변수는 id이고 두번째 매개변수로 event가 전달됩니다.
* 첫 번째 코드는 명시적으로 event를 매개변수로 넣어주었고, 두번째 코드는 id 이후 두번째 매개변수로 event가 자동 전달됩니다. 
* bind함수는 이벤트를 명확하게 정하지 않아도 사용 가능

### 엘리먼트 변수
* 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수 입니다.
``` jsx
import { useState } from "react";

export default function LoginControl(props) {
    const [isLogin, setIsLogin] = useState(false)

    const handleLoginClick = () => {
        setIsLogin(true)
    }

    const handleLogoutClick = () => {
        setIsLogin(false)
    }

    let button
    if (isLogin) {
        button = <button onClick = {handleLogoutClick}>로그아웃</button>
    } else {
        button = <button onClick = {handleLoginClick}>로그인</button>
    }
    return (
        button
    )
}
```

### 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.

1. 인라인 if
    * if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다,
    * &&는 and연산자로 모든 조건이 참일떄만 참이 됩니다.
    * 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없습니다, 단축평가.
    ``` jsx
    {unreadMessages.length > 0 &&
    <h2>
        현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
    </h2>
    }
    ```
2. 인라인 if-else
    * 삼항 연산자를 사용합니다 조건문? 참일 경우 : 거짓일 경우
    * 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.
    ``` jsx
    function UserStatus(props) {
        return (
            <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}<b> 상태입니다.
            </div>
        )
    }
    ```
### 컴포넌트 렌더링 막기
* 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.
``` jsx
function WarningBanner(props) {
    if(!props.warning) {
        return null;
    }
    return(
        <div>경고!</div>
    );
}
```
## 05월 01일 강의 내용
### 이벤트 처리
* DOM에서 클릭 이벤트를 처리하는 예제 코드
``` jsx
<button onclick="activate()">
    Activate
</button>
```
* React에서 클릭 이벤트 처리하는 예제 코드
``` jsx
<button onClick={activate}>
    Activate
</button>
```
* 둘의 차이점은
    1. 이벤트 이름이 onclick에서 onClick으로 변경(Camel case)
    2. 전달하려는 함수는 문자열에서 함수 그대로 전달
* 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 `이벤트 핸들러`라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 `이벤트 리스너`라고 부르기도 합니다.

### 커스텀 훅
* 필요하다면 직접 훅을 만들어 사용할 수 있음. 이것을 `커스텀 훅`이라고 합니다
1. `use`로 시작해야된다. 그렇지 않으면 다른 훅을 불러올 수 없습니다
2. 훅 함수 안에 중복됐던 함수를 그대로 넣음
3. 리턴 값은 훅에서 사용했던 값만 
4. 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야 합니다.
## 04월 17일 강의 내용
### React Developer Tools
* props, state 등 리엑트 소스를 볼 수 있음

### 훅
* 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트합니다.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해서 추가도니 기능이 바로 훅(Hook)입니다.
* `Hook`이란 <U> state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수</U>를 의미합니다.
* 훅의 이름은 모두 `use`로 시작하며, 사용자 정의 훅을 만들 수 있고 이름은 자유롭게 사용할 수 있으나 `'use'`로 시작할 것을 권장.

### useState
* `useState`는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.
* 다음 예제는 버튼을 클릭했을 때 카운트가 증가하는 함수형 컴포넌트 입니다. 증가시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다. 즉 화면에 값이 바로 반영되지 않기 때문에 useState를 사용
* 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용합니다.
``` jsx
import React, {useState} from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0)
  
    return (
        <div>
        <p>총 {count}번 클릭했습니다.</p>
        <button onClick={() => setCount(count+1)}>클릭</button>
        </div>
    )
}
const [변수, set(함수)] = useState(초기값) 구조분해할당
0번 인덱스에 변수와 setter 지정
```

### useEffect
* useState와 함께 가장 많이 사용하는 Hook, 이 함수는 <U>사이드 이펙트</U>를 수행하기 위한 것입니다.
* 부수적인 작용을 의미합니다. 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.
* 이 작업을 이펙트라고 부르는 이유는 이 작업들의 다른 컴포넌트에 영향을 미칠 수 있으며, <U>렌더링 중에는 작업이 완료될 수 없기 때문</U>이다. 렌더링이 끝난 이후에 실행되어야 하는 작업들이다.
* <U>클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능</U>을 제공합니다.

* 사이드 이펙트는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다. 예를 들면 네트워크 리퀘스트, DOM수동조작, 로깅 등은 정리가 필요없는 경우들입니다.
* useEffect()함수
``` jsx
useEffect(이펙트함수, 의존성 배열)
```
* 첫 번째 파라미터는 <u>이펙트 함수</u>가 들어가고, 두 번째 파라미터로는 <u>의존성 배열</u>이 들어갑니다.
* 의존성 배열은 이펙트가 의존하고 있는 배열로, <u>배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행</u>됩니다.
* 이펙트 함수는 <u>처음 컴포넌트가 렌더링 된 이후</U>, 그리구 <u>재 렌더링 이후</u>에 실행됩니다.
* 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 떄문에 여러 번 실행되지 않습니다.

### useMemo
* useMemo() 혹은 Memoizde value를 리턴하는 훅입니다.
* 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복들 피할 수 있습니다.
* 이 훅은 렌더링이 일어나는 동안 실행됩니다. 따라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안됩니다.
* 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트 같은 것입니다.
``` jsx
const memoizedValue = useMemo(
    () => {
        //연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
)
```
``` jsx
const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b)
);
```
* 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됩니다. 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
* 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.

### useCallback
* useCallback() 훅은 useMemo()와 유사합니다. 차이점은 값이 아닌 함수를 반환한다는 것입니다.
* 의존성 배열을 파라미터로 받는 것은 useMemo와 같습니다

### useRef
* useRef() 훅은 레퍼런스를 사용하기 위한 훅입니다.
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
* useRef() 훅은 바로 이 레퍼런스 객체를 반환합니다.
* 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
``` jsx
const refContainer = useRef(초깃값);
```
* 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다. 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미입니다.
``` jsx
import React, {useRef} from "react"

export default function FocusButton() {
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    return (
        <div>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}
```

### 훅의 규칙
* 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것입니다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다. 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됩니다.
* 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
* 두 번째 규칙은 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다는 것입니다. 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됩니다. 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.


## 04월 03일 강의 내용
### 컴포넌트
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여 전체 페이지를 구성한다는 것을 의미한다.
* 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용이 줄어듭니다.

### Props
* props는 prop(property: 속성, 특성)의 준말입니다. 바로 이 props가 바로 컴포넌트의 속성이다.
* 컴포넌트에 어떤 속성, props를 넣는냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
* 읽기 전용이여서 변경할 수 없다.(수정 불가)
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### Props 사용법
key-value쌍으로 props를 구성
``` jsx
function App(props) {
    return ( 
        <Profile
            name="승목"
            introduction="안녕하세요, 승목입니다."
            viewCount={1500}
            />
    );
}
```
1. App컴포넌트에서 props를 인자로 받아,
2. 내부의 Profile 컴포넌트로 전달해서 name, introduction, viewCount에 각각 속성을 할당하는,
3. 이떄 전달되는 props는 다음과 같은 자바스크립트 객체입니다.
``` jsx
{
    name : "승목"
    introduction: "안녕하세요 승목입니다."
}
```
props를 통해서 value를 할당할 수 있고, 직접 중괄호를 사용하여 할당할 수도 있습니다.
``` jsx
function App(props) {
    return (
        <Layout
            width={2560}
            height={1440}
            header={
                <Header title="소플의 블로그입니다." />
                //header의 대소문자를 구분하는 이유는 html과 구별하기 위해서
            }
            footer={
                <Footer />
            }
        />
    );
}
```
jsx를 사용하지 않는 경우 props의 전달방법은 createElement()함수를 사용한다
``` jsx
React.createElement(
    type,
    [props],
    [...children]
)
```

### 컴포넌트의 종류
* 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했지만 최근에는 Hook이라는 개념이 나오면서 함수형 컴포넌트를 주로 사용

### 함수형 컴포넌트
* Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕", 뒤에 넣어 반환
``` jsx
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}
```

### 클래스형 컴포넌트
* Welcome 컴포넌트 React.Component class로부터 상속을 받아 선언
``` jsx
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}
```

### 컴포넌트 이름 짓기
* 이름은 항상 대문자, 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 해아 함

### 컴포넌트 렌더링
html 요소(element), 또는 React 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것을 렌더링(rendering) 이라고 말합니다.
``` jsx
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

### pure함수 VS impure 함수
* pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

### 컴포넌트 합성
* 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
* 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 구성할 수 있다.
``` jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

fucntion App(props) {
    return (
        <div>
            <Welcome name="Seungmok" />
            <Welcome name="donghwan" />
            <Welcome name="han" />
        </div>
    )
}

ReactDOM.render(
    element,
    document.getElementById('root')
);
```

### 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있다.
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것.
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋음

### State
* State는 리액트 컴포넌트의 상태를 의미
* 상태의 의미는 정상인지 비정상장인지가 아니라 컴포넌트의 데이터를 의미. 정확히는 컴포넌트의 변경가능한 데이터 의미
* State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 함
* state는 변경 가능하지만 직접 수정하면 안 됨. 불가능하다고 생각
* state를 변경하고자 할 때는 setstate()함수 사용

### 생명주기
* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것
* constructor가 실행되면서 컴포넌트가 생성
* 생성 직후 componentDidMount()함수가 호출
* 컴포넌트가 소멸하기 전까지 여러번 렌더링
* 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐
* 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출
* 컴포넌트가 언마운트 되면 compinentWillUnmount()함수가 호출



## 03월 27일 강의 내용
### JSX(Java Script XML)
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
```jsx
const name = '승목';
const element = <h1>안녕 {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
```
* 만일 태그의 속성값을 사용하고 싶을 때는 다음과 같이 합니다.
``` jsx
const element = <div tabIndex='0'></div>;
const element = <img src={user.avataUrl}></img>;
```
https://github.com/soaple/first-met-react-practice-v18
소스코드를 잘 모르겠다면 공부하기!

* 함수형 컴포넌트
``` jsx
root.render(
  <React.StrictMode>
    <Library/> //결과를 보고 싶으면 수정하기 Library에 book을 import했기 때문에 Library 사용
  </React.StrictMode>
);

import React from "react";

export default function Book(props) { //export default는 앞에 쓰는 게 트랜드, props는 생략 가능
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h1>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h1>
        </div>
    );
}

import React from "react";
import Book from "./Book";

export default function Library(props) { 
    return(
        <div>
            <Book name = '처음 만난 파이썬' numOfPage={300} />
            <Book name = '처음 만난 AWS' numOfPage={400} />
            <Book name = '처음 만난 리액트' numOfPage={500} />
        </div>
    );
}   
```
### 엘리먼트
#### 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다.
#### 그렇다면 리액트 엘리먼트와 DOM엘리먼트는 어떤 차이가 있을까요?
* 리액트 엘리먼트는 virtual DOM의 형태를 취하고 있습니다.
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
* 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

|       |DOM|Virtual DOM|
|------|---|---|
|업데이트 속도 |느리다|빠르다|
|element 업데이트 방식|DOM 전체를 업데이트|변화 부분을 가상DOM으로 만든 후 DOM과 비교하여 다른 부분만 업데이트|
|메모리| 낭비가 심함 |효율적|

#### 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
* 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체 입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

#### createElement()
``` jsx
function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
        <b>
        {props.children}
        </b>
        </button>
    )
}
```
#### 엘리먼트의 특징
리액트 엘리먼트의 가장 큰 특징은 불변성입니다.<br>
 즉. 한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다.<br><br>
만일 내용이 바뀌면 어떻게 해야 할까요?
* 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
* 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
* 이렇게 교체하는 작업을 하기 위해 virtual DOM을 사용합니다.<br>

다음은 html코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 주용한 코드입니다. 이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 Root DOM node라고 합니다.
``` jsx
<div id = 'root'></div>
```
엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요합니다.
``` jsx
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
####  setInterval()함수
* 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링해 줍니다.
* 그런데 setInterval()함수를 이용해서 위에서 정의한 tick()를 1초에 한 번씩 호출하고 있습니다.
* 결국 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것
* 다음 코드를 실행하고, 크롬 개발자도구에서 확인해 보면 시간 부분만 업데이트 되는 것을 확인할 수 있습니다.
``` jsx
function tick() {
    const element = (
        <div>
            <h1>안녕, 리액트</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}
```
이때 render()함수를 사용하게 됩니다.<br>
이 함수의 첫 번째 파라메터 출력할 리액트 엘리먼트이고, 두번 째 파라메터는 출력할 타겟을 나타냅니다.
<br>즉 리액트 렌터링의 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있습니다.
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
    컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여 전체 페이지를 구성한다는 것을 의미한다.
    재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용이 줄어듭니다.
    ``` 
    * 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
    * 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
    * 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여ㅓ 전체 페이지를 구성한다는 것을 의미합니다.
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
### React 프로젝트 만드는 법
`npx create-react-app project명`
