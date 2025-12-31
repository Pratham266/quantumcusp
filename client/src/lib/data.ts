import type { BlogPost, CaseStudy, TeamMember } from "@shared/schema";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-business-automation-2024",
    title: "How AI is Transforming Business Automation in 2024",
    excerpt: "Discover practical ways businesses are leveraging AI to automate workflows, reduce costs, and improve decision-making without the hype.",
    content: `
      <p>Artificial intelligence has moved beyond the hype cycle into practical, value-driven applications that are transforming how businesses operate. In 2024, we're seeing a shift from experimental AI projects to production-ready solutions that deliver measurable ROI.</p>
      
      <h2>The Shift to Practical AI</h2>
      <p>Rather than chasing the latest AI trends, successful businesses are focusing on specific, high-impact use cases. This means identifying processes that are repetitive, time-consuming, and prone to human error—then applying AI to automate and optimize them.</p>
      
      <h2>Key Areas of Impact</h2>
      <p><strong>Document Processing:</strong> AI-powered systems can now extract, classify, and process documents with near-human accuracy, reducing manual data entry by up to 80%.</p>
      <p><strong>Customer Service:</strong> Intelligent chatbots and virtual assistants handle routine inquiries, freeing human agents to focus on complex issues that require empathy and judgment.</p>
      <p><strong>Predictive Analytics:</strong> Machine learning models analyze historical data to forecast demand, identify risks, and optimize resource allocation.</p>
      
      <h2>Getting Started</h2>
      <p>The key to successful AI adoption is starting small, measuring results, and scaling what works. Begin with a pilot project in a non-critical area, validate the approach, then expand systematically.</p>
    `,
    author: "Priya Sharma",
    category: "Technology",
    readTime: "5 min read",
    publishedAt: "2024-12-10",
    featured: true,
  },
  {
    id: "2",
    slug: "scaling-saas-architecture",
    title: "Building Scalable SaaS Architecture: Lessons Learned",
    excerpt: "Key architectural decisions that enable SaaS platforms to scale from hundreds to millions of users while maintaining performance.",
    content: `
      <p>Scaling a SaaS platform is about making smart architectural decisions early that pay dividends as you grow. Here are the lessons we've learned from building and scaling multiple SaaS products.</p>
      
      <h2>Start with the Right Foundation</h2>
      <p>Multi-tenancy, database design, and API architecture decisions made early in development have lasting implications. It's worth investing time upfront to get these right.</p>
      
      <h2>Database Considerations</h2>
      <p>Choose your database strategy based on your data access patterns. For most SaaS applications, a combination of relational databases for transactional data and NoSQL for analytics works well.</p>
      
      <h2>API-First Design</h2>
      <p>Design your APIs before building your UI. This forces you to think about data models and enables parallel development of frontend and backend components.</p>
    `,
    author: "Arjun Patel",
    category: "Engineering",
    readTime: "7 min read",
    publishedAt: "2024-12-05",
    featured: false,
  },
  {
    id: "3",
    slug: "digital-transformation-strategy",
    title: "Digital Transformation: Strategy Before Technology",
    excerpt: "Why successful digital transformation starts with business strategy, not technology selection, and how to align both for maximum impact.",
    content: `
      <p>Digital transformation initiatives fail more often than they succeed. The primary reason? Organizations focus on technology before strategy.</p>
      
      <h2>Define the Business Outcome</h2>
      <p>Before selecting any technology, clearly articulate what business outcomes you're trying to achieve. Are you trying to reduce costs? Improve customer experience? Enter new markets?</p>
      
      <h2>Map the Current State</h2>
      <p>Understanding your existing processes, systems, and capabilities is essential. This baseline helps identify gaps and prioritize investments.</p>
      
      <h2>Technology as an Enabler</h2>
      <p>Once you have clarity on strategy and current state, technology decisions become much clearer. The right technology is the one that best enables your specific business objectives.</p>
    `,
    author: "Neha Gupta",
    category: "Strategy",
    readTime: "6 min read",
    publishedAt: "2024-11-28",
    featured: true,
  },
  {
    id: "4",
    slug: "startup-mvp-development",
    title: "MVP Development: Speed vs. Quality Trade-offs",
    excerpt: "How to build a minimum viable product that's both fast to market and built on a foundation that can scale.",
    content: `
      <p>The tension between speed and quality in MVP development is real, but it's not a binary choice. Smart trade-offs allow you to move fast while building on solid foundations.</p>
      
      <h2>What to Optimize For</h2>
      <p>Focus your quality investments on core functionality that directly impacts user experience and business value. Cut corners strategically on features that can be enhanced later.</p>
      
      <h2>Technical Debt Management</h2>
      <p>Some technical debt is acceptable in an MVP, but make it visible and trackable. Know what shortcuts you're taking and have a plan to address them.</p>
    `,
    author: "Rohan Mehta",
    category: "Startups",
    readTime: "4 min read",
    publishedAt: "2024-11-20",
    featured: false,
  },
];

