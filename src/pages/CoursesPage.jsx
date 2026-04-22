import PageShell from '../components/PageShell'
import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/site'

function CoursesPage() {
  return (
    <PageShell>
      <section className="section-card overflow-hidden px-6 py-14 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Courses"
          title="Engineering courses with clear direction and modern presentation"
          description="Browse the four core branches currently offered by Rajdhani Education with a clean, responsive experience on every device."
        />
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            index={index}
          />
        ))}
      </section>
    </PageShell>
  )
}

export default CoursesPage
