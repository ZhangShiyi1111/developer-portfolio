import { motion } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * 关于区域 - 详细介绍 + 技能条
 */
export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          关于我
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          一名全栈开发工程师，拥有多年 Web 开发经验。热衷于学习新技术，
          注重代码质量与用户体验，善于将复杂问题简单化。
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">技能栈</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-dark-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-from to-accent-to"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">开发理念</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent-to">{"\u2192"}</span>
                代码可读性优先，保持简洁清晰
              </li>
              <li className="flex gap-3">
                <span className="text-accent-to">{"\u2192"}</span>
                注重性能优化与用户体验
              </li>
              <li className="flex gap-3">
                <span className="text-accent-to">{"\u2192"}</span>
                持续学习，紧跟技术前沿
              </li>
              <li className="flex gap-3">
                <span className="text-accent-to">{"\u2192"}</span>
                善于团队协作与沟通
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
