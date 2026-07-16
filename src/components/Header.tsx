import { Link } from 'react-router-dom'

/**
 * 顶部导航栏组件 - 固定在页面顶部，包含导航链接
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
          Portfolio
        </Link>
        <ul className="flex gap-8 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white transition-colors">关于</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">项目</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">联系</a></li>
        </ul>
      </nav>
    </header>
  )
}
