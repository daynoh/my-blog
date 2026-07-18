'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
  noCount?: boolean
  showCount?: boolean
}

const hasSupabaseConfig = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL
  && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)

const ViewCounter = ({ slug, noCount = false, showCount = true }: ViewCounterProps) => {
  const [views, setViews] = useState(0)

  useEffect(()=>{
    if (!hasSupabaseConfig || noCount) return

    const incrementView = async () =>{
      try{
        const supabase = createClientComponentClient()
        let {data, error} = await supabase
        .rpc('increment', {
          slug
        })
      if (error) {console.error("Error incrementing inside try",error)}
      else console.log(data)



      }catch(error){
        console.error('An error occured incrementing view count',error)
      }
    }
    incrementView()

  },[slug,noCount])

  useEffect(()=>{
    if (!hasSupabaseConfig) return

    const getViews = async ()=>{
      try{
        const supabase = createClientComponentClient()
        let {data: views, error} = await supabase.from('views').select('count').match({slug:slug}).single()

        if (error){
          console.error('error getting vies count', error)
        }
        if (views){
          setViews(views.count)
        }
        else{
          setViews(0)
        }
          
      }catch (error){
        console.error(error)
      }
    }
    getViews()
  },[slug])

  if (showCount && hasSupabaseConfig){
  return (
    <div>
      {views} views
    </div>
  )
  }
  else{
    return null
  }
}

export default ViewCounter
