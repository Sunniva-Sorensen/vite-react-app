import type { Article } from "../../articles";
import "./ArticlePreview.css";

interface ArticlePreviewProps {
  article: Article;
  onFavourite: () => void;
}

export function ArticlePreview({ article, onFavourite }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>By {article.author.username}</p>
      
      <button className={`favouriteButton ${article.favorited ? "favorited" : ""}`} onClick={onFavourite}>
        {article.favorited ? "Unfavourite" : "Favourite"}
     </button>
    </div>
  );
}
