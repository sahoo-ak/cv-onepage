
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/pages-section/Section";
import ResearchItem from "@/components/pages-section/ResearchItem";
import EducationItem from "@/components/pages-section/EducationItem";
import PublicationItem from "@/components/pages-section/PublicationItem";
import ExperienceItem from "@/components/pages-section/ExperienceItem";
import SkillsSection from "@/components/pages-section/SkillsSection";
import AwardItem from "@/components/pages-section/AwardItem";
import ConferenceItem from "@/components/pages-section/ConferenceItem";
import ContactForm from "@/components/pages-section/ContactForm";
import { researchProjects, publications, education, experiences, skills, awards, conferencesAndSchools } from "@/data";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Index: React.FC = () => {
  const journalPublications = publications.filter(pub => pub.type === 'journal');
  const preprintPublications = publications.filter(pub => pub.type === 'preprint');
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Research Section */}
        <Section 
          id="research" 
          title="Research Focus" 
          subtitle="My primary research interests and ongoing projects"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <ResearchItem 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section 
        id="education" 
        title="Education" 
        subtitle="Academic background and qualifications"
        className="bg-gray-50"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* PhD (single column) */}
            {education.filter(edu => edu.degree.includes("Ph.D.")).map((edu, index) => (
              <EducationItem 
                key={edu.id}
                degree={edu.degree}
                institution={edu.institution}
                location={edu.location}
                startDate={edu.startDate}
                endDate={edu.endDate}
                title={edu.title}
                supervisor={edu.supervisor}
                description={edu.description}
                index={index}
                isLarge={true}
              />
            ))}
            
            {/* Masters and Bachelors (two columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.filter(edu => !edu.degree.includes("Ph.D.")).map((edu, index) => (
                <EducationItem 
                  key={edu.id}
                  degree={edu.degree}
                  institution={edu.institution}
                  location={edu.location}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  percentage={edu.percentage}
                  cgpa={edu.cgpa}
                  title={edu.title}
                  supervisor={edu.supervisor}
                  description={edu.description}
                  index={index + 1} // +1 to account for PhD being index 0
                />
              ))}
            </div>
          </div>
        </Section> 
        
        {/* Publications Section */}
        <Section 
          id="publications" 
          title="Publications" 
          subtitle="Peer-reviewed articles and academic contributions"
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-xl font-medium mb-4">Journal Articles</h3>
              {journalPublications.map((publication, index) => (
                <PublicationItem 
                  key={publication.id}
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  volume={publication.volume}
                  pages={publication.pages}
                  year={publication.year}
                  doi={publication.doi}
                  pdfUrl={publication.pdfUrl}
                  index={index}
                  type="journal"
                  number={index + 1}
                />
              ))}
            </div>
            
            {preprintPublications.length > 0 && (
              <div className="grid grid-cols-1 gap-4 pt-8">
                <h3 className="text-xl font-medium mb-4">Preprints</h3>
                {preprintPublications.map((publication, index) => (
                  <PublicationItem 
                    key={publication.id}
                    title={publication.title}
                    authors={publication.authors}
                    journal={publication.journal}
                    year={publication.year}
                    doi={publication.doi}
                    url={publication.url}
                    pdfUrl={publication.pdfUrl}
                    index={index}
                    type="preprint"
                    number={index + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </Section>
        
        {/* Conferences & Schools Section */}
        <Section 
          id="conferences" 
          title="Conferences & Schools" 
          subtitle="Academic events and specialized training programs attended"
        >
          <div className="grid grid-cols-1 gap-6">
            {conferencesAndSchools.map((item, index) => (
              <ConferenceItem 
                key={item.id}
                title={item.title}
                organization={item.organization}
                location={item.location}
                date={item.date}
                description={item.description}
                type={item.type}
                index={index}
              />
            ))}
          </div>
        </Section>
        
        {/* Experience Section */}
        <Section 
          id="experience" 
          title="Academic Experience" 
          subtitle="My research and teaching experience"
          className="bg-gray-50"
        >
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id}
                title={experience.title}
                organization={experience.organization}
                location={experience.location}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
          
          <SkillsSection skills={skills} />
        </Section>
        
        {/* Awards Section */}
        <Section 
          id="awards" 
          title="Honors & Awards" 
          subtitle="Recognition for academic and research excellence"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <AwardItem 
                key={award.id}
                title={award.title}
                organization={award.organization}
                year={award.year}
                description={award.description}
                index={index}
              />
            ))}
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section 
          id="contact" 
          title="Get in Touch" 
          subtitle="Interested in collaboration or have questions about my research?"
          className="bg-gray-50"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <ContactForm />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to reach out directly?
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:aloka_s@ph.iitr.ac.in, aloka.ku.sahoo@gmail.com"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a> */}
                <a
                  href="https://github.com/sahoo-ak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.50001C19.9988 8.30498 19.5325 7.15732 18.7 6.30001C19.0905 5.26198 19.0545 4.11164 18.6 3.10001C18.6 3.10001 17.5 2.80001 15.1 4.40001C13.0672 3.87165 10.9328 3.87165 8.9 4.40001C6.5 2.80001 5.4 3.10001 5.4 3.10001C4.94548 4.11164 4.90953 5.26198 5.3 6.30001C4.46745 7.15732 4.00122 8.30498 4 9.50001C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} | Aloka Kumar Sahoo | All Rights Reserved</p>
            {/* <p>Designed and developed with precision and elegance</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
