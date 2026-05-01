import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://skillsphere-murex.vercel.app/course.json`);
    const data = await res.json();
    const course = data.find(c => c.id === parseInt(id));

    if (!course) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Course not found</h1>
                    <Link href="/courses" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    // Safe arrays — never undefined even if field missing in JSON
    const learnings = course.learnings || [];
    const curriculum = course.curriculum || [];
    const includes = course.includes || [];
    const socialLinks = course.socialLinks || {};

    return (
        <div className="min-h-screen bg-slate-50">

            {/* ── Hero ── */}
            <div className="relative h-96 w-full overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 text-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="inline-block mb-4 px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/50">
                            <span className="text-yellow-300 font-bold text-sm">{course.category}</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">{course.title}</h1>
                        <p className="text-lg text-slate-200 max-w-2xl">{course.description}</p>
                    </div>
                </div>
            </div>

            {/* ── Sticky Info Bar ── */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl text-yellow-400">★</span>
                            <div>
                                <div className="font-bold text-slate-900">{course.rating}</div>
                                <div className="text-xs text-slate-500">2,450 ratings</div>
                            </div>
                        </div>
                        <div className="border-l border-slate-200 pl-8">
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Level</div>
                            <div className="font-bold text-slate-900">{course.level}</div>
                        </div>
                        <div className="border-l border-slate-200 pl-8">
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Duration</div>
                            <div className="font-bold text-slate-900">{course.duration}</div>
                        </div>
                        <div className="ml-auto">
                            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ══ Left Column ══ */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* What You'll Learn  ← course.learnings[] */}
                        {learnings.length > 0 && (
                            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">What You&apos;ll Learn</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {learnings.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Curriculum  ← course.curriculum[].title / .lessons / .duration */}
                        {curriculum.length > 0 && (
                            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
                                <div className="space-y-3">
                                    {curriculum.map((module, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <span className="w-8 h-8 rounded-full bg-yellow-400 group-hover:bg-yellow-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0 transition-colors">
                                                    {i + 1}
                                                </span>
                                                <div>
                                                    <p className="font-semibold text-slate-900 text-sm">{module.title}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{module.lessons} lessons</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">
                                                {module.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Instructor  ← course.instructor / .instructorImage / .instructorTitle / .instructorBio / .socialLinks */}
                        <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Instructor</h2>
                            <div className="flex gap-6">
                                <div className="relative w-28 h-28 flex-shrink-0">
                                    {course.instructorImage ? (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full" />
                                            <Image
                                                src={course.instructorImage}
                                                alt={course.instructor}
                                                width={112}
                                                height={112}
                                                className="rounded-full object-cover relative z-10 border-4 border-white"
                                            />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                                            <span className="text-4xl font-bold text-white">
                                                {course.instructor.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{course.instructor}</h3>
                                    {course.instructorTitle && (
                                        <p className="text-yellow-600 font-semibold mb-4">{course.instructorTitle}</p>
                                    )}
                                    {course.instructorBio && (
                                        <p className="text-slate-700 leading-relaxed mb-5">{course.instructorBio}</p>
                                    )}
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.linkedin && (
                                            <Link href={socialLinks.linkedin} target="_blank" className="inline-block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-600 hover:border-blue-700 transition-colors font-semibold text-sm">
                                                LinkedIn
                                            </Link>
                                        )}
                                        {socialLinks.website && (
                                            <Link href={socialLinks.website} target="_blank" className="inline-block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-600 hover:border-blue-700 transition-colors font-semibold text-sm">
                                                Website
                                            </Link>
                                        )}
                                        {socialLinks.github && (
                                            <Link href={socialLinks.github} target="_blank" className="inline-block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-600 hover:border-blue-700 transition-colors font-semibold text-sm">
                                                GitHub
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ══ Right Sidebar ══ */}
                    <div className="space-y-6">

                        {/* Course Includes  ← course.includes[].icon / .text */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-5">This Course Includes</h3>
                            {includes.length > 0 ? (
                                <ul className="space-y-4">
                                    {includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-slate-700 text-sm">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-500 text-sm">Details coming soon.</p>
                            )}
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <button className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                    Enroll Now
                                </button>
                                <p className="text-center text-xs text-slate-500 mt-3">30-Day Money-Back Guarantee</p>
                            </div>
                        </div>

                        {/* Certification badge  ← course.certification.title / .description */}
                        {course.certification && (
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-sm">
                                <div className="text-3xl mb-3">🏆</div>
                                <h3 className="text-lg font-bold mb-2">{course.certification.title}</h3>
                                <p className="text-blue-200 text-sm leading-relaxed">{course.certification.description}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;