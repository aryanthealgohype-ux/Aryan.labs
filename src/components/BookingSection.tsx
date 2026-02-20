import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const BookingSection = () => {
    useEffect(() => {
        // Inject the external script for the booking widget
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="book" className="py-24 bg-card border-y border-border">
            <div className="section-container">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block"
                        >
                            Ready to collaborate?
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                            Book a <span className="text-gradient-blue">Meeting</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Schedule a 1-on-1 discovery call directly on my calendar. Select a time that works best for you!
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-border min-h-[600px] relative"
                >
                    {/* Calendar Loader Placeholder (often helps with UX while iframe loads) */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-50">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>

                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/9bxMMCc2XhcoDS5jkhQM"
                        style={{ width: '100%', minHeight: '700px', border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        id="9bxMMCc2XhcoDS5jkhQM_1771584039776"
                        title="Booking Calendar"
                    ></iframe>
                </motion.div>

                <div className="text-center mt-10">
                    <p className="text-sm text-muted-foreground">
                        Can't find a slot? Use the <a href="#contact" className="text-primary font-bold hover:underline">contact form</a> below.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
