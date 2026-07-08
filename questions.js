// 学习通题库 - 阶段性测试二（完整33题）
// 科目：Python程序设计
// 满分：100分

const questionBank = [
  // ========== 一、单选题（10题，每题3分，共30分） ==========
  {
    id: 1, type: "single", category: "单选题",
    question: "下列哪种方式能产生元组？",
    options: [
      { key: "A", text: "tuple1 = (0)" },
      { key: "B", text: "tuple1 = (0,)" },
      { key: "C", text: "tuple1 = (x for x in range(10))" },
      { key: "D", text: "tuple1 = [0]" }
    ],
    answer: "B", score: 3,
    explanation: "单元素元组必须在元素后加逗号，`(0,)` 才是元组，`(0)` 只是整数0。"
  },
  {
    id: 2, type: "single", category: "单选题",
    question: "在长字符串中，如何不显示换行符？",
    options: [
      { key: "A", text: "行尾加/" },
      { key: "B", text: "行尾加\\" },
      { key: "C", text: "行尾加\\0" },
      { key: "D", text: "行尾加\\r" }
    ],
    answer: "B", score: 3,
    explanation: "在Python长字符串中，行尾加反斜杠 `\\` 表示续行，不显示换行符。"
  },
  {
    id: 3, type: "single", category: "单选题",
    question: "下列哪种数据类型不可以作为字典的键？",
    options: [
      { key: "A", text: "列表" },
      { key: "B", text: "数字" },
      { key: "C", text: "字符串" },
      { key: "D", text: "元组" }
    ],
    answer: "A", score: 3,
    explanation: "字典的键必须是不可变类型，列表是可变类型，不能作为字典的键。"
  },
  {
    id: 4, type: "single", category: "单选题",
    question: "以下哪种字符串拼接方法效率最高？",
    options: [
      { key: "A", text: "加号连接" },
      { key: "B", text: "%连接" },
      { key: "C", text: "format函数" },
      { key: "D", text: "join函数" }
    ],
    answer: "D", score: 3,
    explanation: "`join()` 方法一次性分配内存，避免反复创建新字符串对象，在大规模拼接时效率最高。"
  },
  {
    id: 5, type: "single", category: "单选题",
    question: "对于 numpy 数组 arr = np.array([[1,2,3],[4,5,6],[7,8,9]])，执行 arr[1:, 1:] 的结果是？",
    options: [
      { key: "A", text: "[[2,3],[5,6],[8,9]]" },
      { key: "B", text: "[[1,2],[4,5]]" },
      { key: "C", text: "[[5,6],[8,9]]" },
      { key: "D", text: "[[4,5,6],[7,8,9]]" }
    ],
    answer: "C", score: 3,
    explanation: "`arr[1:, 1:]` 表示从第1行到最后、第1列到最后，即 [[5,6],[8,9]]。"
  },
  {
    id: 6, type: "single", category: "单选题",
    question: "想要删除DataFrame中所有包含缺失值的行，正确的代码是？",
    options: [
      { key: "A", text: "df.dropna(axis=1, how='any')" },
      { key: "B", text: "df.dropna(axis=0, how='all')" },
      { key: "C", text: "df.dropna(axis=1, how='all')" },
      { key: "D", text: "df.dropna(axis=0, how='any')" }
    ],
    answer: "D", score: 3,
    explanation: "`axis=0` 操作行，`how='any'` 表示只要有缺失值就删除该行。"
  },
  {
    id: 7, type: "single", category: "单选题",
    question: "对于二维数组 arr = np.array([[1,2,3],[4,5,6]])，执行 arr.sum(axis=1) 的结果是？",
    options: [
      { key: "A", text: "21" },
      { key: "B", text: "[6, 15]" },
      { key: "C", text: "[5, 7, 9]" },
      { key: "D", text: "[3, 7, 11]" }
    ],
    answer: "B", score: 3,
    explanation: "`axis=1` 按行求和：1+2+3=6，4+5+6=15，结果为 [6, 15]。"
  },
  {
    id: 8, type: "single", category: "单选题",
    question: "使用 matplotlib 绘制图表时出现中文乱码，主要解决方式是？",
    options: [
      { key: "A", text: "更换绘图函数" },
      { key: "B", text: "重启程序" },
      { key: "C", text: "更换代码编辑器" },
      { key: "D", text: "提前设置支持中文的字体样式" }
    ],
    answer: "D", score: 3,
    explanation: "matplotlib 默认字体不支持中文，需设置 `plt.rcParams['font.sans-serif'] = ['SimHei']` 等。"
  },
  {
    id: 9, type: "single", category: "单选题",
    question: "使用 matplotlib 绘图，必须导入的模块是？",
    options: [
      { key: "A", text: "import pyplot as mat" },
      { key: "B", text: "import matplotlib.pyplot as plt" },
      { key: "C", text: "import plot as plt" },
      { key: "D", text: "import matplotlib as mpl" }
    ],
    answer: "B", score: 3,
    explanation: "matplotlib 的绘图接口在 pyplot 子模块中，标准导入为 `import matplotlib.pyplot as plt`。"
  },
  {
    id: 10, type: "single", category: "单选题",
    question: "Python中的字典是一种什么类型的数据结构？",
    options: [
      { key: "A", text: "列表" },
      { key: "B", text: "映射" },
      { key: "C", text: "树" },
      { key: "D", text: "集合" }
    ],
    answer: "B", score: 3,
    explanation: "字典是一种映射（Mapping）类型，通过键-值对存储数据，实现键到值的映射关系。"
  },

  // ========== 二、多选题（6题，每题3分，共18分） ==========
  {
    id: 11, type: "multiple", category: "多选题",
    question: "以下哪些语言属于高级语言？",
    options: [
      { key: "A", text: "Python" },
      { key: "B", text: "机器语言" },
      { key: "C", text: "汇编语言" },
      { key: "D", text: "C++" }
    ],
    answer: ["A", "D"], score: 3,
    explanation: "Python 和 C++ 都是高级语言；机器语言和汇编语言属于低级语言。"
  },
  {
    id: 12, type: "multiple", category: "多选题",
    question: "下列哪些是元组的特点？",
    options: [
      { key: "A", text: "无序的" },
      { key: "B", text: "可变的" },
      { key: "C", text: "有序的" },
      { key: "D", text: "不可变的" }
    ],
    answer: ["C", "D"], score: 3,
    explanation: "元组是有序且不可变的序列类型，元素按定义顺序排列，创建后不能修改。"
  },
  {
    id: 13, type: "multiple", category: "多选题",
    question: "Python相比其他程序设计语言具有的特点是？",
    options: [
      { key: "A", text: "解释型" },
      { key: "B", text: "交互式" },
      { key: "C", text: "面向对象" },
      { key: "D", text: "服务端语言" }
    ],
    answer: ["A", "B", "C"], score: 3,
    explanation: "Python是解释型语言、支持交互式编程（REPL）、支持面向对象编程，但不仅限于服务端。"
  },
  {
    id: 14, type: "multiple", category: "多选题",
    question: "引发异常的原因包括？",
    options: [
      { key: "A", text: "除以零" },
      { key: "B", text: "下标越界" },
      { key: "C", text: "不同类型的变量运算" },
      { key: "D", text: "内存错误" }
    ],
    answer: ["A", "B", "C", "D"], score: 3,
    explanation: "四种情况均会引发异常：ZeroDivisionError、IndexError、TypeError、MemoryError。"
  },
  {
    id: 15, type: "multiple", category: "多选题",
    question: "下列哪些是 Numpy 数组的核心属性？",
    options: [
      { key: "A", text: "size（元素总数）" },
      { key: "B", text: "index（索引）" },
      { key: "C", text: "dtype（数据类型）" },
      { key: "D", text: "shape（数组形状）" }
    ],
    answer: ["A", "C", "D"], score: 3,
    explanation: "Numpy 核心属性包括 size、dtype、shape、ndim 等，index 不是核心属性。"
  },
  {
    id: 16, type: "multiple", category: "多选题",
    question: "下列哪些是 Pandas 的核心数据结构？",
    options: [
      { key: "A", text: "Series（一维带标签数组）" },
      { key: "B", text: "Panel（三维数据）" },
      { key: "C", text: "Array（数组）" },
      { key: "D", text: "DataFrame（二维表格数据）" }
    ],
    answer: ["A", "D"], score: 3,
    explanation: "Pandas 两大核心结构：Series（一维）和 DataFrame（二维）。Panel 已废弃。"
  },

  // ========== 三、程序理解题（8题，共24.1分） ==========
  {
    id: 17, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出 a、b、c 的值：\n\na,b,c = 'B','A','C'\nif(a>b):\n    a=b\n    b=c\n    c=a\nprint(a,b,c)",
    answer: "A C A", score: 3,
    explanation: "a='B',b='A',c='C'。'B'>'A'为True，执行a=b='A', b=c='C', c=a='A'。最终a='A',b='C',c='A'。"
  },
  {
    id: 18, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出输出结果：\n\ndat=['1','2','3','0','0','0']\nfor item in dat:\n    if item=='0':\n        dat.remove(item)\nprint(dat)",
    answer: "['1', '2', '3', '0']", score: 3,
    explanation: "遍历时删除元素会跳过下一个。删除第1个'0'后列表变短，第2个'0'被跳过，最终剩1个'0'。"
  },
  {
    id: 19, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出输出结果：\n\ndef sum(a,b):\n    sum = a + b\n    return sum\na = 'A'\nb = '99'\nsum(a,b)",
    answer: "A99", score: 3,
    explanation: "字符串拼接：'A' + '99' = 'A99'。"
  },
  {
    id: 20, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出执行结果：\n\nx = 10\ndef test():\n    global x\n    x = 20\ntest()\nprint(x)",
    answer: "20", score: 3,
    explanation: "`global x` 声明 x 为全局变量，函数内 x=20 修改全局变量，所以打印 20。"
  },
  {
    id: 21, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出控制台输出：\n\ndef count_up_to(n):\n    num = 1\n    while num <= n:\n        yield num\n        num += 1\ngen = count_up_to(3)\nprint(list(gen) + list(gen))",
    answer: "[1, 2, 3]", score: 3,
    explanation: "生成器只能迭代一次。第一次 list(gen) 得 [1,2,3]，第二次为空 []，拼接后为 [1,2,3]。"
  },
  {
    id: 22, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出控制台输出：\n\ndef factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)\nprint(factorial(4))",
    answer: "24", score: 3,
    explanation: "递归计算阶乘：4 × 3 × 2 × 1 = 24。"
  },
  {
    id: 23, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出控制台输出：\n\nclass Parent:\n    x = 10\nclass Child(Parent):\n    x = 20\n    def __init__(self):\n        self.x = 30\nc = Child()\nprint(c.x, Child.x)",
    answer: "30 20", score: 3,
    explanation: "实例属性 self.x=30 优先级最高，类属性 Child.x=20。c.x 先找实例属性（30），Child.x 直接访问类属性（20）。"
  },
  {
    id: 24, type: "fill", category: "程序理解题",
    question: "阅读以下程序，写出控制台输出：\n\ndef func(a, b, c=3):\n    return a + b + c\nt = (2, 3)\nprint(func(*t, c=1))",
    answer: "6", score: 3.1,
    explanation: "`*t` 解包为 a=2, b=3，c=1 覆盖默认值3。结果：2+3+1=6。"
  },

  // ========== 四、简答题（6题，共18.6分） ==========
  {
    id: 25, type: "essay", category: "简答题",
    question: "列表和字典有什么不同？",
    referenceAnswer: "列表中的数据是有序排列的，知道元素的索引，就能够查到对应的值。字典中的数据是'键-值'对，没有顺序可言，是通过键来查找与其对应值的。",
    score: 3.1,
    keyPoints: ["列表有序，字典无序", "列表通过索引访问，字典通过键访问", "列表用 [] 定义，字典用 {} 定义", "字典查找效率更高"]
  },
  {
    id: 26, type: "essay", category: "简答题",
    question: "Python 变量命名的基本规则有？",
    referenceAnswer: "只能由字母、数字和下划线组成。不能以数字开头。不能是 Python 的关键字，区分大小写。",
    score: 3.1,
    keyPoints: ["只能由字母、数字、下划线组成", "不能以数字开头", "不能是 Python 关键字", "区分大小写"]
  },
  {
    id: 27, type: "essay", category: "简答题",
    question: "Pandas的基本特点有？",
    referenceAnswer: "能合并其他出现在常见数据库中的关系运算。能灵活处理缺失数据。既能处理时间序列数据，也能处理非时间序列数据。有按轴自动显式数据对齐的数据结构，防止因许多数据未对齐以及来自不同数据源的数据而导致错误。",
    score: 3.1,
    keyPoints: ["支持关系运算（合并、连接等）", "灵活处理缺失数据", "支持时间序列和非时间序列数据", "自动数据对齐"]
  },
  {
    id: 28, type: "essay", category: "简答题",
    question: "使用Matplotlib实现数据图形化的优势有哪些？",
    referenceAnswer: "（1）使用起来极其简单。（2）以渐进、交互式方式实现数据可视化。（3）对图像元素控制力更强。（4）可输出PNG、PDF、SVG和EPS等多种格式。",
    score: 3.1,
    keyPoints: ["使用简单", "渐进、交互式数据可视化", "图像元素控制力强", "支持多种输出格式（PNG/PDF/SVG/EPS）"]
  },
  {
    id: 29, type: "essay", category: "简答题",
    question: "概括Python的特点。",
    referenceAnswer: "语法简洁、类库丰富、平台无关、胶水语言、通用编程、强制缩进、模式多样",
    score: 3.1,
    keyPoints: ["语法简洁", "类库丰富", "平台无关（跨平台）", "胶水语言（可调用C/C++等）", "通用编程", "强制缩进", "模式多样（面向对象、函数式等）"]
  },
  {
    id: 30, type: "essay", category: "简答题",
    question: "简述深拷贝与浅拷贝的区别和影响。",
    referenceAnswer: "浅拷贝：仅复制对象顶层引用（嵌套对象仍共享）。影响：修改嵌套对象会影响原对象（如列表中的子列表）。深拷贝：递归复制所有层级对象（完全独立的新对象）。影响：新旧对象完全隔离，互不影响。",
    score: 3.1,
    keyPoints: ["浅拷贝：仅复制顶层引用，嵌套对象共享", "浅拷贝影响：修改嵌套对象会影响原对象", "深拷贝：递归复制所有层级，完全独立", "深拷贝影响：新旧对象完全隔离"]
  },

  // ========== 五、编程题（3题，共9.3分） ==========
  {
    id: 31, type: "essay", category: "编程题",
    question: "设计三个字典dict_a、dict_b和dict_c，每个字典中存储了一个学生的信息，包括name和id，然后把三个字典存储到一个列表student中，遍历这个列表，将其中每个人所有信息都打印出来。",
    referenceAnswer: "dict_a = {'name':'Zhang San','id':'95001'}\ndict_b = {'name':'Li Si','id':'95002'}\ndict_c = {'name':'Wang Wu','id':'95003'}\nstudent = []\nstudent.append(dict_a)\nstudent.append(dict_b)\nstudent.append(dict_c)\nfor dict in student:\n    values = list(dict.values())\n    print('姓名是：%s，学号是：%s'%(values[0],values[1]))",
    score: 3.1,
    keyPoints: ["定义三个字典（含name和id）", "将字典存入列表", "遍历列表打印所有学生信息", "使用字典的values()或直接键访问"]
  },
  {
    id: 32, type: "essay", category: "编程题",
    question: "编写一个Python程序，要求用户输入一个整数n，判断它是否为质数。如果是质数，则输出\"是质数\"。如果不是质数，则输出\"不是质数\"。如果输入的n小于等于1，则抛出ValueError异常。",
    referenceAnswer: "def is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            return False\n    return True\ntry:\n    n = int(input(\"请输入一个正整数n：\"))\n    if n <= 1:\n        raise ValueError(\"输入的n必须大于1！\")\n    else:\n        if is_prime(n):\n            print(\"{}是质数\".format(n))\n        else:\n            print(\"{}不是质数\".format(n))\nexcept ValueError as e:\n    print(e)",
    score: 3.1,
    keyPoints: ["定义is_prime函数判断质数", "n<=1时返回False或抛异常", "使用try-except捕获ValueError", "遍历2到sqrt(n)判断整除", "正确输出\"是质数\"/\"不是质数\""]
  },
  {
    id: 33, type: "essay", category: "编程题",
    question: "编写程序，定义两个函数分别计算两个正整数的最大公约数和最小公倍数，输入两个正整数（需校验合法性判断是否大于0），输出计算结果。",
    referenceAnswer: "def gcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\ndef lcm(a, b):\n    return a * b // gcd(a, b)\n\nwhile True:\n    num1 = int(input(\"请输入第一个正整数：\"))\n    if num1 > 0:\n        break\n    print(\"请输入大于0的整数！\")\nwhile True:\n    num2 = int(input(\"请输入第二个正整数：\"))\n    if num2 > 0:\n        break\n    print(\"请输入大于0的整数！\")\n\ngcd_result,lcm_result = gcd(num1, num2), lcm(num1, num2)\nprint(f\"{num1}和{num2}的最大公约数：{gcd_result}\")\nprint(f\"{num1}和{num2}的最小公倍数：{lcm_result}\")",
    score: 3.1,
    keyPoints: ["定义gcd函数（辗转相除法）", "定义lcm函数（利用gcd）", "输入校验（判断>0）", "正确输出最大公约数和最小公倍数"]
  }
];

// 导出供HTML使用
if (typeof module !== 'undefined') {
  module.exports = { questionBank };
}
