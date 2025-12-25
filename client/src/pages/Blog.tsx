import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
import "./Blog.css";

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="blog-header text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Insights
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ideas & <span className="text-primary">Perspectives</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Thought leadership on technology, business growth, and digital
                transformation from our team of experts.
              </p>
            </div>

            {featuredPosts.length > 0 && (
              <div className="blog-featured mb-16">
                <h2 className="text-xl font-semibold mb-6">Featured</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <Card
                        className="h-full hover-elevate transition-all duration-300 cursor-pointer"
                        data-testid={`card-featured-post-${post.id}`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <Badge variant="outline" className="text-primary border-primary/30">
                              Featured
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <User className="w-3.5 h-3.5" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                              </span>
                            </div>
                            <span className="text-primary flex items-center gap-1">
                              Read <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="blog-grid-container">
              <h2 className="text-xl font-semibold mb-6">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <div key={post.id} className="blog-card-item">
                    <Link href={`/blog/${post.slug}`}>
                      <Card
                        className="h-full hover-elevate transition-all duration-300 cursor-pointer"
                        data-testid={`card-post-${post.id}`}
                      >
                        <CardHeader className="pb-4">
                          <Badge variant="secondary" className="w-fit mb-3">
                            {post.category}
                          </Badge>
                          <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
