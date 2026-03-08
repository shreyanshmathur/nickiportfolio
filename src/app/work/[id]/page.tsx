import { Metadata } from 'next';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.client} | Nikitha Rao`,
        description: project.description,
    };
}

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project Not Found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center text-brand-gold hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Selected Works
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Media Block */}
                    <div className="lg:col-span-8">
                        <div className="bg-gray-950 rounded-xl overflow-hidden border border-white/10 w-full h-[60vh] lg:h-[80vh] shadow-2xl relative flex items-center justify-center">
                            {project.type === 'youtube' ? (
                                <YouTubeEmbed videoId={project.src} autoPlay={true} loop={true} interactive={true} />
                            ) : project.type === 'instagram' ? (
                                <iframe
                                    src={`https://www.instagram.com/p/${project.src}/embed`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    allow="encrypted-media"
                                    className="w-full h-full border-none"
                                />
                            ) : project.type === 'video' ? (
                                <video
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    <source src={project.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={project.src}
                                    alt={project.client}
                                    loading="lazy"
                                    className="w-full h-full object-contain p-4"
                                />
                            )}
                        </div>
                    </div>

                    {/* Right: Info Block */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <p className="text-brand-gold uppercase tracking-widest text-sm mb-4 font-medium">{project.category}</p>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">{project.client}</h1>

                        <div className="block w-12 h-[1px] bg-white/20 mb-6"></div>

                        <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-2">Role</h3>
                        <p className="text-lg font-light mb-8">{project.role}</p>

                        <h3 className="text-gray-400 uppercase tracking-widest text-xs mb-2">Description</h3>
                        <p className="text-base text-gray-300 font-light leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Project Navigation */}
                <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-stretch min-h-[100px]">
                    {(() => {
                        const currentIndex = projects.findIndex(p => p.id === id);
                        const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
                        const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

                        return (
                            <>
                                <div className="flex-1 flex flex-col justify-center">
                                    {prevProject && (
                                        <Link href={`/work/${prevProject.id}`} className="group flex flex-col items-start gap-2 hover:opacity-70 transition-opacity">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 flex items-center">
                                                <ChevronLeft className="w-3 h-3 mr-1" /> Previous
                                            </span>
                                            <span className="text-sm md:text-base font-medium text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                                                {prevProject.client}
                                            </span>
                                        </Link>
                                    )}
                                </div>

                                {(prevProject || nextProject) && (
                                    <div className="w-[1px] bg-white/10 mx-8"></div>
                                )}

                                <div className="flex-1 text-right flex flex-col justify-center">
                                    {nextProject && (
                                        <Link href={`/work/${nextProject.id}`} className="group flex flex-col items-end gap-2 hover:opacity-70 transition-opacity">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 flex items-center">
                                                Next <ChevronRight className="w-3 h-3 ml-1" />
                                            </span>
                                            <span className="text-sm md:text-base font-medium text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                                                {nextProject.client}
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}
