import { Link, useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";
import "./BlogPost.css";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/blog">
              <Button variant="outline" data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const postUrl = `https://quantumcusp.co/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "QuantumCusp",
      "logo": { "@type": "ImageObject", "url": "https://quantumcusp.co/LogoDark.svg" },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl },
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`${post.title} | QuantumCusp Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={postUrl} />
        <meta name="author" content={post.author} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:site_name" content="QuantumCusp" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navigation />
      <main className="pt-20">
        <article className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="blog-post-content">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  size="sm"
                  className="mb-8"
                  data-testid="button-back-to-blog"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                {post.featured && (
                  <Badge variant="outline" className="text-primary border-primary/30">
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                data-testid="text-blog-content"
              />

              <div className="mt-12 pt-8 border-t border-border">
                <Link href="/blog">
                  <Button variant="outline" data-testid="button-more-articles">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

