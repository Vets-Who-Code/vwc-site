import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import thisIsUs from '../images/this_is_us.png'

import Accordion from '../components/Accordion/Accordion'
import Panel from '../components/Accordion/Panel'

export default class Mentor extends Component {
  state = {
    blocks: [
      {
        title: 'Block 1: The Big Three',
        id: 'b-1',
        body:
          "Block one is the foundation of our curriculum. We start out teaching how the internet works and how this impacts how we develop for the web. We then get into HTML5 and CSS3 to start the development process. By incorporating web accessibility and UX design we give the students the complete story of web development and how it impacts the users directly. Finally this block closes with adding interaction to the sites using JavaScript along with API's.",
      },
      {
        title: 'Block 2: Computer Science With JavaScript',
        id: 'b-2',
        body:
          'Block two is all about computer science. As real world trends prove to us that web apps are growing in complexity we need to understand the tools to be able to create efficiencies and faster processes. This begins with the computer science elements learned through JavaScript. ',
      },
      {
        title: 'Block 3: React & JAMstack',
        id: 'b-3',
        body:
          'Block three introduces the JAMstack. Utilizing Gatsby which relies upon the best tech, such as React and GraphQL, we can make sure our students are getting the best and most sought after skills in our industry today.',
      },
      {
        title: 'Block 4: Official VWC Member: Interview prep',
        id: 'b-4',
        body:
          'By block four our students are full VWC members and start the job transitioning process. Through top resources and interview preparation we make sure they have shown the interviewers they are set for the job before they even walk in the door. ',
      },
    ],
  }

  render = () => {
    const { blocks } = this.state
    return (
      <Layout>
        <header
          className="inner-header overlay grey text-center slim-bg "
          style={{
            backgroundImage: `url(${thisIsUs})`,
            backgroundPositionY: 'bottom',
          }}
        >
          <div className="overlay-01" />
          <div className="container">
            <h2 className="text-center text-uppercase">Syllabus</h2>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/syllabus" className="page-active">
                Syllabus
              </Link>
            </div>
          </div>
        </header>
        <section id="faq" className="faq section pad-regular bg-default">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="faq-short-brief">
                  <h2>#VetsWhoCode Syllabus</h2>
                  <p>
                    Our curriculum is designed using the Agile Methodology with four-day sprints
                    dedicated to the subject. We do it in this manner based on the practice of how
                    veterans &quot;Train How You Fight&quot; in the military, so they should train
                    how they would work in a real software company. The primary language we will
                    focus on is JavaScript, due to its popularity in the job market, ease of
                    transition between Computer Science topics and real world application, and the
                    scope of industries we can introduce our veterans to, all while keeping language
                    proficiency at the forefront of the program. This way we can introduce Data
                    Visualization, Data Science, Cyber Security, and Internet of Things(IoT) to our
                    veterans, while continuing to have our troops grow in the area of JavaScript.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <Accordion single accordionId={'syllabus'}>
                  {blocks.map((block, index) => (
                    <Panel key={block.id} title={block.title} body={block.body} id={index} />
                  ))}
                </Accordion>
                <div className="col-md-12 text-center ">
                  <a
                    href="https://github.com/Vets-Who-Code/Curriculum"
                    type="button"
                    className="btn btn-subscribe"
                    aria-label="Curriculum Github"
                  >
                    Full Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
