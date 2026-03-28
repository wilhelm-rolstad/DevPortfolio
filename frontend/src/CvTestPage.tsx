import { memo, useEffect, useRef, useState } from 'react'
import { usePageSeo } from './hooks/usePageSeo'
import { FileDown } from 'lucide-react'
import GitHubCard from './components/GitHubCard'
import AnimatedBox from './components/AnimatedBox'

const experiences = [
  {
    title: 'Videregående skole',
    description: 'Studiespesialiserende innenfor realfag og økonomi',
    date: new Date('2019-08-01'),
    assignee: 'wilhelm-rolstad',
    labels: ['good first issue', 'Size: Large', 'Priority: High', 'Medium', 'MVP'],
    project: 'grunnskole',
    milestone: 'studie',
    side: 'left' as const,
  },
  {
    title: 'Førstegangstjeneste',
    description: 'Vaktsoldat Garden',
    date: new Date('2022-08-05'),
    assignee: 'wilhelm-rolstad',
    labels: ['Enhancement', 'Size: Medium', 'Priority: Critical', 'Hard', 'Performance'],
    project: '...',
    milestone: '...',
    side: 'right' as const,
  },
  {
    title: 'Butikkmedarbeider',
    description: 'Spar Snarøya',
    date: new Date('2024-06-01'),
    assignee: 'wilhelm-rolstad',
    labels: ['Enhancement', 'Size: Small', 'Priority: Medium', 'Easy'],
    project: 'erfaringer',
    milestone: '...',
    side: 'left' as const,
  },
] as const

