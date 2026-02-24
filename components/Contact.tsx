"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 25,
  mass: 0.8,
};

const inputClasses =
  "w-full bg-white/60 border border-warm-sand/60 rounded-soft px-5 py-4 font-sans text-sm text-dark-warm placeholder:text-warm-gray/60 focus:outline-none focus:border-accent-warm/50 focus:bg-white focus:shadow-warm transition-all duration-300";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(
      subject || "ウェブサイトからのお問い合わせ"
    );
    const mailtoBody = encodeURIComponent(
      `お名前: ${name}\nメールアドレス: ${email}\n\n${message}`
    );

    window.location.href = `mailto:info@mma-design.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-off-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-5xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={springTransition}
          className="mb-6 md:mb-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-warm tracking-wider">
            CONTACT
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-24 h-px bg-accent-warm/50 mt-6 origin-left"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="font-sans text-sm md:text-base text-dark-warm/60 leading-relaxed mb-12 md:mb-16 max-w-xl"
        >
          ご相談・お見積り等、お気軽にお問い合わせください。
          <br />
          内容を確認の上、折り返しご連絡いたします。
        </motion.p>

        {/* フォーム */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={
            formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ ...springTransition, delay: 0.1 }}
          className="bg-warm-beige/30 rounded-softer p-8 md:p-12 shadow-warm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* お名前 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ ...springTransition, delay: 0.15 }}
            >
              <label className="block font-sans text-xs text-dark-warm/50 tracking-wider uppercase mb-2">
                お名前 <span className="text-accent-warm">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="山田 太郎"
                className={inputClasses}
              />
            </motion.div>

            {/* メールアドレス */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ ...springTransition, delay: 0.2 }}
            >
              <label className="block font-sans text-xs text-dark-warm/50 tracking-wider uppercase mb-2">
                メールアドレス <span className="text-accent-warm">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className={inputClasses}
              />
            </motion.div>
          </div>

          {/* 件名 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ ...springTransition, delay: 0.25 }}
            className="mb-5"
          >
            <label className="block font-sans text-xs text-dark-warm/50 tracking-wider uppercase mb-2">
              件名
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="新築住宅のご相談"
              className={inputClasses}
            />
          </motion.div>

          {/* お問い合わせ内容 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ ...springTransition, delay: 0.3 }}
            className="mb-8"
          >
            <label className="block font-sans text-xs text-dark-warm/50 tracking-wider uppercase mb-2">
              お問い合わせ内容 <span className="text-accent-warm">*</span>
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ご相談内容をお書きください"
              rows={6}
              className={`${inputClasses} resize-none`}
            />
          </motion.div>

          {/* 送信ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ ...springTransition, delay: 0.35 }}
            className="flex justify-end"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex items-center space-x-3 bg-dark-warm text-off-white px-8 py-4 rounded-soft font-sans text-sm tracking-wider hover:bg-dark-warm/90 hover:shadow-warm-lg transition-all duration-300"
            >
              <span>送信する</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.form>

        {/* 補足 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={formInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans text-xs text-dark-warm/40 mt-6 text-center"
        >
          送信ボタンをクリックするとメールアプリが起動します
        </motion.p>
      </div>
    </section>
  );
}
