// components/ErrorBoundary.jsx
"use client"

import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("VideoPlayer Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export const VideoErrorFallback = () => (
  <div className="h-full w-full bg-red-100/20 flex items-center justify-center text-red-400">
    Video player encountered an error
  </div>
)