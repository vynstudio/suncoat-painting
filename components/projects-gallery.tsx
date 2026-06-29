import { Paintbrush } from "lucide-react";

const projects = [
  {
    image: "/images/gallery-exterior.jpg",
    title: "Full exterior refresh",
    location: "Winter Park",
    tag: "Exterior",
  },
  {
    image: "/images/gallery-interior.jpg",
    title: "Living room + trim package",
    location: "Altamonte Springs",
    tag: "Interior",
  },
  {
    image: "/images/gallery-trim.jpg",
    title: "Doors, trim & millwork",
    location: "Orlando",
    tag: "Details",
  },
];

export function ProjectsGallery() {
  return (
    <section id="projects" className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">RECENT WORK</div>
            <h2 className="mt-1 text-3xl font-semibold tracking-tighter">Homes we’ve transformed across Central Florida</h2>
          </div>
          <a href="#quote" className="hidden text-sm font-medium text-amber-600 hover:text-amber-700 md:block">
            See more projects →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow">
                  <Paintbrush className="h-3 w-3" /> {project.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="font-semibold tracking-tight">{project.title}</div>
                <div className="text-sm text-slate-500">{project.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
