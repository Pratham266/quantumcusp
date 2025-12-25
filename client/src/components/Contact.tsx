import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import "./Contact.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IoIosSend } from "react-icons/io";


const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { elementRef: leftRef, isVisible: leftVisible } = useIntersectionObserver();
  const { elementRef: rightRef, isVisible: rightVisible } = useIntersectionObserver();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "https://quantumcusp-service.vercel.app/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
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

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-r from-[#FF7A30] to-[#FFB347]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={leftRef}
            className={`contact-content-left ${leftVisible ? "visible" : ""}`}
          >
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              Whether you have a specific project in mind or want to explore how
              technology can help your business grow, we'd love to hear from
              you. Let's start a conversation.
            </p>

            <div className="bg-white rounded-[20px] p-3 pr-8 inline-flex items-center gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100 max-w-md w-full sm:w-auto">
              <div className="w-14 h-14 rounded-[18px] bg-gradient-to-b from-[#FF853C] to-[#FFB95D] flex items-center justify-center shrink-0 shadow-orange-200 shadow-inner ring-1 ring-white/20">
                <Mail className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[#0F172A] font-semibold text-lg leading-none">Email us at</p>
                <a
                  href="mailto:hello@quantumcusp.co"
                  className="text-[#FF7A30] text-lg font-medium leading-tight hover:text-[#E66010] transition-colors"
                  data-testid="link-email"
                >
                  hello@quantumcusp.co
                </a>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`contact-content-right ${rightVisible ? "visible" : ""}`}
          >
            <Card className="rounded-3xl shadow-xl overflow-hidden border-none text-left">
              <CardContent className="p-8 lg:p-12 bg-white">
                {isSubmitted ? (
                  <div className="contact-success text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                    <p className="text-gray-500 mb-6 font-medium">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-send-another"
                      className="rounded-xl border-2 font-semibold"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium text-gray-900 ml-1">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                data-testid="input-name"
                                className="h-14 w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none  focus:bg-white transition-all text-[#070033] placeholder-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="ml-1" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium text-gray-900 ml-1">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                data-testid="input-email"
                                className="h-14 w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:bg-white transition-all text-[#070033] placeholder-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="ml-1" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium text-gray-900 ml-1">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project..."
                                className="min-h-[160px] w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none  focus:bg-white transition-all text-[#070033] placeholder-gray-400 resize-none"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage className="ml-1" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#FF7A30] to-[#FFB347] hover:from-[#FF7A30] hover:to-[#FF9933] shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                        disabled={mutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin text-white" />
                            <span className="text-white">Sending...</span>
                          </>
                        ) : (
                          <span className="flex items-center text-white">
                            Send Message
                            <IoIosSend  className="ml-2 relative" size={28} style={{
                              height: "28px",
                              width: "28px",
                            }}/>
                          </span>
                        )}
                      </Button>
                      
                      <p className="text-center text-sm text-gray-400 mt-6">
                        We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
