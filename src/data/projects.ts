export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '电商平台',
    description: '基于 React + Node.js 的全栈电商解决方案，支持购物车、支付、订单管理等功能。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: '任务管理系统',
    description: '团队协作工具，支持看板、任务分配、进度追踪，帮助团队提升效率。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['TypeScript', 'React', 'Redux', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: '数据可视化仪表盘',
    description: '实时数据分析平台，提供丰富的图表类型和交互式数据探索功能。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    link: '#',
  },
]
