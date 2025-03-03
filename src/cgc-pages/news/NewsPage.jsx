import { getNews } from '@/api/actions'
import NewsCard from '@/pages/apps/crypto/News/components/NewsCard'
import NewsCard2 from '@/pages/apps/crypto/News/components/NewsCard2'
import React, { useEffect, useState } from 'react'

const NewsPage = () => {
    const [newsList,setNewsList] = useState('')

    useEffect(() => {
        getNews().then((res) => {
            if(res?.data){
                setNewsList(res.data)
            }
        })
    },[])

  return (
    <>
    {newsList.length > 0 && newsList.map((obj) => (
        // <>
        <NewsCard2 title={obj.short_title} description={obj.short_content}/>
        // </>
    )) 
    }
    </>
  )
}

export default NewsPage