import Link from "next/link";

export default function Banner() {
    return (

        <div className="w-full mx-auto  overflow-hidden relative shadow-2xl">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
                }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 min-h-[520px] flex items-center px-10 md:px-16">
                <div className="max-w-xl text-white">

                    {/* Badge */}
                    <p className="inline-block px-4 py-1 mb-5 text-sm rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                        ✨ New Courses Available
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Upgrade Your Skills <br /> Today 🚀
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/80 text-lg mb-8">
                        Learn from Industry Experts and master the most in-demand
                        technologies through our structured, prestigious curriculum.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <Link
                            href="/courses"
                            className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="/courses"
                            className="px-6 py-3 rounded-lg border border-white/50 text-white hover:bg-white/10 transition"
                        >
                            Browse Catalog
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
}