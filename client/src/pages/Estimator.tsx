import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Rocket,
  TrendingUp,
  Building2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const projectTypes = [
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP / New Product",
    description: "Build a minimum viable product from scratch",
    timeline: "8-12 weeks",
    priceRange: "$25K - $75K",
  },
  {
    id: "scale",
    icon: TrendingUp,
    title: "Growth & Scale",
    description: "Optimize and scale existing systems",
    timeline: "4-8 weeks",
    priceRange: "$15K - $50K",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Solution",
    description: "Complex enterprise-grade systems",
    timeline: "12-24 weeks",
    priceRange: "$75K - $250K+",
  },
];

const services = [
  "Digital Product Development",
  "AI/ML Integration",
  "Business Automation",
  "Cloud Architecture",
  "SaaS Platform",
  "API Development",
  "Data Analytics",
  "Security & Compliance",
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please provide some project details"),
});

type FormData = z.infer<typeof formSchema>;

export default function Estimator() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const payload = {
        name: data.name,
        email: data.email,
        message: `Project Type: ${projectType}\nServices: ${selectedServices.join(", ")}\nCompany: ${data.company || "N/A"}\n\n${data.message}`,
      };
      return await apiRequest("POST", "/api/contact", payload);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Request Submitted",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const canProceed = () => {
    if (step === 1) return projectType !== null;
    if (step === 2) return selectedServices.length > 0;
    return true;
  };

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const selectedProject = projectTypes.find((p) => p.id === projectType);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Project Estimator
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Get a <span className="text-primary">Custom Quote</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Tell us about your project and we'll provide a tailored estimate
                and timeline.
              </p>
            </motion.div>

            <div className="flex justify-center gap-2 mb-12">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-12 h-1.5 rounded-full transition-colors ${
                    s <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Request Submitted!</h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for your interest. Our team will review your project
                    details and get back to you within 24 hours.
                  </p>
                  {selectedProject && (
                    <Card className="max-w-md mx-auto mb-8">
                      <CardContent className="p-6 text-left">
                        <h3 className="font-semibold mb-2">Estimated Range</h3>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {selectedProject.priceRange}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Timeline: {selectedProject.timeline}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/")}
                    data-testid="button-back-home"
                  >
                    Back to Home
                  </Button>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">
                    What type of project are you planning?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {projectTypes.map((type) => (
                      <Card
                        key={type.id}
                        className={`cursor-pointer transition-all hover-elevate ${
                          projectType === type.id
                            ? "border-primary ring-2 ring-primary/20"
                            : ""
                        }`}
                        onClick={() => setProjectType(type.id)}
                        data-testid={`card-project-type-${type.id}`}
                      >
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <type.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold mb-2">{type.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {type.description}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            <p>{type.timeline}</p>
                            <p className="font-medium text-foreground">
                              {type.priceRange}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">
                    What services do you need?
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {services.map((service) => (
                      <Badge
                        key={service}
                        variant={
                          selectedServices.includes(service)
                            ? "default"
                            : "outline"
                        }
                        className={`cursor-pointer px-4 py-2 text-sm ${
                          selectedServices.includes(service)
                            ? "bg-primary"
                            : ""
                        }`}
                        onClick={() => toggleService(service)}
                        data-testid={`badge-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center mb-8">
                    Select all that apply to your project
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-6 text-center">
                    Tell us more about your project
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Your name"
                                      {...field}
                                      data-testid="input-estimator-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder="your@email.com"
                                      {...field}
                                      data-testid="input-estimator-email"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your company name"
                                    {...field}
                                    data-testid="input-estimator-company"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                                    className="min-h-[120px] resize-none"
                                    {...field}
                                    data-testid="input-estimator-message"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={mutation.isPending}
                            data-testid="button-submit-estimator"
                          >
                            {mutation.isPending ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Get Your Estimate
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {!isSubmitted && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  data-testid="button-previous-step"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                {step < 3 && (
                  <Button
                    onClick={() => setStep((s) => Math.min(3, s + 1))}
                    disabled={!canProceed()}
                    data-testid="button-next-step"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
