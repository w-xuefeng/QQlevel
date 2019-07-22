# 仿QQ等级计算方法 

```js
{
  👑: 64,
  🌞: 16,
  🌙: 4,
  ⭐: 1
}
```

## How to use?

```shell
npm i qqlevel
```

```ts
import QQlevel from 'qqlevel';

// 简单使用

const level = new QQlevel();
level.setLevel(48);
const mylevel = level.getLevel();
console.log(mylevel);
// { level: 48, crown: 0, sun: 3, moon: 0, star: 0 }

const level = new QQlevel(25);
const mylevel = level.getLevel();
console.log(mylevel);
// { level: 25, crown: 0, sun: 1, moon: 2, star: 1 }

```

## Default configuration 默认配置

```ts
{
  maxLevelLimit: number = 255;
  minLevelLimit: number = 0;
  icon: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: './assets/crown.svg',
    sun: './assets/sun.svg',
    moon: './assets/moon.svg',
    star: './assets/star.svg',
  };
  iconString: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: '👑',
    sun: '🌞',
    moon: '🌙',
    star: '⭐',
  };
  iconLevel: {
    crown: number;
    sun: number;
    moon: number;
    star: number;    
  } = {
    crown: 64,
    sun: 16,
    moon: 4,
    star: 1,
  };
  iconStyle: string = `width: 1em;height: 1em;`;
  iconWrapStyle: string = `display: flex;align-items: center;font-szie: 12px;`;
};
```

## Modify configuration 修改配置

- Full revision 全量修改

```ts
import QQlevel from 'qqlevel';
const config = {
  maxLevelLimit: number = xxx;
  minLevelLimit: number = xxx;
  icon: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: 'xxx',
    sun: 'xxx',
    moon: 'xxx',
    star: 'xxx',
  };
  iconString: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: '👑',
    sun: '🌞',
    moon: '🌙',
    star: '⭐',
  };
  iconLevel: {
    crown: number;
    sun: number;
    moon: number;
    star: number;    
  } = {
    crown: 64,
    sun: 16,
    moon: 4,
    star: 1,
  };
  iconStyle: string = `xxx`;
  iconWrapStyle: string = `xxx`;
}

const level = new QQlevel(48, config);
// or 或者
const level = new QQlevel();
level.setConfig(config);
level.setLevel(48);
```

- Partial modification 部分修改

```ts
import QQlevel from 'qqlevel';

const level = new QQlevel();

// 配置icon 字符串
const iconString: {
  crown: string;
  sun: string;
  moon: string;
  star: string;
} = {
  crown: '',
  sun: '',
  moon: '',
  star: '',
};
level.setIconString(iconString);

// 配置icon 地址
const icon: {
  crown: string;
  sun: string;
  moon: string;
  star: string;
} = {
  crown: '',
  sun: '',
  moon: '',
  star: '',
};
level.setIcon(icon);

// 配置icon 样式
const iconStyle: string = `
  with: 1em;
  height: 1em;
`;
level.setIconStyle(iconStyle);

// 追加icon 样式
const iconStyleMore: string = `
  font-size: 16px;
`;
level.addIconStyle(iconStyleMore);


// 配置icon 容器样式
const iconWrapStyle: string = `
  display: flex;
`;
level.setIconWrapStyle(iconWrapStyle);

// 追加icon 容器样式
const iconWrapStyleMore: string = `
  align-items: center;
`;
level.setIconWrapStyle(iconWrapStyleMore);

// 配置最大等级和最小等级限制
const range: {
  max: number,
  min: number,
} = {
  max: 255,
  min: 0,
};
level.setLevelLimit(range);

// 配置icon所代表的的等级
const = iconLevel: {
  crown: number;
  sun: number;
  moon: number;
  star: number;    
} = {
  crown: 64,
  sun: 16,
  moon: 4,
  star: 1,
};
level.setIconLevel(iconLevel):

```

## Get result 获取结果

