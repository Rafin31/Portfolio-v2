"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { skills, skillCategories, type SkillCategory } from "@/data/portfolio"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiNetlify,
  SiHeroku,
  SiGit,
  SiJira,
  SiPostman,
  SiJest,
  SiLinux,
  SiSolidity,
  SiSocketdotio,
  SiWeb3Dotjs,
} from "react-icons/si"
import { HiShieldCheck, HiCloud } from "react-icons/hi2"

// Map skill names to react-icons components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  TailwindCSS: SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Laravel: SiLaravel,
  PHP: SiPhp,
  Python: SiPython,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  "AWS EC2": HiCloud,
  "AWS S3": HiCloud,
  "AWS Lambda": HiCloud,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Netlify: SiNetlify,
  Heroku: SiHeroku,
  Git: SiGit,
  Jira: SiJira,
  Postman: SiPostman,
  Jest: SiJest,
  "Linux/Ubuntu": SiLinux,
  Solidity: SiSolidity,
  "Socket.io": SiSocketdotio,
  "Web3.js": SiWeb3Dotjs,
  "JWT Auth": HiShieldCheck,
  "OAuth 2.0": HiShieldCheck,
  RBAC: HiShieldCheck,
  "CI/CD": HiCloud,
  Railway: HiCloud,
  CPanel: HiCloud,
  SQL: SiMysql,
  Microservices: HiCloud,
  "RESTful APIs": SiNodedotjs,
  "Responsive Design": SiCss,
  "Agile/Scrum": SiJira,
  SDLC: SiJira,
  "Unit Testing": SiJest,
  "Integration Testing": SiJest,
}

// Colour for each skill category
const categoryColors: Record<SkillCategory, string> = {
  frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  backend: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  database: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  devops: "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/20",
  tools: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
}

const hoverColors: Record<SkillCategory, string> = {
  frontend: "hover:border-blue-400 hover:text-blue-300",
  backend: "hover:border-emerald-400 hover:text-emerald-300",
  database: "hover:border-purple-400 hover:text-purple-300",
  devops: "hover:border-accent-yellow hover:text-amber-300",
  tools: "hover:border-accent-cyan hover:text-cyan-300",
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState<SkillCategory>("frontend")

  const activeSkills = skills[activeTab]
  const colorClass = categoryColors[activeTab]
  const hover = hoverColors[activeTab]

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent-yellow/3 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Technical expertise
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Skills & Tech Stack
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeTab === cat.id
                  ? `${categoryColors[cat.id]} scale-105 shadow-lg`
                  : "border-border text-text-muted hover:border-border/80 hover:text-text-primary bg-card"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill pills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {activeSkills.map((skill, i) => {
              const Icon = iconMap[skill.name]
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3
                    ${hover} cursor-default transition-all duration-200 group hover:scale-105 hover:shadow-lg`}
                >
                  {Icon && (
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity
                        ${colorClass.split(" ")[0]}`}
                    />
                  )}
                  <span className="text-text-muted text-sm font-medium group-hover:text-text-primary transition-colors truncate">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { count: "9+", label: "Frontend Technologies", color: "text-blue-400" },
            { count: "10+", label: "Backend Tools", color: "text-emerald-400" },
            { count: "5+", label: "Databases", color: "text-purple-400" },
            { count: "10+", label: "DevOps & Cloud", color: "text-accent-yellow" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent-yellow/30 transition-colors duration-200"
            >
              <div className={`font-heading text-3xl font-bold ${item.color} mb-1`}>
                {item.count}
              </div>
              <div className="text-text-muted text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
