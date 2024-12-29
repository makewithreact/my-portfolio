import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import exampleProjectImage from "../public/images/example-project-1.png";
import { MyProjectItem } from "./MyProjectItem";

const projects = [
  {
    id: 1,
    title: "ui/ux project",
    image: exampleProjectImage,
    category: "ui-ux"
  },
  {
    id: 2,
    title: "web design project",
    image: exampleProjectImage,
    category: "web-design"
  },
  {
    id: 3,
    title: "web developer project",
    image: exampleProjectImage,
    category: "web-developer"
  },
  {
    id: 4,
    title: "mobile developer project",
    image: exampleProjectImage,
    category: "mobile-developer"
  }
]

export function MyProjectsSection() {

  const uiUxProjects = projects.filter(project => project.category === "ui-ux");
  const webDesignProjects = projects.filter(project => project.category === "web-design");
  const webDeveloperProjects = projects.filter(project => project.category === "web-developer");
  const mobileDeveloperProjects = projects.filter(project => project.category === "mobile-developer");



  return (
    <section className="w-full pb-20 pt-5 flex flex-col gap-3 items-center">
      <h1 className="text-4xl font-bold text-center md:text-left">
        My Projects
      </h1>
      <p className="max-w-[500px] text-center text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit, nunc id luctus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Tabs defaultValue="all" className="w-full flex flex-col gap-8 items-center">
        <TabsList className="flex flex-col md:flex-row mt-14 md:mt-0 mb-8 md:mb-0">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
          <TabsTrigger value="web-design">Web Design</TabsTrigger>
          <TabsTrigger value="web-developer">Web Developer</TabsTrigger>
          <TabsTrigger value="mobile-developer">Mobile Developer</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="flex justify-center flex-wrap gap-3">
            {
              projects.map((project) => (
                <MyProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={project.category}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="ui-ux">
          <div className="flex flex-wrap gap-3">
            {
              uiUxProjects.map((project) => (
                <MyProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={project.category}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="web-design">
          <div className="flex flex-wrap gap-3">
            {
              webDesignProjects.map((project) => (
                <MyProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={project.category}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="web-developer">
          <div className="flex flex-wrap gap-3">
            {
              webDeveloperProjects.map((project) => (
                <MyProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={project.category}
                />
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="mobile-developer">
          <div className="flex flex-wrap gap-3">
            {
              mobileDeveloperProjects.map((project) => (
                <MyProjectItem
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  category={project.category}
                />
              ))
            }
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
