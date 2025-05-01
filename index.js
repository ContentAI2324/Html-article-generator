import Head from 'next/head'

const dummyArticles = [
  {
    title: 'AI Takes Over Social Media Trends',
    content: 'AI-generated content is now driving engagement across platforms...'
  },
  {
    title: 'Top 5 Tech Innovations in 2025',
    content: 'From quantum computing to neural interfaces, tech is booming...'
  },
  {
    title: 'How AI Predicts Virality',
    content: 'Understanding user behavior is key to what goes viral...'
  }
];

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Trending AI Articles</title>
      </Head>
      <h1>Trending AI Articles</h1>
      {dummyArticles.map((article, i) => (
        <div key={i} style={{ marginBottom: 30, background: '#f9f9f9', padding: 15, borderRadius: 8 }}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  )
}
