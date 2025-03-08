export default function CardProject() {
  const projects = Array(9).fill({
    label: "Process",
    title: "Interactive Dashboard",
    description:
      "Logo design for a decoration and wood company. The idea of the logo is to be the letter L Logotype Textual",
  });

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-50 cursor-pointer border border-transparent hover:border-amber-200"
          >
            <div className="flex flex-col">
              <div className="mb-2 text-right">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-white rounded-lg">
                  {project.label}
                </span>
              </div>

              <div className="flex items-center mb-3">
                <img
                  src="src/assets/Footer/Freelancer/Project.svg"
                  alt=""
                  className="w-16 h-16  rounded-lg flex items-center justify-center relative"
                />
                <h3 className="text-CardMainTitle font-bold text-primary">
                  {project.title}
                </h3>
              </div>

              <p className="text-MainBodyText text-black-text leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
