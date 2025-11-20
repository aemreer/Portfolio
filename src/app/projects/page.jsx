import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
    const projects = [
        { id: 1, title: "Furry", desc: "Furry e-ticaret demo", image: "/images/furry.png", link: "https://github.com/aemreer/furry-ecommerce" },
        { id: 2, title: "Netflix Clone", desc: "Netflix klon demo", image: "/images/n.png", link: "https://github.com/aemreer/Netflix-Clone" },
        { id: 3, title: "Blog", desc: "Blog website demo", image: "/images/blog.png", link: "https://github.com/aemreer/Blog-Frontend" }
    ]

    return (
        <section className="container">
            <h1 style={{ marginTop: '24px' }}>Projelerim</h1>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '20px' }}>
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    )
}
