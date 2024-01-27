'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

const supabase = createClientComponentClient()

const ViewCounter = (slug:{slug:string}, noCount=false, showCount = true) => {
  const [views, setViews] = useState(0)

  useEffect(()=>{
    const incrementView = async () =>{
      try{
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
    if (!noCount){
      incrementView()
    }

  },[slug,noCount])

  useEffect(()=>{
    const getViews = async ()=>{
      try{
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
  if (showCount){
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
