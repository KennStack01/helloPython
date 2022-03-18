import React, { useState, useEffect } from 'react'
import keywords from '../keywords'
import rssList from '../rssList'
import Article from './Article'
import Parser from 'rss-parser'

const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSingleFeed = async (url) => {
    let parser = new Parser()
    const feed = await parser.parseURL(`https://cors.eu.org/${url}`)

    return feed
  }

  const fetchArticles = async (list) => {
    let data = []
    for (let i = 0; i < list.length; i++) {
      const feed = await fetchSingleFeed(list[i])
      const filterdFeed = feed.items.filter((item) => {
        return keywords.some((keyword) => {
          return (
            item.title.toLowerCase().includes(keyword) ||
            item.content.toLowerCase().includes(keywords[i])
          )
        })
      })
      data.push(filterdFeed)
      //   data.push(feed.items)
    }
    return data
  }

  useEffect(() => {
    fetchArticles(rssList)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .then(() => {
        const merged = [].concat.apply([], data) // to merged all arrays within data
        setArticles(merged)
        console.log(articles)
      })
  }, [data])

  return (
    <div>
      <div>
        {loading ? (
          <h3 className="text-center">Loading...</h3>
        ) : (
          <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {articles.map((article, index) => (
              <div key={index}>
                <Article
                  imageURL={article.thumbnail}
                  title={article.title}
                  link={article.link}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticlesList
