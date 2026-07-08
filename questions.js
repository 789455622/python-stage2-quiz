// Python阶段性测试 - 题库（来自docx文档替换）
// 单选10 + 填空7 + 判断5 + 简答1 = 23题
// 满分：82分（按文档标注的分值）

const questionBank = [
  // ========== 一、单选题（10题，每题3分，共30分） ==========
  {
    id: 1, type: "single", category: "单选题",
    question: "下面代码的输出结果是( )。\n\nx = 12.34\nprint(type(x))",
    options: [
      { key: "A", text: "<class 'int'>" },
      { key: "B", text: "<class 'float'>" },
      { key: "C", text: "<class 'bool'>" },
      { key: "D", text: "<class 'complex'>" }
    ],
    answer: "B", score: 3,
    explanation: "12.34 是浮点数，type() 返回 <class 'float'>。"
  },
  {
    id: 2, type: "single", category: "单选题",
    question: "下列哪个选项是Python中定义函数时使用的关键字?( )",
    options: [
      { key: "A", text: "def" },
      { key: "B", text: "func" },
      { key: "C", text: "function" },
      { key: "D", text: "Class" }
    ],
    answer: "A", score: 3,
    explanation: "Python 使用 def 关键字定义函数。"
  },
  {
    id: 3, type: "single", category: "单选题",
    question: "下面if语句统计满足\"性别(gender)为男、职称(rank)为教授、年龄(age)小于40岁\"条件的人数,正确的语句为( )。",
    options: [
      { key: "A", text: "if (gender == \"男\" or age < 40 and rank == \"教授\"): n+=1" },
      { key: "B", text: "if (gender ==\"男\" and age<40 and rank==\"教授\"): n+=1" },
      { key: "C", text: "if (gender ==\"男\" and age<40 or rank==\"教授\"): n+=1" },
      { key: "D", text: "if (gender ==\"男\" or age<40 or rank==\"教授\"): n+=1" }
    ],
    answer: "B", score: 3,
    explanation: "三个条件必须同时满足，用 and 连接：gender=='男' and age<40 and rank=='教授'。"
  },
  {
    id: 4, type: "single", category: "单选题",
    question: "下列创建元组的语句中,正确的是( )。",
    options: [
      { key: "A", text: "tu_one = tuple(\"1\",\"2\")" },
      { key: "B", text: "tu_two = (\"q\")" },
      { key: "C", text: "tu_three = (\"on\",)" },
      { key: "D", text: "tu_four = tuple(3, 5)" }
    ],
    answer: "C", score: 3,
    explanation: "单元素元组必须在元素后加逗号 (\"on\",)。tuple() 只接受一个可迭代参数，(\"q\") 是字符串不是元组。"
  },
  {
    id: 5, type: "single", category: "单选题",
    question: "阅读下面程序:\n\nnum_one = 12\ndef sum(num_two):\n    global num_one\n    num_one = 90\n    return num_one + num_two\nprint(sum(10))\n\n运行代码,输出结果是( )。",
    options: [
      { key: "A", text: "102" },
      { key: "B", text: "100" },
      { key: "C", text: "22" },
      { key: "D", text: "12" }
    ],
    answer: "B", score: 3,
    explanation: "global 声明 num_one 为全局变量，函数内 num_one=90，返回 90+10=100。"
  },
  {
    id: 6, type: "single", category: "单选题",
    question: "下列关于继承的说法中,错误的是( )。",
    options: [
      { key: "A", text: "Python不支持多继承" },
      { key: "B", text: "如果一个类有多个父类,该类会继承这些父类的成员" },
      { key: "C", text: "子类会自动拥有父类的属性和方法" },
      { key: "D", text: "私有属性和私有方法是不能被继承的" }
    ],
    answer: "A", score: 3,
    explanation: "Python 支持多继承，所以A说法错误。一个类可以继承多个父类。"
  },
  {
    id: 7, type: "single", category: "单选题",
    question: "阅读下面程序:\n\nclass Init:\n    def __init__(self, addr, tel):\n        self.addr = addr\n        self.tel = tel\n    def show_info(self):\n        print(f\"地址:{self.addr}\")\n        print(f\"手机号:{self.tel}\")\ninit = Init(\"北京\", \"12345\")\ninit.show_info()\n\n运行代码,输出结果是( )。",
    options: [
      { key: "A", text: "程序无法运行" },
      { key: "B", text: "手机号: 12345" },
      { key: "C", text: "地址:北京" },
      { key: "D", text: "地址:北京 手机号: 12345" }
    ],
    answer: "D", score: 3,
    explanation: "show_info() 先打印地址再打印手机号，输出两行：地址:北京 和 手机号:12345。选项D概括了完整输出。"
  },
  {
    id: 8, type: "single", category: "单选题",
    question: "下列关于Python中模块的说法中,正确的是( )。",
    options: [
      { key: "A", text: "程序中只能使用Python内置的标准模块" },
      { key: "B", text: "只有标准模块才支持import导入" },
      { key: "C", text: "使用import语句只能导入一个模块" },
      { key: "D", text: "只有导入模块后,才可以使用模块中的变量,函数和类" }
    ],
    answer: "D", score: 3,
    explanation: "模块必须先导入才能使用其中的变量、函数和类。Python支持第三方模块，import可以导入多个模块。"
  },
  {
    id: 9, type: "single", category: "单选题",
    question: "执行下列语句:\n\nf = open('itheimA.txt', 'w')\n\n打开文件的位置应该在( )。",
    options: [
      { key: "A", text: "C盘根目录下" },
      { key: "B", text: "D盘根目录下" },
      { key: "C", text: "Python安装目录下" },
      { key: "D", text: "与源文件相同的目录下" }
    ],
    answer: "D", score: 3,
    explanation: "open() 使用相对路径时，文件会在与源代码相同的目录下创建。"
  },
  {
    id: 10, type: "single", category: "单选题",
    question: "下面哪个不是Python合法的标识符？",
    options: [
      { key: "A", text: "int32" },
      { key: "B", text: "40XL" },
      { key: "C", text: "self" },
      { key: "D", text: "_name_" }
    ],
    answer: "B", score: 3,
    explanation: "标识符不能以数字开头，40XL 以数字4开头，不合法。"
  },

  // ========== 二、填空题（7题，共30.1分） ==========
  {
    id: 11, type: "fill", category: "填空题",
    question: "用Python语言编写的源程序文件存储时的扩展名是____。",
    answer: "py", score: 4.3,
    explanation: "Python源文件扩展名为 .py。"
  },
  {
    id: 12, type: "fill", category: "填空题",
    question: "____是扩充函数功能的重要方法。",
    answer: "装饰器", score: 4.3,
    explanation: "装饰器（Decorator）用于在不修改原函数代码的情况下扩展函数功能。"
  },
  {
    id: 13, type: "fill", category: "填空题",
    question: "表达式 [3] in [1, 2, 3, 4] 的值为(False/True)____。",
    answer: "False", score: 4.3,
    explanation: "[3] 是一个列表，[1,2,3,4] 中不包含列表 [3]，所以结果为 False。3 in [1,2,3,4] 才是 True。"
  },
  {
    id: 14, type: "fill", category: "填空题",
    question: "封装、____、和多态是面向对象程序设计的三大特征。",
    answer: "继承", score: 4.3,
    explanation: "面向对象三大特征：封装、继承、多态。"
  },
  {
    id: 15, type: "fill", category: "填空题",
    question: "若字符串 s='atc', 则 len(s) 的值是____。",
    answer: "3", score: 4.3,
    explanation: "'atc' 有3个字符，len('atc')=3。"
  },
  {
    id: 16, type: "fill", category: "填空题",
    question: "在Python中,字典的每个元素有两部分组成,即键和值,其中____不允许重复。",
    answer: "键", score: 4.3,
    explanation: "字典的键（key）必须唯一，不允许重复；值（value）可以重复。"
  },
  {
    id: 17, type: "fill", category: "填空题",
    question: "已知Python中已安装了第三方库Scipy,则导入库的命令为 ____ Scipy import * 。",
    answer: "from", score: 4.3,
    explanation: "from Scipy import * 表示从Scipy库导入所有内容。"
  },

  // ========== 三、判断题（5题，共21.5分） ==========
  {
    id: 18, type: "single", category: "判断题",
    question: "Python具有丰富的第三方库。",
    options: [
      { key: "A", text: "对" },
      { key: "B", text: "错" }
    ],
    answer: "A", score: 4.3,
    explanation: "Python 拥有庞大的第三方库生态，如 NumPy、Pandas、Django 等。"
  },
  {
    id: 19, type: "single", category: "判断题",
    question: "构造方法会在创建对象时自动调用。",
    options: [
      { key: "A", text: "对" },
      { key: "B", text: "错" }
    ],
    answer: "A", score: 4.3,
    explanation: "__init__() 构造方法在创建对象实例时自动调用。"
  },
  {
    id: 20, type: "single", category: "判断题",
    question: "一个函数必须带有至少一个参数。",
    options: [
      { key: "A", text: "对" },
      { key: "B", text: "错" }
    ],
    answer: "B", score: 4.3,
    explanation: "函数可以没有参数，如 def hello(): print('hi') 完全合法。"
  },
  {
    id: 21, type: "single", category: "判断题",
    question: "若程序中使用with语句打开文件,with语句中未调用close()方法,则文件将在程序跳出with结构时被关闭。",
    options: [
      { key: "A", text: "对" },
      { key: "B", text: "错" }
    ],
    answer: "A", score: 4.3,
    explanation: "with 语句会在代码块执行完毕后自动关闭文件，无需手动调用 close()。"
  },
  {
    id: 22, type: "single", category: "判断题",
    question: "匿名函数可用作函数的参数。",
    options: [
      { key: "A", text: "对" },
      { key: "B", text: "错" }
    ],
    answer: "A", score: 4.3,
    explanation: "lambda 匿名函数常作为参数传递给 map()、filter()、sorted() 等函数。"
  },

  // ========== 四、简答题（1题，5.4分） ==========
  {
    id: 23, type: "essay", category: "简答题",
    question: "设计一个Circle类表示圆，这个类字段是圆的半径，一个求周长的实例方法，一个求面积的实例方法。输入一个1-100之间的数值，使用定义的圆的类创建一个圆，并调用实例方法分别计算出周长和面积，并正确输出。要求圆周率π从标准库math中导入pi。",
    referenceAnswer: "from math import pi\n\nclass Circle:\n    def __init__(self, r):\n        self.r = r\n    def perimeter(self):\n        return 2 * pi * self.r\n    def area(self):\n        return pi * self.r ** 2\n\nr = int(input())\nc = Circle(r)\nprint(c.perimeter())\nprint(c.area())",
    score: 5.4,
    keyPoints: [
      "从 math 导入 pi",
      "定义 Circle 类，包含半径属性 r",
      "定义求周长方法 perimeter()：2*π*r",
      "定义求面积方法 area()：π*r²",
      "创建对象并调用方法输出结果"
    ]
  }
];

// 导出供HTML使用
if (typeof module !== 'undefined') {
  module.exports = { questionBank };
}
