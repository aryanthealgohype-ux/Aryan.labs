import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowUpRight, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', visits: 400 },
    { name: 'Tue', visits: 300 },
    { name: 'Wed', visits: 900 },
    { name: 'Thu', visits: 600 },
    { name: 'Fri', visits: 1200 },
    { name: 'Sat', visits: 1500 },
    { name: 'Sun', visits: 2100 },
];

const TrafficSection = () => {
    return (
        <section className="py-24 bg-background" id="traffic">
            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Left Text Content */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider"
                        >
                            <Activity size={14} className="animate-pulse" />
                            Live Site Analytics
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-black text-foreground leading-tight"
                        >
                            Traffic <span className="text-blue-600">Engagement</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground leading-relaxed"
                        >
                            Real-time visualization of visitor growth and interaction across the portfolio. Tracking the journey of every global user.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4 pt-4"
                        >
                            <div className="p-4 rounded-2xl bg-card border border-border flex-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Growth</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-black text-foreground">+124%</span>
                                    <TrendingUp size={16} className="text-green-500" />
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-card border border-border flex-1">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Current Month</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-black text-foreground">12.5k</span>
                                    <Users size={16} className="text-blue-500" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Chart Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-[#0a0a0a] rounded-[2.5rem] p-8 shadow-2xl shadow-blue-500/10 border border-white/5 relative overflow-hidden group"
                    >
                        {/* Chart Header */}
                        <div className="flex justify-between items-center mb-10 relative z-10">
                            <div>
                                <h3 className="text-white text-xl font-bold flex items-center gap-2">
                                    Visitor Growth <ArrowUpRight className="text-blue-500" size={20} />
                                </h3>
                                <p className="text-muted-foreground text-sm">Real-time trending data (Weekly)</p>
                            </div>
                            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                <span className="px-3 py-1 rounded-lg bg-white/5 text-white">Live</span>
                                <span className="px-3 py-1 rounded-lg ">7 Days</span>
                            </div>
                        </div>

                        {/* The Trending Graph */}
                        <div className="h-[300px] w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#666', fontSize: 12 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#666', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="visits"
                                        stroke="#3b82f6"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#colorVisits)"
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TrafficSection;
