import Image from "next/image";
import { FC } from "react";

type Testimonial = {
  image: string;
  author: string;
  role: string;
  quote: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            What Our Partners Say
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
