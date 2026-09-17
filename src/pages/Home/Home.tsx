import { useState } from "react";
import { articles as initialArticles } from "../../articles";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { TipForm } from "../../components/TipForm/TipForm";
import "./Home.css";
import { useAuthContext } from "../../context/AuthContext";

export function HomePage() {
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useAuthContext();
  const [name, setName] = useState("");
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

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUser({ id: 1, name, email: "" });
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setUser(undefined);
    setIsLoggedIn(false);
  }

  return (
    <>
      <Header />
      <div className="home-controls">
        <Button />

        {isLoggedIn ? (
          <div className="login-status">
            <p>Logged in as {user?.name}</p>
            <button type="button" onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <button type="submit">Log in</button>
          </form>
        )}
      </div>

      <main>
        {articles.map(article => (
          <ArticlePreview
            key={article.slug}
            article={article}
            onFavourite={() => handleFavourite(article.slug)}
          />
        ))}

        <TipForm />
      </main>
    </>
  );
}
