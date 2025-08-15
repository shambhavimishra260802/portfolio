import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-blue-900/10 to-purple-900/10">
        <div className="floating-particles absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 mx-auto mb-6 animate-gradient-shift"></div>
          <p className="text-text-primary max-w-2xl mx-auto" data-testid="contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and quality assurance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8" data-testid="contact-info-title">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-email-info">
                <div className="bg-primary/10 p-4 rounded-lg mr-6">
                  <Mail className="text-primary text-xl h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Email</h4>
                  <p className="text-text-primary">shambhavi260802@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-phone-info">
                <div className="bg-accent/10 p-4 rounded-lg mr-6">
                  <Phone className="text-accent text-xl h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Phone</h4>
                  <p className="text-text-primary">+91-9301788717</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-location-info">
                <div className="bg-blue-500/10 p-4 rounded-lg mr-6">
                  <MapPin className="text-blue-500 text-xl h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Location</h4>
                  <p className="text-text-primary">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary mb-6" data-testid="contact-form-title">
              Send Message
            </h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...form.register("name")}
                    data-testid="input-name"
                    className="w-full"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-name">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register("email")}
                    data-testid="input-email"
                    className="w-full"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  {...form.register("subject")}
                  data-testid="input-subject"
                  className="w-full"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-subject">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  {...form.register("message")}
                  data-testid="input-message"
                  className="w-full resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-message">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center"
                data-testid="button-submit"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
