import { motion } from 'framer-motion'

/**
 * 首页 Hero 区域 - 大标题、简介、头像
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center text-4xl font-bold">
            我
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent-to">
            你好，我是开发者
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            热爱技术，专注于构建优雅、高性能的 Web 应用程序。
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-from to-accent-to font-medium hover:opacity-90 transition-opacity"
            >
              查看作品
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-dark-border font-medium hover:border-accent-from transition-colors"
            >
              联系我
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
