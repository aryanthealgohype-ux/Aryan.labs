import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Rahul Sharma",
        role: "CEO, TechFlow",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        review: "Aryan is an exceptional developer. His attention to detail in UI/UX is truly world-class. Highly recommended!",
        rating: 5,
    },
    {
        name: "Vikram Singh",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        review: "The way he handles complex full-stack logic is amazing. Professional, fast, and very creative.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        role: "Founder, CreativeEdge",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        review: "Working with Aryan was a breeze. He translated our ideas into a beautiful, high-performing website.",
        rating: 5,
    },
    {
        name: "Sameer Khan",
        role: "Web Architect",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
        review: "Top-tier coding skills. Clean, scalable, and efficient code. One of the best developers I've worked with.",
        rating: 5,
    },
    {
        name: "Arjun Reddy",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        review: "Aryan's work helped our business scale. The user engagement increased by 40% after the redesign!",
        rating: 5,
    },
    {
        name: "Vikash Gupta",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=400&h=400&fit=crop",
        review: "Incredible speed and quality. He knows how to make items look premium and function perfectly.",
        rating: 5,
    },
];

const ReviewSlider = () => {
    return (
        <div className="py-12 bg-background overflow-hidden border-y border-border">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">Client Testimonials</h2>
                <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">5.0 Overall Rating</span>
                </div>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-6 px-4"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Duplicate the array for seamless infinite scroll */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="w-[300px] sm:w-[350px] bg-card rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-border flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/10 shadow-sm"
                                />
                                <div>
                                    <h4 className="text-base font-bold text-foreground">{review.name}</h4>
                                    <p className="text-xs text-primary font-medium">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed italic">
                                "{review.review}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ReviewSlider;
