'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  count?: number
}

export function Skeleton({ className = "h-4 bg-gray-200 rounded", count = 1 }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`animate-pulse ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </>
  )
}

export function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-48 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 bg-gray-200 rounded w-3/4" />
        <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
        <Skeleton className="h-4 bg-gray-200 rounded" count={3} />
        <div className="flex space-x-2">
          <Skeleton className="h-8 bg-gray-200 rounded w-20" />
          <Skeleton className="h-8 bg-gray-200 rounded w-20" />
        </div>
        <Skeleton className="h-10 bg-gray-200 rounded w-full" />
      </div>
    </div>
  )
}

export function TeamCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-64 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 bg-gray-200 rounded w-3/4" />
        <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
        <Skeleton className="h-4 bg-gray-200 rounded" count={2} />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 bg-gray-200 rounded w-16" />
          <Skeleton className="h-6 bg-gray-200 rounded w-20" />
          <Skeleton className="h-6 bg-gray-200 rounded w-14" />
        </div>
        <div className="flex space-x-3">
          <Skeleton className="h-8 w-8 bg-gray-200 rounded" count={3} />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-16 bg-gray-200 rounded w-3/4" />
            <Skeleton className="h-6 bg-gray-200 rounded w-full" count={3} />
            <div className="flex space-x-4">
              <Skeleton className="h-12 bg-gray-200 rounded w-32" />
              <Skeleton className="h-12 bg-gray-200 rounded w-32" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-64 w-64 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="text-center">
          <Skeleton className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4" />
          <Skeleton className="h-8 bg-gray-200 rounded w-20 mx-auto mb-2" />
          <Skeleton className="h-4 bg-gray-200 rounded w-32 mx-auto" />
        </div>
      ))}
    </div>
  )
}

export function TimelineSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-12">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-8">
            <div className="w-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <Skeleton className="w-12 h-12 bg-gray-200 rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-gray-200 rounded w-24" />
                    <Skeleton className="h-6 bg-gray-200 rounded w-32" />
                  </div>
                </div>
                <Skeleton className="h-4 bg-gray-200 rounded" count={2} />
                <div className="space-y-2">
                  <Skeleton className="h-3 bg-gray-200 rounded w-40" />
                  <Skeleton className="h-3 bg-gray-200 rounded w-36" />
                  <Skeleton className="h-3 bg-gray-200 rounded w-44" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FAQSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Skeleton className="w-8 h-8 bg-gray-200 rounded-lg" />
                <Skeleton className="h-6 bg-gray-200 rounded w-64" />
              </div>
              <Skeleton className="w-5 h-5 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
