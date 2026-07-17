/**
 * 页脚组件 - 版权信息和社交媒体链接
 */
export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-border text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
    </footer>
  )
}
