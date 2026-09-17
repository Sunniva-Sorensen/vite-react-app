import type { Article } from "../../articles";
import "./ArticlePreview.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

interface ArticlePreviewProps {
  article: Article;
  onFavourite: () => void;
}

export function ArticlePreview({ article, onFavourite }: ArticlePreviewProps) {
  const { isLoggedIn } = useAuthContext();

  return (
    <Link to={{ pathname: `/article/${article.slug}` }} state={{ article }}
      className="article-link">
      <div className="article-preview">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>By {article.author.username}</p>

        <button
          className={`favouriteButton ${article.favorited ? "favorited" : ""}`}
          onClick={onFavourite}
          disabled={!isLoggedIn}
        >
          {article.favorited ? "Unfavourite" : "Favourite"}
        </button>
      </div>
    </Link>
  );
}
