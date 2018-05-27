module.exports = {
  root: true,
  parser: 'babel-eslint',//解析器，这里我们使用babel-eslint
  parserOptions: {
    sourceType: 'module'//类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    es6: true, // promise 之类的全局变量
    browser: true,//预定义的全局变量，这里是浏览器环境
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard', //扩展，可以通过字符串或者一个数组来扩展规则，自己搞规则就不需要了
  // required to lint *.vue files
  plugins: [
    'html' //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
  // add your custom rules here
  // https://github.com/feross/standard/blob/master/docs/RULES-zhtw.md
  'rules': {
    // 使用两个空格
    'indent': ["error", 2, { "SwitchCase": 1 }],
    // 使用单引号和反引号
    'quotes': ["error", "single", { "allowTemplateLiterals": true }],
    // 禁止出现未使用的变量
    'no-unused-vars': 2,
    // 关键字前后加上空格
    'keyword-spacing': 2,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "ignore"
    }],
    // 统一用 === 取代 ==。
    'eqeqeq': 0,
    // 赋值表达式 等号两边必须要有空格
    'space-infix-ops': [2, { 'int32Hint': false }],
    // 逗号之后需要一个空格
    'comma-spacing': 2,
    // 把else语句放在if }括号的同一行
    'brace-style': 2,
    // 强制处理err参数
    'handle-callback-err': 2,
    // 在if语句多一定要对浏览器中的全局变数加上window前缀。
    'no-undef': 2,
    // 换行时 最多允许空两行
    'no-multiple-empty-lines': 2,
    // 当运算符换行时 运算符放在语句最前方
    'operator-linebreak': [2, "before"],
    // 声明变量格式设置
    'one-var': ["error", { var: "never", let: "never", const: "never" }],
    // 允许在判断时赋值 不过要加等号
    'no-cond-assign': 2,
    // 在单行程序中 内容部分前后必须要加上空格
    'block-spacing': 2,
    // 声明变量时必须使用驼峰命名法 不允许出现下划线
    'camelcase': 2,
    // 不允许行尾出现逗号
    'comma-dangle': 0,
    // 逗号必须放在行位的最后
    'comma-style': 2,
    // 属性和它前面的点必须放在同一行
    'dot-location': [2, 'property'],
    // 声明对象时 值前面必须加上空格
    'key-spacing': 2,
    // 构造函数首字母必须大写
    'new-cap': 2,
    // 没有参数的构造函数new时必须要加括号。
    'new-cap': 2,
    // 对象的setter如果有设定时，getter也要设定。
    'accessor-pairs': 2,
    // 在es6(class)构造函数的继承中一定要调用super()
    'constructor-super': 2,
    // 声明固定数组时，用中括号声明，不能使用new Array(1, 2, 3),
    // 声明一个长度固定的数组时 可以使用new Array(5)
    'no-array-constructor': 2,
    // 不使用 arguments.callee 和 arguments.caller
    'no-caller': 2,
    // 当变量是构造函数时 不能修改变量 类似const
    'no-class-assign': 2,
    // 不允许修改const
    'no-const-assign': 2,
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 2,
    // 在发布时禁止使用debugger调试
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 不能对var出来的变量使用delete
    'no-delete-var': 2,
    // 函数不能使用相同的参数
    'no-dupe-args': 2,
    // 类中不能存在相同键
    'no-dupe-class-members': 2,
    // 对象中不能存在相同的键
    'no-dupe-keys': 2,
    // switch中能存在相同的case
    'no-duplicate-case': 2,
    // 模块的引入只能一起 限制 import
    'no-duplicate-imports': 2,
    // 正则表达式中的[]内容不能为空
    'no-empty-character-class': 2,
    // 在解构赋值中不能存在空的对象
    'no-empty-pattern': 2,
    // 不使用eval()
    'no-eval': 2,
    // 在catch语句中不能重新定义错误变量 error
    'no-ex-assign': 2,
    // 不能扩展原生对象 Object例外
    'no-extend-native': [2, { "exceptions": ["Object"] }],
    // 避免不必要的函数绑定（bind）
    'no-extra-bind': 0,
    // 避免不必要的布尔值转换
    'no-extra-boolean-cast': 2,
    // 函数声明是不加多余的括号
    'no-extra-parens': 2,
    // 在 switch 中使用 break or return 避免把所有的 case 都执行
    'no-fallthrough': 2,
    // 小数前面必须要有数字
    'no-floating-decimal': 2,
    // 不能重新定义已经声明了的函数变量
    'no-func-assign': 2,
    // 避免重新定义window
    'no-global-assign': 2,
    // 不能间接使用eval
    'no-implied-eval': 2,
    // 不能再if之类的作用于中声明function
    'no-inner-declarations': 2,
    // 避免regexp中使用错误的表达式
    'no-invalid-regexp': 2,
    // 避免不正常的空白
    'no-irregular-whitespace': 2,
    // 不使用迭代器
    'no-iterator': 0,
    // 键名不能与变量名相同
    'no-label-var': 2,
    // 避免非必要的块结构
    'no-lone-blocks': 2,
    // 避免使用值为if switch等的表达式
    'no-labels': 2,
    // 不允许混合制表符和空格
    'no-mixed-spaces-and-tabs': 2,
    // 除了缩进 排版 不允许使用多余的空格
    'no-multi-spaces': 2,
    // 禁止在字符串末尾使用\ 来代替换行
    'no-multi-str': 2,
    // 禁止使用new时不把结果保存下来
    'no-new': 2,
    // 禁止使用new Function()
    'no-new-func': 2,
    // 禁止使用new Object()
    'no-new-object': 2,
    // 禁止使用new require()
    'no-new-require': 2,
    // 禁止使用new Symbol()
    'no-new-symbol': 2,
    // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-new-wrappers': 2,
    // 不能把内置对象赋值给变量 Math JSON
    'no-obj-calls': 2,
    // 禁止使用八进制数字
    'no-octal': 2,
    // 禁止使用八进制转义序列
    'no-octal-escape': 2,
    // 避免对__dirname和__filename 使用加好拼接路径  请使用path.join and path.resolve
    'no-path-concat': 2,
    // 避免使用 __proto__ 用 getPrototypeOf 替代.
    'no-proto': 2,
    // 禁止重新声明变量
    'no-redeclare': 2,
    // 在return语句中，如果要赋值的话，必须用括号包住。
    'no-return-assign': 2,
    // 避免把变数赋值给自己
    'no-self-assign': 2,
    // 避免把变量跟自己比较
    'no-self-compare': 2,
    // 避免使用逗号运算子。
    'no-sequences': 2,
    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-shadow-restricted-names': 2,
    // 禁止稀疏数组， [1,,2]
    'no-sparse-arrays': 2,
    // 禁止在常规字符串中使用模板字符串语法 ${}
    'no-template-curly-in-string': 2,
    // super() 要在this之前被调用
    'no-this-before-super': 2,
    // throw抛出错误时只能 throw new Error('error')
    'no-throw-literal': 2,
    // 行尾不能存在空格
    'no-trailing-spaces': 2,
    // 避免使用undefined初始变量
    'no-undef-init': 2,
    // 避免一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 避免不必要的三元运算符
    'no-unneeded-ternary': 2,
    // 避免在return、throw、continue和break后面有不会被执行的代码
    'no-unreachable': 2,
    // 这条规则不允许return，throw，break，和continue语句在finally块里面。它允许间接使用，例如function或class定义。
    'no-unsafe-finally': 2,
    // 关系运算子的左算子不可以被否定。
    'no-unsafe-negation': 2,
    // 避免不必要的 .call() 和 .apply() 用法
    'no-useless-call': 2,
    // 避免对象中使用多余的需要计算的属性
    'no-useless-computed-key': 2,
    // 避免不必要的构造函数
    'no-useless-constructor': 2,
    // 避免使用不必要的跳脱字节
    'no-useless-escape': 2,
    // 避免在 import、export 和 destructured 时，出现不必要的重新命名。
    'no-useless-rename': 2,
    // 避免在属性前加空白。
    'no-whitespace-before-property': 2,
    // 禁止使用with
    'no-with': 2,
    // 对象属性声明时，换行的一致性。
    'object-property-newline': [2, { "allowMultiplePropertiesPerLine": true }],
    // 程序块前后是否需要空行
    'padded-blocks': 0,
    // 展开运算符之前不需要加空格
    'rest-spread-spacing': 2,
    // 分好后面要加空格，前面不要加
    'semi-spacing': 2,
    // 块{}前后要加空格
    'space-before-blocks': 2,
    // 括号內不要加空格
    'space-in-parens': 2,
    // 一元运算符前后是否需要加上空格
    'space-unary-ops': [2, { "words": true, "nonwords": false }],
    // 注释前后需要加上空格
    'spaced-comment': 2,
    // 末班字符串前后不能添加空格 错误: ${ X }
    'template-curly-spacing': 2,
    // 使用isNaN来检查是否为NaN
    'use-isnan': 2,
    // typeof比较的对象一定要是有效的字串。
    'valid-typeof': 2,
    // 立即执行的函数需要被括号包起来
    'wrap-iife': 2,
    // 在generator函数的yield和星号之间必须存在空格
    'yield-star-spacing': 2,
    // 禁止等号右边为变量 等号右边最好为值
    'yoda': 2,
    // 结尾必须要加上分号
    'semi': 2,
    // 避免多行表达式
    'no-unexpected-multiline': 2,
  }
}
