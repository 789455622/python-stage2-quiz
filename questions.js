// Python阶段性测试 - 题库（已删除编程题和简答题）
// 单选20 + 多选6 + 填空7 + 判断5 + 程序理解8 = 46题

const questionBank = [
  {
    "id": 1,
    "type": "single",
    "category": "单选题",
    "question": "下面代码的输出结果是( )。\n\nx = 12.34\nprint(type(x))",
    "options": [
      {
        "key": "A",
        "text": "<class 'int'>"
      },
      {
        "key": "B",
        "text": "<class 'float'>"
      },
      {
        "key": "C",
        "text": "<class 'bool'>"
      },
      {
        "key": "D",
        "text": "<class 'complex'>"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "12.34 是浮点数，type() 返回 <class 'float'>。"
  },
  {
    "id": 2,
    "type": "single",
    "category": "单选题",
    "question": "下列哪个选项是Python中定义函数时使用的关键字?( )",
    "options": [
      {
        "key": "A",
        "text": "def"
      },
      {
        "key": "B",
        "text": "func"
      },
      {
        "key": "C",
        "text": "function"
      },
      {
        "key": "D",
        "text": "Class"
      }
    ],
    "answer": "A",
    "score": 3,
    "explanation": "Python 使用 def 关键字定义函数。"
  },
  {
    "id": 3,
    "type": "single",
    "category": "单选题",
    "question": "下面if语句统计满足\"性别(gender)为男、职称(rank)为教授、年龄(age)小于40岁\"条件的人数,正确的语句为( )。",
    "options": [
      {
        "key": "A",
        "text": "if (gender == \"男\" or age < 40 and rank == \"教授\"): n+=1"
      },
      {
        "key": "B",
        "text": "if (gender ==\"男\" and age<40 and rank==\"教授\"): n+=1"
      },
      {
        "key": "C",
        "text": "if (gender ==\"男\" and age<40 or rank==\"教授\"): n+=1"
      },
      {
        "key": "D",
        "text": "if (gender ==\"男\" or age<40 or rank==\"教授\"): n+=1"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "三个条件必须同时满足，用 and 连接：gender=='男' and age<40 and rank=='教授'。"
  },
  {
    "id": 4,
    "type": "single",
    "category": "单选题",
    "question": "下列创建元组的语句中,正确的是( )。",
    "options": [
      {
        "key": "A",
        "text": "tu_one = tuple(\"1\",\"2\")"
      },
      {
        "key": "B",
        "text": "tu_two = (\"q\")"
      },
      {
        "key": "C",
        "text": "tu_three = (\"on\",)"
      },
      {
        "key": "D",
        "text": "tu_four = tuple(3, 5)"
      }
    ],
    "answer": "C",
    "score": 3,
    "explanation": "单元素元组必须在元素后加逗号 (\"on\",)。tuple() 只接受一个可迭代参数，(\"q\") 是字符串不是元组。"
  },
  {
    "id": 5,
    "type": "single",
    "category": "单选题",
    "question": "阅读下面程序:\n\nnum_one = 12\ndef sum(num_two):\n    global num_one\n    num_one = 90\n    return num_one + num_two\nprint(sum(10))\n\n运行代码,输出结果是( )。",
    "options": [
      {
        "key": "A",
        "text": "102"
      },
      {
        "key": "B",
        "text": "100"
      },
      {
        "key": "C",
        "text": "22"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "global 声明 num_one 为全局变量，函数内 num_one=90，返回 90+10=100。"
  },
  {
    "id": 6,
    "type": "single",
    "category": "单选题",
    "question": "下列关于继承的说法中,错误的是( )。",
    "options": [
      {
        "key": "A",
        "text": "Python不支持多继承"
      },
      {
        "key": "B",
        "text": "如果一个类有多个父类,该类会继承这些父类的成员"
      },
      {
        "key": "C",
        "text": "子类会自动拥有父类的属性和方法"
      },
      {
        "key": "D",
        "text": "私有属性和私有方法是不能被继承的"
      }
    ],
    "answer": "A",
    "score": 3,
    "explanation": "Python 支持多继承，所以A说法错误。一个类可以继承多个父类。"
  },
  {
    "id": 7,
    "type": "single",
    "category": "单选题",
    "question": "阅读下面程序:\n\nclass Init:\n    def __init__(self, addr, tel):\n        self.addr = addr\n        self.tel = tel\n    def show_info(self):\n        print(f\"地址:{self.addr}\")\n        print(f\"手机号:{self.tel}\")\ninit = Init(\"北京\", \"12345\")\ninit.show_info()\n\n运行代码,输出结果是( )。",
    "options": [
      {
        "key": "A",
        "text": "程序无法运行"
      },
      {
        "key": "B",
        "text": "手机号: 12345"
      },
      {
        "key": "C",
        "text": "地址:北京"
      },
      {
        "key": "D",
        "text": "地址:北京 手机号: 12345"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "show_info() 先打印地址再打印手机号，输出两行：地址:北京 和 手机号:12345。选项D概括了完整输出。"
  },
  {
    "id": 8,
    "type": "single",
    "category": "单选题",
    "question": "下列关于Python中模块的说法中,正确的是( )。",
    "options": [
      {
        "key": "A",
        "text": "程序中只能使用Python内置的标准模块"
      },
      {
        "key": "B",
        "text": "只有标准模块才支持import导入"
      },
      {
        "key": "C",
        "text": "使用import语句只能导入一个模块"
      },
      {
        "key": "D",
        "text": "只有导入模块后,才可以使用模块中的变量,函数和类"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "模块必须先导入才能使用其中的变量、函数和类。Python支持第三方模块，import可以导入多个模块。"
  },
  {
    "id": 9,
    "type": "single",
    "category": "单选题",
    "question": "执行下列语句:\n\nf = open('itheimA.txt', 'w')\n\n打开文件的位置应该在( )。",
    "options": [
      {
        "key": "A",
        "text": "C盘根目录下"
      },
      {
        "key": "B",
        "text": "D盘根目录下"
      },
      {
        "key": "C",
        "text": "Python安装目录下"
      },
      {
        "key": "D",
        "text": "与源文件相同的目录下"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "open() 使用相对路径时，文件会在与源代码相同的目录下创建。"
  },
  {
    "id": 10,
    "type": "single",
    "category": "单选题",
    "question": "下面哪个不是Python合法的标识符？",
    "options": [
      {
        "key": "A",
        "text": "int32"
      },
      {
        "key": "B",
        "text": "40XL"
      },
      {
        "key": "C",
        "text": "self"
      },
      {
        "key": "D",
        "text": "_name_"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "标识符不能以数字开头，40XL 以数字4开头，不合法。"
  },
  {
    "id": 11,
    "type": "single",
    "category": "单选题",
    "question": "下列哪种方式能产生元组？",
    "options": [
      {
        "key": "A",
        "text": "tuple1 = (0)"
      },
      {
        "key": "B",
        "text": "tuple1 = (0,)"
      },
      {
        "key": "C",
        "text": "tuple1 = (x for x in range(10))"
      },
      {
        "key": "D",
        "text": "tuple1 = [0]"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "单元素元组必须在元素后加逗号，`(0,)` 才是元组，`(0)` 只是整数0。"
  },
  {
    "id": 12,
    "type": "single",
    "category": "单选题",
    "question": "在长字符串中，如何不显示换行符？",
    "options": [
      {
        "key": "A",
        "text": "行尾加/"
      },
      {
        "key": "B",
        "text": "行尾加\\"
      },
      {
        "key": "C",
        "text": "行尾加\\0"
      },
      {
        "key": "D",
        "text": "行尾加\\r"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "行尾加反斜杠 `\\` 表示续行，不显示换行符。"
  },
  {
    "id": 13,
    "type": "single",
    "category": "单选题",
    "question": "下列哪种数据类型不可以作为字典的键？",
    "options": [
      {
        "key": "A",
        "text": "列表"
      },
      {
        "key": "B",
        "text": "数字"
      },
      {
        "key": "C",
        "text": "字符串"
      },
      {
        "key": "D",
        "text": "元组"
      }
    ],
    "answer": "A",
    "score": 3,
    "explanation": "字典的键必须是不可变类型，列表是可变类型，不能作为键。"
  },
  {
    "id": 14,
    "type": "single",
    "category": "单选题",
    "question": "以下哪种字符串拼接方法效率最高？",
    "options": [
      {
        "key": "A",
        "text": "加号连接"
      },
      {
        "key": "B",
        "text": "%连接"
      },
      {
        "key": "C",
        "text": "format函数"
      },
      {
        "key": "D",
        "text": "join函数"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "`join()` 一次性分配内存，避免反复创建新字符串对象，效率最高。"
  },
  {
    "id": 15,
    "type": "single",
    "category": "单选题",
    "question": "对于 numpy 数组 arr = np.array([[1,2,3],[4,5,6],[7,8,9]])，执行 arr[1:, 1:] 的结果是？",
    "options": [
      {
        "key": "A",
        "text": "[[2,3],[5,6],[8,9]]"
      },
      {
        "key": "B",
        "text": "[[1,2],[4,5]]"
      },
      {
        "key": "C",
        "text": "[[5,6],[8,9]]"
      },
      {
        "key": "D",
        "text": "[[4,5,6],[7,8,9]]"
      }
    ],
    "answer": "C",
    "score": 3,
    "explanation": "`arr[1:, 1:]` 从第1行到最后、第1列到最后，即 [[5,6],[8,9]]。"
  },
  {
    "id": 16,
    "type": "single",
    "category": "单选题",
    "question": "想要删除DataFrame中所有包含缺失值的行，正确的代码是？",
    "options": [
      {
        "key": "A",
        "text": "df.dropna(axis=1, how='any')"
      },
      {
        "key": "B",
        "text": "df.dropna(axis=0, how='all')"
      },
      {
        "key": "C",
        "text": "df.dropna(axis=1, how='all')"
      },
      {
        "key": "D",
        "text": "df.dropna(axis=0, how='any')"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "`axis=0` 操作行，`how='any'` 表示只要有缺失值就删除该行。"
  },
  {
    "id": 17,
    "type": "single",
    "category": "单选题",
    "question": "对于二维数组 arr = np.array([[1,2,3],[4,5,6]])，执行 arr.sum(axis=1) 的结果是？",
    "options": [
      {
        "key": "A",
        "text": "21"
      },
      {
        "key": "B",
        "text": "[6, 15]"
      },
      {
        "key": "C",
        "text": "[5, 7, 9]"
      },
      {
        "key": "D",
        "text": "[3, 7, 11]"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "`axis=1` 按行求和：1+2+3=6，4+5+6=15，结果为 [6, 15]。"
  },
  {
    "id": 18,
    "type": "single",
    "category": "单选题",
    "question": "使用 matplotlib 绘制图表时出现中文乱码，主要解决方式是？",
    "options": [
      {
        "key": "A",
        "text": "更换绘图函数"
      },
      {
        "key": "B",
        "text": "重启程序"
      },
      {
        "key": "C",
        "text": "更换代码编辑器"
      },
      {
        "key": "D",
        "text": "提前设置支持中文的字体样式"
      }
    ],
    "answer": "D",
    "score": 3,
    "explanation": "需设置 `plt.rcParams['font.sans-serif'] = ['SimHei']` 等中文字体。"
  },
  {
    "id": 19,
    "type": "single",
    "category": "单选题",
    "question": "使用 matplotlib 绘图，必须导入的模块是？",
    "options": [
      {
        "key": "A",
        "text": "import pyplot as mat"
      },
      {
        "key": "B",
        "text": "import matplotlib.pyplot as plt"
      },
      {
        "key": "C",
        "text": "import plot as plt"
      },
      {
        "key": "D",
        "text": "import matplotlib as mpl"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "标准导入方式为 `import matplotlib.pyplot as plt`。"
  },
  {
    "id": 20,
    "type": "single",
    "category": "单选题",
    "question": "Python中的字典是一种什么类型的数据结构？",
    "options": [
      {
        "key": "A",
        "text": "列表"
      },
      {
        "key": "B",
        "text": "映射"
      },
      {
        "key": "C",
        "text": "树"
      },
      {
        "key": "D",
        "text": "集合"
      }
    ],
    "answer": "B",
    "score": 3,
    "explanation": "字典是一种映射类型，通过键-值对存储数据。"
  },
  {
    "id": 21,
    "type": "multiple",
    "category": "多选题",
    "question": "以下哪些语言属于高级语言？",
    "options": [
      {
        "key": "A",
        "text": "Python"
      },
      {
        "key": "B",
        "text": "机器语言"
      },
      {
        "key": "C",
        "text": "汇编语言"
      },
      {
        "key": "D",
        "text": "C++"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "score": 3,
    "explanation": "Python 和 C++ 都是高级语言；机器语言和汇编语言属于低级语言。"
  },
  {
    "id": 22,
    "type": "multiple",
    "category": "多选题",
    "question": "下列哪些是元组的特点？",
    "options": [
      {
        "key": "A",
        "text": "无序的"
      },
      {
        "key": "B",
        "text": "可变的"
      },
      {
        "key": "C",
        "text": "有序的"
      },
      {
        "key": "D",
        "text": "不可变的"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "score": 3,
    "explanation": "元组是有序且不可变的序列类型。"
  },
  {
    "id": 23,
    "type": "multiple",
    "category": "多选题",
    "question": "Python相比其他程序设计语言具有的特点是？",
    "options": [
      {
        "key": "A",
        "text": "解释型"
      },
      {
        "key": "B",
        "text": "交互式"
      },
      {
        "key": "C",
        "text": "面向对象"
      },
      {
        "key": "D",
        "text": "服务端语言"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "score": 3,
    "explanation": "Python是解释型、交互式、面向对象语言，但不仅限于服务端。"
  },
  {
    "id": 24,
    "type": "multiple",
    "category": "多选题",
    "question": "引发异常的原因包括？",
    "options": [
      {
        "key": "A",
        "text": "除以零"
      },
      {
        "key": "B",
        "text": "下标越界"
      },
      {
        "key": "C",
        "text": "不同类型的变量运算"
      },
      {
        "key": "D",
        "text": "内存错误"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 3,
    "explanation": "四种情况均会引发异常：ZeroDivisionError、IndexError、TypeError、MemoryError。"
  },
  {
    "id": 25,
    "type": "multiple",
    "category": "多选题",
    "question": "下列哪些是 Numpy 数组的核心属性？",
    "options": [
      {
        "key": "A",
        "text": "size（元素总数）"
      },
      {
        "key": "B",
        "text": "index（索引）"
      },
      {
        "key": "C",
        "text": "dtype（数据类型）"
      },
      {
        "key": "D",
        "text": "shape（数组形状）"
      }
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "score": 3,
    "explanation": "Numpy 核心属性包括 size、dtype、shape、ndim 等，index 不是核心属性。"
  },
  {
    "id": 26,
    "type": "multiple",
    "category": "多选题",
    "question": "下列哪些是 Pandas 的核心数据结构？",
    "options": [
      {
        "key": "A",
        "text": "Series（一维带标签数组）"
      },
      {
        "key": "B",
        "text": "Panel（三维数据）"
      },
      {
        "key": "C",
        "text": "Array（数组）"
      },
      {
        "key": "D",
        "text": "DataFrame（二维表格数据）"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "score": 3,
    "explanation": "Pandas 两大核心结构：Series 和 DataFrame。Panel 已废弃。"
  },
  {
    "id": 27,
    "type": "fill",
    "category": "填空题",
    "question": "用Python语言编写的源程序文件存储时的扩展名是____。",
    "answer": "py",
    "score": 4.3,
    "explanation": "Python源文件扩展名为 .py。"
  },
  {
    "id": 28,
    "type": "fill",
    "category": "填空题",
    "question": "____是扩充函数功能的重要方法。",
    "answer": "装饰器",
    "score": 4.3,
    "explanation": "装饰器（Decorator）用于在不修改原函数代码的情况下扩展函数功能。"
  },
  {
    "id": 29,
    "type": "fill",
    "category": "填空题",
    "question": "表达式 [3] in [1, 2, 3, 4] 的值为(False/True)____。",
    "answer": "False",
    "score": 4.3,
    "explanation": "[3] 是一个列表，[1,2,3,4] 中不包含列表 [3]，所以结果为 False。3 in [1,2,3,4] 才是 True。"
  },
  {
    "id": 30,
    "type": "fill",
    "category": "填空题",
    "question": "封装、____、和多态是面向对象程序设计的三大特征。",
    "answer": "继承",
    "score": 4.3,
    "explanation": "面向对象三大特征：封装、继承、多态。"
  },
  {
    "id": 31,
    "type": "fill",
    "category": "填空题",
    "question": "若字符串 s='atc', 则 len(s) 的值是____。",
    "answer": "3",
    "score": 4.3,
    "explanation": "'atc' 有3个字符，len('atc')=3。"
  },
  {
    "id": 32,
    "type": "fill",
    "category": "填空题",
    "question": "在Python中,字典的每个元素有两部分组成,即键和值,其中____不允许重复。",
    "answer": "键",
    "score": 4.3,
    "explanation": "字典的键（key）必须唯一，不允许重复；值（value）可以重复。"
  },
  {
    "id": 33,
    "type": "fill",
    "category": "填空题",
    "question": "已知Python中已安装了第三方库Scipy,则导入库的命令为 ____ Scipy import * 。",
    "answer": "from",
    "score": 4.3,
    "explanation": "from Scipy import * 表示从Scipy库导入所有内容。"
  },
  {
    "id": 34,
    "type": "single",
    "category": "判断题",
    "question": "Python具有丰富的第三方库。",
    "options": [
      {
        "key": "A",
        "text": "对"
      },
      {
        "key": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "score": 4.3,
    "explanation": "Python 拥有庞大的第三方库生态，如 NumPy、Pandas、Django 等。"
  },
  {
    "id": 35,
    "type": "single",
    "category": "判断题",
    "question": "构造方法会在创建对象时自动调用。",
    "options": [
      {
        "key": "A",
        "text": "对"
      },
      {
        "key": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "score": 4.3,
    "explanation": "__init__() 构造方法在创建对象实例时自动调用。"
  },
  {
    "id": 36,
    "type": "single",
    "category": "判断题",
    "question": "一个函数必须带有至少一个参数。",
    "options": [
      {
        "key": "A",
        "text": "对"
      },
      {
        "key": "B",
        "text": "错"
      }
    ],
    "answer": "B",
    "score": 4.3,
    "explanation": "函数可以没有参数，如 def hello(): print('hi') 完全合法。"
  },
  {
    "id": 37,
    "type": "single",
    "category": "判断题",
    "question": "若程序中使用with语句打开文件,with语句中未调用close()方法,则文件将在程序跳出with结构时被关闭。",
    "options": [
      {
        "key": "A",
        "text": "对"
      },
      {
        "key": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "score": 4.3,
    "explanation": "with 语句会在代码块执行完毕后自动关闭文件，无需手动调用 close()。"
  },
  {
    "id": 38,
    "type": "single",
    "category": "判断题",
    "question": "匿名函数可用作函数的参数。",
    "options": [
      {
        "key": "A",
        "text": "对"
      },
      {
        "key": "B",
        "text": "错"
      }
    ],
    "answer": "A",
    "score": 4.3,
    "explanation": "lambda 匿名函数常作为参数传递给 map()、filter()、sorted() 等函数。"
  },
  {
    "id": 39,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出 a、b、c 的值：\n\na,b,c = 'B','A','C'\nif(a>b):\n    a=b\n    b=c\n    c=a\nprint(a,b,c)",
    "answer": "A C A",
    "score": 3,
    "explanation": "'B'>'A'为True，执行a=b='A', b=c='C', c=a='A'。最终a='A',b='C',c='A'。"
  },
  {
    "id": 40,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出输出结果：\n\ndat=['1','2','3','0','0','0']\nfor item in dat:\n    if item=='0':\n        dat.remove(item)\nprint(dat)",
    "answer": "['1', '2', '3', '0']",
    "score": 3,
    "explanation": "遍历时删除元素会跳过下一个，最终剩1个'0'。"
  },
  {
    "id": 41,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出输出结果：\n\ndef sum(a,b):\n    sum = a + b\n    return sum\na = 'A'\nb = '99'\nsum(a,b)",
    "answer": "A99",
    "score": 3,
    "explanation": "字符串拼接：'A' + '99' = 'A99'。"
  },
  {
    "id": 42,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出执行结果：\n\nx = 10\ndef test():\n    global x\n    x = 20\ntest()\nprint(x)",
    "answer": "20",
    "score": 3,
    "explanation": "`global x` 使函数内修改的是全局变量，打印 20。"
  },
  {
    "id": 43,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出控制台输出：\n\ndef count_up_to(n):\n    num = 1\n    while num <= n:\n        yield num\n        num += 1\ngen = count_up_to(3)\nprint(list(gen) + list(gen))",
    "answer": "[1, 2, 3]",
    "score": 3,
    "explanation": "生成器只能迭代一次，第一次 [1,2,3]，第二次为空，拼接后 [1,2,3]。"
  },
  {
    "id": 44,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出控制台输出：\n\ndef factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)\nprint(factorial(4))",
    "answer": "24",
    "score": 3,
    "explanation": "递归计算阶乘：4×3×2×1 = 24。"
  },
  {
    "id": 45,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出控制台输出：\n\nclass Parent:\n    x = 10\nclass Child(Parent):\n    x = 20\n    def __init__(self):\n        self.x = 30\nc = Child()\nprint(c.x, Child.x)",
    "answer": "30 20",
    "score": 3,
    "explanation": "实例属性 self.x=30 优先，类属性 Child.x=20。"
  },
  {
    "id": 46,
    "type": "fill",
    "category": "程序理解题",
    "question": "阅读以下程序，写出控制台输出：\n\ndef func(a, b, c=3):\n    return a*b + c\nt = (2, 3)\nprint(func(*t, c=1))",
    "answer": "7",
    "score": 3.1,
    "explanation": "`*t` 解包为 a=2, b=3，c=1。结果：2×3+1=7。"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { questionBank };
}
