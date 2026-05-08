import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Компания НИКАН работает по всей России. Наши бригады выезжают на объекты в любой регион — от Калининграда до Дальнего Востока. Уточните ваш регион при первом обращении.",
  },
  {
    question: "Сколько времени занимает строительство дома?",
    answer:
      "Сроки зависят от площади и сложности проекта. В среднем строительство дома под ключ занимает от 6 до 12 месяцев. Мы фиксируем сроки в договоре и несём за них ответственность.",
  },
  {
    question: "Вы работаете только под ключ или можно заказать отдельные работы?",
    answer:
      "Мы гибко подходим к каждому заказу. Можно заказать как полный цикл — фундамент, коробка, кровля, фасад, отделка, — так и отдельные виды работ: например, только кровлю или фасадные работы на уже готовом объекте.",
  },
  {
    question: "Вы являетесь аккредитованным застройщиком?",
    answer:
      "Да, компания НИКАН имеет официальную аккредитацию застройщика, все необходимые лицензии и допуски СРО. Мы работаем строго в соответствии с нормами и стандартами строительства.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer:
      "На все виды выполненных работ мы предоставляем официальную гарантию, закреплённую в договоре. Срок гарантии зависит от типа работ. После сдачи объекта мы остаёмся на связи и устраняем любые замечания.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Свяжитесь с нами любым удобным способом — по телефону, через форму или мессенджер. Мы проведём бесплатную консультацию, обсудим ваш проект, участок и бюджет, после чего подготовим смету.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}