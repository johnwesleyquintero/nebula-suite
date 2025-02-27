"use client"

import { useEffect, useRef } from "react"
import mermaid from "mermaid"
import { useTheme } from "next-themes"

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const { theme } = useTheme()
  const diagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (diagramRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: theme === "dark" ? "dark" : "default",
        securityLevel: "loose",
        fontFamily: "inherit",
      })

      // Clear the diagram container
      diagramRef.current.innerHTML = ""

      // Render the diagram
      mermaid
        .render(`mermaid-${Math.random()}`, chart)
        .then(({ svg }) => {
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg
          }
        })
        .catch((error) => {
          console.error("Error rendering Mermaid diagram:", error)
          if (diagramRef.current) {
            diagramRef.current.innerHTML = "Error rendering diagram"
          }
        })
    }
  }, [chart, theme])

  return (
    <div
      ref={diagramRef}
      className={`overflow-x-auto ${className ?? ""}`}
      aria-label="Architecture diagram"
      role="img"
    />
  )
}