export const testimonials: CaseStudy[] = [
  {
    id: "1",
    slug: "quimicoexim-digital-transformation",
    title: "Quimico Exim Digital Operations Upgrade",
    client: "Quimico Exim",
    industry: "Chemicals & Manufacturing",
    rating: 5,
    challenge:
      "After 22 years of growth, Quimico Exim was running most of its orders and inventory on manual spreadsheets and phone calls. With multiple plants and exports going to UAE, Europe, America and Asia, it was becoming harder to track stock levels, commitments and dispatches in one place.",
    solution:
      "We designed and built a new company website along with a custom admin web application for inventory and order management. The system gives their team a real-time view of stock across locations, simplifies order updates, and keeps sales, operations and management on the same page.",
    results: [
      "Single dashboard for tracking inventory and orders across plants",
      "Faster order updates and fewer follow‑up calls between teams",
      "Clearer view of export commitments and dispatch timelines",
      "More professional online presence for global buyers and partners",
    ],
    metrics: [
      { label: "Manual Follow‑ups", value: "↓ 40%" },
      { label: "Update Speed", value: "Minutes" },
      { label: "Plants Managed", value: "2" },
      { label: "Global Reach", value: "4+ regions" },
    ],
    testimonial: {
      quote:
        "We’ve been in the sodium silicate business for more than two decades, and most of our processes grew along with us. QuantumCusp helped us put structure around that growth. The new website and admin system make it much easier for our team to see where inventory stands, what has been committed and what is ready to ship. It feels like our operations have finally caught up with the scale of our business.",
      author: "Deep J",
      role: "CEO, Quimico Exim",
    },
  },
  {
    id: "2",
    slug: "jetcoo-digital-operations-and-leads",
    title: "Jetcoo Digital Operations & Lead Management",
    client: "Jetcoo",
    industry: "Steel Pipes & Industrial Fittings",
    rating: 5,
    challenge:
      "Jetcoo has been manufacturing stainless steel pipes and fittings in Mumbai for years, supplying a wide range of industrial clients. Most of the sales work, follow‑ups and inventory tracking were handled through phone calls, WhatsApp and spreadsheets, which made it hard to see live stock, respond quickly to enquiries or keep track of all open leads in one place.",
    solution:
      "We built a new website that clearly presents Jetcoo’s product range and certifications, along with a backend admin system for inventory and order updates. On top of this, we implemented a simple lead management and automation layer so enquiries from the website are captured, organised and followed up faster, without getting lost in daily messages.",
    results: [
      "Centralised view of inventory and open orders for the sales and operations team",
      "Faster response time to new enquiries from the website and digital channels",
      "Better visibility into which leads are active, won or pending follow‑up",
      "More professional digital presence that matches their industry reputation",
    ],
    metrics: [
      { label: "Lead Response Time", value: "Hours" },
      { label: "Digital Capture", value: "100% web" },
      { label: "Coordination Effort", value: "Reduced" },
      { label: "Product Lines", value: "Multi‑range" },
    ],
    testimonial: {
      quote:
        "We have always focused on quality and delivery on the shop floor, but our processes for handling enquiries and orders were still very manual. The website and systems built by QuantumCusp gave us a much clearer picture of our stock and incoming leads. Our team can now answer customers faster and with more confidence, which is important in today’s digital‑first market.",
      author: "Aarti A",
      role: "CEO, Jetcoo",
    },
  },
  {
    id: "3",
    slug: "kbvidhyalaya-school-website",
    title: "KB Vidhyalaya School Website & Activity Portal",
    client: "KB Vidhyalaya",
    industry: "Education",
    rating: 5,
    challenge:
      "KB Vidhyalaya was doing a lot of good work—events, activities, achievements and new initiatives—but most of it was only visible to parents who visited the school or heard about it from teachers. There was no single digital place to showcase updates, infrastructure and student achievements in a structured way.",
    solution:
      "We designed and developed a modern school website that highlights KB Vidhyalaya’s culture and day‑to‑day life. The site includes separate sections for activities by category, newsletters, infrastructure information and achievements, making it easy for parents and students to stay informed and for the school to present itself professionally online.",
    results: [
      "Single online destination for school news, events and achievements",
      "Easier communication of updates to parents and prospective families",
      "Stronger digital presence that reflects the school’s values and facilities",
      "Simple workflow for staff to add new activities and newsletters",
    ],
    metrics: [
      { label: "Updates Online", value: "Regular" },
      { label: "Info Sections", value: "4" },
      { label: "Parent Visibility", value: "Higher" },
      { label: "Staff Workflow", value: "Simplified" },
    ],
    testimonial: {
      quote:
        "Our school has always focused on giving students a rich environment beyond the classroom, but we didn’t have a proper way to show this to parents and the wider community. The website built by QuantumCusp brings our activities, achievements and infrastructure together in one place. It has made it much easier for us to share what is happening in school and to present KB Vidhyalaya professionally in the digital world.",
      author: "Principal",
      role: "KB Vidhyalaya",
    },
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ayushi Rao",
    role: "CEO & Founder",
    bio: "Alexandra founded QuantumCusp with a vision to make enterprise-grade technology accessible to businesses of all sizes. With 15+ years of experience in technology leadership, she has led digital transformation initiatives for Fortune 500 companies and high-growth startups alike.",
    expertise: ["Digital Strategy", "Business Development", "Enterprise Architecture"],
    linkedin: "#",
  },
  {
    id: "2",
    name: "Vikram Singh",
    role: "CTO",
    bio: "James leads our technology vision and engineering teams. Previously a principal engineer at leading tech companies, he brings deep expertise in cloud architecture, AI/ML systems, and building scalable platforms that serve millions of users.",
    expertise: ["Cloud Architecture", "AI/ML", "System Design", "Platform Engineering"],
    linkedin: "#",
  },
  {
    id: "3",
    name: "Kavya Reddy",
    role: "VP of Engineering",
    bio: "Maria oversees our engineering teams and delivery processes. She has built and scaled engineering organizations from startup to enterprise, with a focus on creating high-performing teams that deliver exceptional software.",
    expertise: ["Engineering Leadership", "Agile/DevOps", "Team Building"],
    linkedin: "#",
  },
  {
    id: "4",
    name: "Aditya Kumar",
    role: "Head of AI & Data",
    bio: "David leads our AI and data science initiatives. With a PhD in Machine Learning and experience at top AI research labs, he ensures our AI solutions deliver real business value, not just technological novelty.",
    expertise: ["Machine Learning", "Data Science", "AI Strategy", "Analytics"],
    linkedin: "#",
  },
  {
    id: "5",
    name: "Sneha Desai",
    role: "Director of Product",
    bio: "Sarah drives product strategy and ensures we're building solutions that truly solve customer problems. Her background in design thinking and product management helps translate complex requirements into elegant, user-friendly products.",
    expertise: ["Product Strategy", "UX Design", "Customer Research"],
    linkedin: "#",
  },
  {
    id: "6",
    name: "Rahul Verma",
    role: "Director of Client Success",
    bio: "Thomas ensures our clients achieve their business objectives through our technology solutions. He brings a consultative approach to client relationships, focusing on long-term partnerships and measurable outcomes.",
    expertise: ["Client Relations", "Project Delivery", "Business Consulting"],
    linkedin: "#",
  },
];
