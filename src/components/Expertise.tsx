import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Строительство домов ИЖС",
    description: "Полный цикл строительства индивидуальных жилых домов: от закладки фундамента до сдачи объекта под ключ. Работаем по договору с фиксированной ценой.",
    icon: "Home",
  },
  {
    title: "Фасадные и кровельные работы",
    description:
      "Утепление, облицовка, монтаж кровли любой сложности. Используем сертифицированные материалы ведущих производителей с гарантией на все виды работ.",
    icon: "Layers",
  },
  {
    title: "Отделочные работы",
    description:
      "Черновая и чистовая отделка внутренних помещений: штукатурка, стяжка, плитка, покраска, установка дверей и окон. Качество контролируем на каждом этапе.",
    icon: "PaintBucket",
  },
  {
    title: "Все виды строительных работ",
    description:
      "Монтаж инженерных коммуникаций, сантехника, электрика, вентиляция, ландшафтные работы — весь спектр для вашего загородного дома в одних руках.",
    icon: "Wrench",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, которые
            <br />
            говорят сами
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Многолетний опыт в строительстве ИЖС и широкий спектр работ позволяют нам браться за проекты любой сложности — от фундамента до отделки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`relative pl-8 border-l border-border transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`transition-all duration-1000 ${
                  visibleItems.includes(index) ? "animate-draw-stroke" : ""
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <Icon name={area.icon} size={40} className="mb-4 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}