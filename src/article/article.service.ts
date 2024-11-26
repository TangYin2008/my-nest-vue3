import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
    getArticleList(title: string): object {
        return{
            code: 200,
            msg: '请求成功',
            data: [
              {
                parentId: '1',
                paneName: '',
                children: [
                  {
                    id: '2',
                    title: 'Vue3中文文档',
                    href: 'https://cn.vuejs.org/',
                    source: [
                      {
                        id: '3',
                        type: 'source',
                        name: '官方',
                      },
                      {
                        id: '20',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/vuejs/core',
                      },
                    ],
                    desc: 'Vue3官方中文文档',
                  },
                  {
                    id: '11',
                    title: 'Vue3英文文档',
                    href: 'https://vuejs.org/',
                    source: [
                      {
                        id: '12',
                        type: 'source',
                        name: '官方',
                      },
                      {
                        id: '20',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/vuejs/core',
                      },
                    ],
                    desc: 'Vue3官方英文文档',
                  },
                  {
                    id: '9',
                    title: '前端面试题库',
                    href: 'https://vue3js.cn/interview/',
                    source: [
                      {
                        id: '10',
                        type: 'source',
                        name: '新增',
                      },
                      {
                        id: '101',
                        type: 'source',
                        name: '社区维护',
                      },
                      {
                        id: '102',
                        type: 'source',
                        name: '进行中',
                      },
                    ],
                    desc: '工作日每天一道经典面试题更新，风雨无阻',
                  },
                ],
              },
              {
                parentId: '5',
                paneName: 'Vue3生态支持',
                children: [
                  {
                    id: '17',
                    title: 'Vue CLI',
                    href: 'https://cli.vuejs.org/zh/index.html',
                    source: [
                      {
                        id: '18',
                        type: 'source',
                        name: '官方生态',
                      },
                    ],
                    desc: 'Vue开发的标准工具',
                  },
                  {
                    id: '21',
                    title: 'Vue Router',
                    href: 'https://router.vuejs.org/zh/index.html',
                    source: [
                      {
                        id: '22',
                        type: 'source',
                        name: '官方生态',
                      },
                    ],
                    desc: 'Vue Router 4.0提供了 Vue 3支持，并且有一些自己的突破性变化',
                  },
                  {
                    id: '23',
                    title: 'VueX',
                    href: 'https://vuex.vuejs.org/zh/index.html',
                    source: [
                      {
                        id: '24',
                        type: 'source',
                        name: '官方生态',
                      },
                    ],
                    desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化',
                  },
                  {
                    id: '25',
                    title: 'Vite',
                    href: 'https://cn.vitejs.dev/',
                    source: [
                      {
                        id: '26',
                        type: 'source',
                        name: '官方生态',
                      },
                    ],
                    desc: 'Vite 下一代前端开发与构建工具',
                  },
                  {
                    id: '27',
                    title: 'Pinia',
                    href: 'https://pinia.web3doc.top/',
                    source: [
                      {
                        id: '28',
                        type: 'source',
                        name: '爱好者翻译',
                      },
                    ],
                    desc: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态',
                  },
                ],
              },
              {
                parentId: '13',
                paneName: 'Vue3组件库',
                children: [
                  {
                    id: '14',
                    title: 'Element Plus',
                    href: 'https://element-plus.org/zh-CN/#/zh-CN/component/installation',
                    source: [
                      {
                        id: '15',
                        type: 'source',
                        name: 'PC端',
                      },
                      {
                        id: '16',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/element-plus/element-plus',
                      },
                    ],
                    desc: 'Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',
                  },
                  {
                    id: '6',
                    title: 'Ant Design of Vue',
                    href: 'https://antdv.com/docs/vue/introduce-cn/',
                    source: [
                      {
                        id: '7',
                        type: 'source',
                        name: 'PC端',
                      },
                      {
                        id: '8',
                        type: 'source',
                        name: 'Ant-design',
                      },
                      {
                        id: '8',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/vueComponent/ant-design-vue',
                      },
                    ],
                    desc: 'Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',
                  },
                ],
              },
              {
                parentId: '25',
                paneName: 'Vue3插件',
                children: [
                  {
                    id: '26',
                    title: 'unplugin-vue-components',
                    href: 'https://github.com/unplugin/unplugin-vue-components',
                    source: [
                      {
                        id: '27',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/unplugin/unplugin-vue-components',
                      },
                    ],
                    desc: 'unplugin-vue-components 插件可以在Vue文件中自动引入组件（包括项目自身的组件和各种组件库中的组件）。使用此插件后，不需要手动编写import了，插件会自动识别template中使用的自定义组件并自动注册。',
                  },
                  {
                    id: '28',
                    title: 'unplugin-auto-import',
                    href: 'https://github.com/unplugin/unplugin-auto-import',
                    source: [
                      {
                        id: '29',
                        type: 'image',
                        url: 'https://badgen.net/github/stars/unplugin/unplugin-auto-import',
                      },
                    ],
                    desc: 'unplugin-auto-import是一个现代的自动导入插件，它支持多种构建工具（例如 Vite 和 Webpack），可以根据你在代码中使用的标识符自动生成相应的 import 语句，从而减少重复代码，简化开发过程。',
                  },
                  {
                    id: '32',
                    title: 'VueUse',
                    href: 'https://v4-11-2.vueuse.org/',
                    source: [
                      {
                        id: '33',
                        type: 'source',
                        name: '爱好者翻译',
                      },
                    ],
                    desc: 'Vue实用程序集合',
                  },
                  {
                    id: '30',
                    title: 'tailwindcss',
                    href: 'https://www.tailwindcss.cn/',
                    source: [
                      {
                        id: '31',
                        type: 'source',
                        name: '爱好者翻译',
                      },
                    ],
                    desc: '只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。',
                  },
                ],
              },
          ]
        }
    }
}