const CV = () => {
  usePageSeo({
    title: 'Wilhelm Rolstad | CV',
    description:
      'CV for Wilhelm Rolstad: education at NTNU and work experience including Storebrand and military service.',
    canonicalPath: '/Cv',
  })

  const y1 = 10
  const minLength = 8
  const maxLength = 400
  const svgTopOffset = 110
  const mainX = 588
  const branchOffset = 180

  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const activatedBranchIdsRef = useRef<Set<string>>(new Set())

  const [lineLength, setLineLength] = useState(minLength)
  const [branchPaths, setBranchPaths] = useState<
    Array<{
      id: string
      startY: number
      endY: number
      branchX: number
      topConnector: string | null
      trunk: string
      mergeConnector: string | null
      arrowPoints: string
      showStartNode: boolean
      isActivated: boolean
    }>
  >([])
  const mainTipY = y1 + lineLength
  const mainTipViewportY = svgTopOffset + mainTipY
  const mainTipViewportX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const svgHeight = typeof window !== 'undefined' ? window.innerHeight : 1200

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const nextLength = Math.min(minLength + scroll * 0.8, maxLength)
      setLineLength(nextLength)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateBranchPath = () => {
      const nextPaths = cardRefs.current.flatMap((card, index) => {
        if (!card) return []

        const cardRect = card.getBoundingClientRect()
        const cardTopY = cardRect.top - svgTopOffset + 32
        const cardBottomY = cardRect.bottom - svgTopOffset - 32

        if (cardBottomY <= y1 || cardTopY > y1 + lineLength) {
          return []
        }

        const side = experiences[index].side
        const branchX =
          side === 'left'
            ? mainX - branchOffset
            : mainX + branchOffset
        const visibleStartY = Math.max(cardTopY, y1)
        const branchEndY = Math.min(cardBottomY, mainTipY)
        const branchId = experiences[index].title
        const isActivated =
          activatedBranchIdsRef.current.has(branchId) || cardTopY <= mainTipY

        if (isActivated) {
          activatedBranchIdsRef.current.add(branchId)
        }
        const arrowPoints =
          side === 'left'
            ? `${mainX - 2},${cardBottomY} ${mainX - 20},${cardBottomY - 8} ${mainX - 20},${cardBottomY + 8}`
            : `${mainX + 2},${cardBottomY} ${mainX + 20},${cardBottomY - 8} ${mainX + 20},${cardBottomY + 8}`

        return [
          {
            id: branchId,
            branchX,
            startY: visibleStartY,
            endY: cardBottomY,
            topConnector:
              cardTopY >= y1 ? `M ${mainX} ${cardTopY} L ${branchX} ${cardTopY}` : null,
            trunk: `M ${branchX} ${visibleStartY} L ${branchX} ${branchEndY}`,
            mergeConnector:
              mainTipY >= cardBottomY
                ? `M ${branchX} ${cardBottomY} L ${mainX} ${cardBottomY}`
                : null,
            arrowPoints,
            showStartNode: cardTopY >= y1,
            isActivated,
          },
        ]
      })

      setBranchPaths(nextPaths)
    }

    updateBranchPath()
    window.addEventListener('resize', updateBranchPath)
    window.addEventListener('scroll', updateBranchPath)

    return () => {
      window.removeEventListener('resize', updateBranchPath)
      window.removeEventListener('scroll', updateBranchPath)
    }
  }, [lineLength])

  return (
    <div className="flex flex-col gap-10 w-full overflow-x-hidden">
      <svg
        className="fixed top-[110px] left-1/2 h-screen w-[1200px] -translate-x-1/2 pointer-events-none z-[100]"
        width="1200"
        height={svgHeight}
      >
        <line
          x1={mainX}
          y1={y1}
          x2={mainX}
          y2={mainTipY}
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle
          cx={mainX}
          cy="18"
          r="10"
          fill="black"
        />
        <circle
          cx={mainX}
          cy={mainTipY}
          r="10"
          fill="black"
        />
        <polygon
          points={`${mainX - 12},${mainTipY} ${mainX - 30},${mainTipY - 8} ${mainX - 30},${mainTipY + 8}`}
          fill="black"
        />
        {branchPaths.map((path) =>
          path.topConnector ? (
            <path
              key={`${path.id}-top`}
              d={path.topConnector}
              fill="none"
              stroke="blue"
              strokeWidth="8"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              pathLength="1"
              style={{
                animation: path.isActivated ? 'draw-branch 700ms ease-out forwards' : undefined,
              }}
            />
          ) : null
        )}
        {branchPaths.map((path) => (
          <path
            key={`${path.id}-trunk`}
            d={path.trunk}
            fill="none"
            stroke="blue"
            strokeWidth="8"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            pathLength="1"
            style={{
              animation: path.isActivated
                ? 'draw-branch 700ms ease-out 700ms forwards'
                : undefined,
            }}
          />
        ))}
        {branchPaths.map((path) =>
          path.mergeConnector ? (
            <path
              key={`${path.id}-merge-line`}
              d={path.mergeConnector}
              fill="none"
              stroke="blue"
              strokeWidth="8"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              pathLength="1"
              style={{
                animation: path.isActivated
                  ? 'draw-branch 700ms ease-out 1400ms forwards'
                  : undefined,
              }}
            />
          ) : null
        )}
        {branchPaths
          .filter((path) => path.showStartNode)
          .map((path) => (
          <circle
            key={`${path.id}-node`}
            cx={mainX}
            cy={path.startY}
            r="10"
            fill="black"
          />
        ))}
        {branchPaths
          .filter((path) => mainTipY >= path.endY)
          .map((path) => (
            <polygon
              key={`${path.id}-merge`}
              points={path.arrowPoints}
              fill="black"
            />
          ))}
      </svg>
      <div
        style={{ top: `${mainTipViewportY}px`, left: `${mainTipViewportX - 40}px` }}
        className="fixed -translate-x-full -translate-y-1/2 bg-black px-4 py-1 rounded-xl text-white z-[101]"
      >
        <p>Main</p>
      </div>

      <div className="min-h-[2000px] w-full border px-10 pt-[800px]">
        <div className="flex flex-col gap-24">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
              className={`relative w-full max-w-xl ${
                experience.side === 'right' ? 'ml-auto' : ''
              }`}
            >
              <AnimatedBox>
                <GitHubCard
                  title={experience.title}
                  description={experience.description}
                  date={experience.date}
                  assignee={experience.assignee}
                  labels={[...experience.labels]}
                  project={experience.project}
                  milestone={experience.milestone}
                />
              </AnimatedBox>
            </div>
          ))}
        </div>
      </div>

      <div className="cursor-pointer flex flex-row items-center gap-1 hover:scale-105 active:scale-95 transition duration-200 mx-auto">
        <p>Download CV</p>
        <FileDown strokeWidth={1.2} />
      </div>
    </div>
  )
}

export default memo(CV)