```ts
  const level = new QQlevel(100);
  const mylevel = level.getLevel();
  console.log(mylevel);
  // { level: 100, crown: 1, sun: 2, moon: 1, star: 0 }

  // or 或者

  const level = new QQlevel();
  level.setLevel(256);
  const mylevel = level.getLevel();
  console.log(mylevel); 
  // { level: 256, crown: 4, sun: 0, moon: 0, star: 0 }
```

## Output 输出

```ts
// 输出HTML
const level = new QQlevel(16);
const levelHTML = level.outputLevelHTML();
// 或者
const levelHTML = level.outputLevelHTML(16);
console.log(levelHTML);
/*
<div style="display: flex;align-items: center;font-szie: 12px;">
  <img src="./src/assets/sun.svg" style="width: 1em;height: 1em;">
</div>
*/



// 输出字符
const level = new QQlevel(254);
const levelString = level.outputLevelString();
// 或者
const levelHTML = level.outputLevelString(254);
console.log(levelString);
// 👑👑👑🌞🌞🌞🌙🌙🌙⭐⭐
```
## 等级对照表
Level | Crown | Sun | Moon | Star | LevelString |
-|-|-|-|-|-
256+|4|0|0|0|👑👑👑👑|
256|4|0|0|0|👑👑👑👑|
255|3|3|3|3|👑👑👑🌞🌞🌞🌙🌙🌙⭐⭐⭐|
254|3|3|3|2|👑👑👑🌞🌞🌞🌙🌙🌙⭐⭐|
253|3|3|3|1|👑👑👑🌞🌞🌞🌙🌙🌙⭐|
252|3|3|3|0|👑👑👑🌞🌞🌞🌙🌙🌙|
251|3|3|2|3|👑👑👑🌞🌞🌞🌙🌙⭐⭐⭐|
250|3|3|2|2|👑👑👑🌞🌞🌞🌙🌙⭐⭐|
249|3|3|2|1|👑👑👑🌞🌞🌞🌙🌙⭐|
248|3|3|2|0|👑👑👑🌞🌞🌞🌙🌙|
247|3|3|1|3|👑👑👑🌞🌞🌞🌙⭐⭐⭐|
246|3|3|1|2|👑👑👑🌞🌞🌞🌙⭐⭐|
245|3|3|1|1|👑👑👑🌞🌞🌞🌙⭐|
244|3|3|1|0|👑👑👑🌞🌞🌞🌙|
243|3|3|0|3|👑👑👑🌞🌞🌞⭐⭐⭐|
242|3|3|0|2|👑👑👑🌞🌞🌞⭐⭐|
241|3|3|0|1|👑👑👑🌞🌞🌞⭐|
240|3|3|0|0|👑👑👑🌞🌞🌞|
239|3|2|3|3|👑👑👑🌞🌞🌙🌙🌙⭐⭐⭐|
238|3|2|3|2|👑👑👑🌞🌞🌙🌙🌙⭐⭐|
237|3|2|3|1|👑👑👑🌞🌞🌙🌙🌙⭐|
236|3|2|3|0|👑👑👑🌞🌞🌙🌙🌙|
235|3|2|2|3|👑👑👑🌞🌞🌙🌙⭐⭐⭐|
234|3|2|2|2|👑👑👑🌞🌞🌙🌙⭐⭐|
233|3|2|2|1|👑👑👑🌞🌞🌙🌙⭐|
232|3|2|2|0|👑👑👑🌞🌞🌙🌙|
231|3|2|1|3|👑👑👑🌞🌞🌙⭐⭐⭐|
230|3|2|1|2|👑👑👑🌞🌞🌙⭐⭐|
229|3|2|1|1|👑👑👑🌞🌞🌙⭐|
228|3|2|1|0|👑👑👑🌞🌞🌙|
227|3|2|0|3|👑👑👑🌞🌞⭐⭐⭐|
226|3|2|0|2|👑👑👑🌞🌞⭐⭐|
225|3|2|0|1|👑👑👑🌞🌞⭐|
224|3|2|0|0|👑👑👑🌞🌞|
223|3|1|3|3|👑👑👑🌞🌙🌙🌙⭐⭐⭐|
222|3|1|3|2|👑👑👑🌞🌙🌙🌙⭐⭐|
221|3|1|3|1|👑👑👑🌞🌙🌙🌙⭐|
220|3|1|3|0|👑👑👑🌞🌙🌙🌙|
219|3|1|2|3|👑👑👑🌞🌙🌙⭐⭐⭐|
218|3|1|2|2|👑👑👑🌞🌙🌙⭐⭐|
217|3|1|2|1|👑👑👑🌞🌙🌙⭐|
216|3|1|2|0|👑👑👑🌞🌙🌙|
215|3|1|1|3|👑👑👑🌞🌙⭐⭐⭐|
214|3|1|1|2|👑👑👑🌞🌙⭐⭐|
213|3|1|1|1|👑👑👑🌞🌙⭐|
212|3|1|1|0|👑👑👑🌞🌙|
211|3|1|0|3|👑👑👑🌞⭐⭐⭐|
210|3|1|0|2|👑👑👑🌞⭐⭐|
209|3|1|0|1|👑👑👑🌞⭐|
208|3|1|0|0|👑👑👑🌞|
207|3|0|3|3|👑👑👑🌙🌙🌙⭐⭐⭐|
206|3|0|3|2|👑👑👑🌙🌙🌙⭐⭐|
205|3|0|3|1|👑👑👑🌙🌙🌙⭐|
204|3|0|3|0|👑👑👑🌙🌙🌙|
203|3|0|2|3|👑👑👑🌙🌙⭐⭐⭐|
202|3|0|2|2|👑👑👑🌙🌙⭐⭐|
201|3|0|2|1|👑👑👑🌙🌙⭐|
200|3|0|2|0|👑👑👑🌙🌙|
199|3|0|1|3|👑👑👑🌙⭐⭐⭐|
198|3|0|1|2|👑👑👑🌙⭐⭐|
197|3|0|1|1|👑👑👑🌙⭐|
196|3|0|1|0|👑👑👑🌙|
195|3|0|0|3|👑👑👑⭐⭐⭐|
194|3|0|0|2|👑👑👑⭐⭐|
193|3|0|0|1|👑👑👑⭐|
192|3|0|0|0|👑👑👑|
191|2|3|3|3|👑👑🌞🌞🌞🌙🌙🌙⭐⭐⭐|
190|2|3|3|2|👑👑🌞🌞🌞🌙🌙🌙⭐⭐|
189|2|3|3|1|👑👑🌞🌞🌞🌙🌙🌙⭐|
188|2|3|3|0|👑👑🌞🌞🌞🌙🌙🌙|
187|2|3|2|3|👑👑🌞🌞🌞🌙🌙⭐⭐⭐|
186|2|3|2|2|👑👑🌞🌞🌞🌙🌙⭐⭐|
185|2|3|2|1|👑👑🌞🌞🌞🌙🌙⭐|
184|2|3|2|0|👑👑🌞🌞🌞🌙🌙|
183|2|3|1|3|👑👑🌞🌞🌞🌙⭐⭐⭐|
182|2|3|1|2|👑👑🌞🌞🌞🌙⭐⭐|
181|2|3|1|1|👑👑🌞🌞🌞🌙⭐|
180|2|3|1|0|👑👑🌞🌞🌞🌙|
179|2|3|0|3|👑👑🌞🌞🌞⭐⭐⭐|
178|2|3|0|2|👑👑🌞🌞🌞⭐⭐|
177|2|3|0|1|👑👑🌞🌞🌞⭐|
176|2|3|0|0|👑👑🌞🌞🌞|
175|2|2|3|3|👑👑🌞🌞🌙🌙🌙⭐⭐⭐|
174|2|2|3|2|👑👑🌞🌞🌙🌙🌙⭐⭐|
173|2|2|3|1|👑👑🌞🌞🌙🌙🌙⭐|
172|2|2|3|0|👑👑🌞🌞🌙🌙🌙|
171|2|2|2|3|👑👑🌞🌞🌙🌙⭐⭐⭐|
170|2|2|2|2|👑👑🌞🌞🌙🌙⭐⭐|
169|2|2|2|1|👑👑🌞🌞🌙🌙⭐|
168|2|2|2|0|👑👑🌞🌞🌙🌙|
167|2|2|1|3|👑👑🌞🌞🌙⭐⭐⭐|
166|2|2|1|2|👑👑🌞🌞🌙⭐⭐|
165|2|2|1|1|👑👑🌞🌞🌙⭐|
164|2|2|1|0|👑👑🌞🌞🌙|
163|2|2|0|3|👑👑🌞🌞⭐⭐⭐|
162|2|2|0|2|👑👑🌞🌞⭐⭐|
161|2|2|0|1|👑👑🌞🌞⭐|
160|2|2|0|0|👑👑🌞🌞|
159|2|1|3|3|👑👑🌞🌙🌙🌙⭐⭐⭐|
158|2|1|3|2|👑👑🌞🌙🌙🌙⭐⭐|
157|2|1|3|1|👑👑🌞🌙🌙🌙⭐|
156|2|1|3|0|👑👑🌞🌙🌙🌙|
155|2|1|2|3|👑👑🌞🌙🌙⭐⭐⭐|
154|2|1|2|2|👑👑🌞🌙🌙⭐⭐|
153|2|1|2|1|👑👑🌞🌙🌙⭐|
152|2|1|2|0|👑👑🌞🌙🌙|
151|2|1|1|3|👑👑🌞🌙⭐⭐⭐|
150|2|1|1|2|👑👑🌞🌙⭐⭐|
149|2|1|1|1|👑👑🌞🌙⭐|
148|2|1|1|0|👑👑🌞🌙|
147|2|1|0|3|👑👑🌞⭐⭐⭐|
146|2|1|0|2|👑👑🌞⭐⭐|
145|2|1|0|1|👑👑🌞⭐|
144|2|1|0|0|👑👑🌞|
143|2|0|3|3|👑👑🌙🌙🌙⭐⭐⭐|
142|2|0|3|2|👑👑🌙🌙🌙⭐⭐|
141|2|0|3|1|👑👑🌙🌙🌙⭐|
140|2|0|3|0|👑👑🌙🌙🌙|
139|2|0|2|3|👑👑🌙🌙⭐⭐⭐|
138|2|0|2|2|👑👑🌙🌙⭐⭐|
137|2|0|2|1|👑👑🌙🌙⭐|
136|2|0|2|0|👑👑🌙🌙|
135|2|0|1|3|👑👑🌙⭐⭐⭐|
134|2|0|1|2|👑👑🌙⭐⭐|
133|2|0|1|1|👑👑🌙⭐|
132|2|0|1|0|👑👑🌙|
131|2|0|0|3|👑👑⭐⭐⭐|
130|2|0|0|2|👑👑⭐⭐|
129|2|0|0|1|👑👑⭐|
128|2|0|0|0|👑👑|
127|1|3|3|3|👑🌞🌞🌞🌙🌙🌙⭐⭐⭐|
126|1|3|3|2|👑🌞🌞🌞🌙🌙🌙⭐⭐|
125|1|3|3|1|👑🌞🌞🌞🌙🌙🌙⭐|
124|1|3|3|0|👑🌞🌞🌞🌙🌙🌙|
123|1|3|2|3|👑🌞🌞🌞🌙🌙⭐⭐⭐|
122|1|3|2|2|👑🌞🌞🌞🌙🌙⭐⭐|
121|1|3|2|1|👑🌞🌞🌞🌙🌙⭐|
120|1|3|2|0|👑🌞🌞🌞🌙🌙|
119|1|3|1|3|👑🌞🌞🌞🌙⭐⭐⭐|
118|1|3|1|2|👑🌞🌞🌞🌙⭐⭐|
117|1|3|1|1|👑🌞🌞🌞🌙⭐|
116|1|3|1|0|👑🌞🌞🌞🌙|
115|1|3|0|3|👑🌞🌞🌞⭐⭐⭐|
114|1|3|0|2|👑🌞🌞🌞⭐⭐|
113|1|3|0|1|👑🌞🌞🌞⭐|
112|1|3|0|0|👑🌞🌞🌞|
111|1|2|3|3|👑🌞🌞🌙🌙🌙⭐⭐⭐|
110|1|2|3|2|👑🌞🌞🌙🌙🌙⭐⭐|
109|1|2|3|1|👑🌞🌞🌙🌙🌙⭐|
108|1|2|3|0|👑🌞🌞🌙🌙🌙|
107|1|2|2|3|👑🌞🌞🌙🌙⭐⭐⭐|
106|1|2|2|2|👑🌞🌞🌙🌙⭐⭐|
105|1|2|2|1|👑🌞🌞🌙🌙⭐|
104|1|2|2|0|👑🌞🌞🌙🌙|
103|1|2|1|3|👑🌞🌞🌙⭐⭐⭐|
102|1|2|1|2|👑🌞🌞🌙⭐⭐|
101|1|2|1|1|👑🌞🌞🌙⭐|
100|1|2|1|0|👑🌞🌞🌙|
99|1|2|0|3|👑🌞🌞⭐⭐⭐|
98|1|2|0|2|👑🌞🌞⭐⭐|
97|1|2|0|1|👑🌞🌞⭐|
96|1|2|0|0|👑🌞🌞|
95|1|1|3|3|👑🌞🌙🌙🌙⭐⭐⭐|
94|1|1|3|2|👑🌞🌙🌙🌙⭐⭐|
93|1|1|3|1|👑🌞🌙🌙🌙⭐|
92|1|1|3|0|👑🌞🌙🌙🌙|
91|1|1|2|3|👑🌞🌙🌙⭐⭐⭐|
90|1|1|2|2|👑🌞🌙🌙⭐⭐|
89|1|1|2|1|👑🌞🌙🌙⭐|
88|1|1|2|0|👑🌞🌙🌙|
87|1|1|1|3|👑🌞🌙⭐⭐⭐|
86|1|1|1|2|👑🌞🌙⭐⭐|
85|1|1|1|1|👑🌞🌙⭐|
84|1|1|1|0|👑🌞🌙|
83|1|1|0|3|👑🌞⭐⭐⭐|
82|1|1|0|2|👑🌞⭐⭐|
81|1|1|0|1|👑🌞⭐|
80|1|1|0|0|👑🌞|
79|1|0|3|3|👑🌙🌙🌙⭐⭐⭐|
78|1|0|3|2|👑🌙🌙🌙⭐⭐|
77|1|0|3|1|👑🌙🌙🌙⭐|
76|1|0|3|0|👑🌙🌙🌙|
75|1|0|2|3|👑🌙🌙⭐⭐⭐|
74|1|0|2|2|👑🌙🌙⭐⭐|
73|1|0|2|1|👑🌙🌙⭐|
72|1|0|2|0|👑🌙🌙|
71|1|0|1|3|👑🌙⭐⭐⭐|
70|1|0|1|2|👑🌙⭐⭐|
69|1|0|1|1|👑🌙⭐|
68|1|0|1|0|👑🌙|
67|1|0|0|3|👑⭐⭐⭐|
66|1|0|0|2|👑⭐⭐|
65|1|0|0|1|👑⭐|
64|1|0|0|0|👑|
63|0|3|3|3|🌞🌞🌞🌙🌙🌙⭐⭐⭐|
62|0|3|3|2|🌞🌞🌞🌙🌙🌙⭐⭐|
61|0|3|3|1|🌞🌞🌞🌙🌙🌙⭐|
60|0|3|3|0|🌞🌞🌞🌙🌙🌙|
59|0|3|2|3|🌞🌞🌞🌙🌙⭐⭐⭐|
58|0|3|2|2|🌞🌞🌞🌙🌙⭐⭐|
57|0|3|2|1|🌞🌞🌞🌙🌙⭐|
56|0|3|2|0|🌞🌞🌞🌙🌙|
55|0|3|1|3|🌞🌞🌞🌙⭐⭐⭐|
54|0|3|1|2|🌞🌞🌞🌙⭐⭐|
53|0|3|1|1|🌞🌞🌞🌙⭐|
52|0|3|1|0|🌞🌞🌞🌙|
51|0|3|0|3|🌞🌞🌞⭐⭐⭐|
50|0|3|0|2|🌞🌞🌞⭐⭐|
49|0|3|0|1|🌞🌞🌞⭐|
48|0|3|0|0|🌞🌞🌞|
47|0|2|3|3|🌞🌞🌙🌙🌙⭐⭐⭐|
46|0|2|3|2|🌞🌞🌙🌙🌙⭐⭐|
45|0|2|3|1|🌞🌞🌙🌙🌙⭐|
44|0|2|3|0|🌞🌞🌙🌙🌙|
43|0|2|2|3|🌞🌞🌙🌙⭐⭐⭐|
42|0|2|2|2|🌞🌞🌙🌙⭐⭐|
41|0|2|2|1|🌞🌞🌙🌙⭐|
40|0|2|2|0|🌞🌞🌙🌙|
39|0|2|1|3|🌞🌞🌙⭐⭐⭐|
38|0|2|1|2|🌞🌞🌙⭐⭐|
37|0|2|1|1|🌞🌞🌙⭐|
36|0|2|1|0|🌞🌞🌙|
35|0|2|0|3|🌞🌞⭐⭐⭐|
34|0|2|0|2|🌞🌞⭐⭐|
33|0|2|0|1|🌞🌞⭐|
32|0|2|0|0|🌞🌞|
31|0|1|3|3|🌞🌙🌙🌙⭐⭐⭐|
30|0|1|3|2|🌞🌙🌙🌙⭐⭐|
29|0|1|3|1|🌞🌙🌙🌙⭐|
28|0|1|3|0|🌞🌙🌙🌙|
27|0|1|2|3|🌞🌙🌙⭐⭐⭐|
26|0|1|2|2|🌞🌙🌙⭐⭐|
25|0|1|2|1|🌞🌙🌙⭐|
24|0|1|2|0|🌞🌙🌙|
23|0|1|1|3|🌞🌙⭐⭐⭐|
22|0|1|1|2|🌞🌙⭐⭐|
21|0|1|1|1|🌞🌙⭐|
20|0|1|1|0|🌞🌙|
19|0|1|0|3|🌞⭐⭐⭐|
18|0|1|0|2|🌞⭐⭐|
17|0|1|0|1|🌞⭐|
16|0|1|0|0|🌞|
15|0|0|3|3|🌙🌙🌙⭐⭐⭐|
14|0|0|3|2|🌙🌙🌙⭐⭐|
13|0|0|3|1|🌙🌙🌙⭐|
12|0|0|3|0|🌙🌙🌙|
11|0|0|2|3|🌙🌙⭐⭐⭐|
10|0|0|2|2|🌙🌙⭐⭐|
9|0|0|2|1|🌙🌙⭐|
8|0|0|2|0|🌙🌙|
7|0|0|1|3|🌙⭐⭐⭐|
6|0|0|1|2|🌙⭐⭐|
5|0|0|1|1|🌙⭐|
4|0|0|1|0|🌙|
3|0|0|0|3|⭐⭐⭐|
2|0|0|0|2|⭐⭐|
1|0|0|0|1|⭐|
0|0|0|0|0||