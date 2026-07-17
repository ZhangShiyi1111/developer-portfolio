import { motion } from 'framer-motion'

/**
 * 联系区域 - 邮箱、GitHub、社交媒体链接
 */
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          联系我
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-12"
        >
          有合作意向或想聊聊技术？欢迎随时联系！
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:hello@example.com"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-from to-accent-to font-medium hover:opacity-90 transition-opacity"
          >
            发送邮件
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-dark-border font-medium hover:border-accent-from transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-lg border border-dark-border font-medium hover:border-accent-from transition-colors"
          >
            知乎
          </a>
        </motion.div>
      </div>
    </section>
  )
}
