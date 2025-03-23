"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("📨 Submitted:", data);
    // TODO: Send to backend or email service
  };

  // 👀 For scroll animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-lg text-gray-600 mt-3">
          Have a question or want to collaborate? Let’s connect! 👋
        </p>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}

        <section className="flex flex-col md:flex-row gap-12">
          {/* Contact Info - 1/3 with white card + icons */}
          {/* Contact Info - 1/3 with improved layout and icons */}
          <div className="md:w-1/3 space-y-8 bg-white p-6 rounded-xl border shadow-md">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Feel free to reach out — I’ll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <a
                  href="https://wa.me/60124478279?text=Hello%20there!%20I'm%20interested%20in%20chatting%20with%20you."
                  className="text-gray-600 hover:underline text-sm"
                >
                  +60 12 447 8279
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <a
                  href="mailto:aroarko.sd@gmail.com"
                  className="text-gray-600 hover:underline text-sm"
                >
                  aroarko.sd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Address</p>
                <p className="text-gray-600 text-sm">Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>

          {/* Contact Form - 2/3 */}
          <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your email"
                            {...field}
                            className="focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Optional"
                            {...field}
                            className="focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Type your message..."
                          {...field}
                          className="focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  Submit Now
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactForm;
