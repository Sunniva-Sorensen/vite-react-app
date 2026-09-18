import { useState } from "react";
import { articles as initialArticles } from "../../articles";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { TipForm } from "../../components/TipForm/TipForm";
import "./Home.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Counter } from "../../components/Counter/Counter";

export function HomePage() {
  const [articles, setArticles] = useState(initialArticles);

  function handleFavourite(slug: string) {
    setArticles(prev =>
      prev.map(article =>
        article.slug === slug
          ? { ...article, favorited: !article.favorited }
          : article
      )
    );
  }

  return (
    <>
      <Header />
      <div className="home-controls">
        <Button />

        <LoginForm />
      </div>

      <main>
        {articles.map((article) => (
          <ArticlePreview
            key={article.slug}
            article={article}
            onFavourite={() => handleFavourite(article.slug)}
          />
        ))}

        <TipForm />
        <Counter />

      </main>
    </>
  );
}
