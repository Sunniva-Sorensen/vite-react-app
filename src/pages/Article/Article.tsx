import { useParams } from "react-router-dom";
import { articles } from "../../articles";
import "./Article.css";

export function Article() {
    const { slug } = useParams();

    const article = articles.find((item) => item.slug === slug);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <main className="article-page">
            <h1>{article.title}</h1>

            <p>
                <strong>Slug:</strong> {article.slug}
            </p>

            <p>
                <strong>Description:</strong> {article.description}
            </p>

            <p>
                <strong>Body:</strong> {article.body}
            </p>

            <p>
                <strong>Created:</strong> {article.createdAt}
            </p>

            <p>
                <strong>Updated:</strong> {article.updatedAt}
            </p>

            <p>
                <strong>Favorited:</strong> {article.favorited ? "Yes" : "No"}
            </p>

            <p>
                <strong>Favorites:</strong> {article.favoritesCount}
            </p>

            <h2>Author</h2>
            <p>
                <strong>Username:</strong> {article.author.username}
            </p>
            <p>
                <strong>Bio:</strong> {article.author.bio}
            </p>
            <p>
                <strong>Following:</strong>{" "}
                {article.author.following ? "Yes" : "No"}
            </p>

            <h2>Tags</h2>
            <ul>
                {article.tagList.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </main>
    );
}