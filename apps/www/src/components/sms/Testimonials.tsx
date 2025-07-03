"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const testimonials = [
  {
    quote: "We switched from Twilio and reduced our SMS costs by 40% while improving delivery rates. The API is incredibly reliable.",
    name: "Sarah Johnson",
    title: "CTO at NotifyApp",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "The documentation is the best I've seen for any API product. We had our integration live in under an hour.",
    name: "Michael Chen",
    title: "Lead Developer at Dispatch",
    avatar: "/avatars/michael.jpg"
  },
  {
    quote: "Their global coverage is unmatched. We're sending messages to hard-to-reach regions with 99%+ delivery rates.",
    name: "David Okonjo",
    title: "Product Manager at JamboPay",
    avatar: "/avatars/david.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-yellow-400">Developers</span> Worldwide
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of companies powering their communications with our API.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="relative w-32 h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                <Image
                  src={`/logos/company-${i}.svg`}
                  alt={`Company ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;