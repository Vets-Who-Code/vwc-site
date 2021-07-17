import { useState, useRef } from 'react'
import Typed from 'react-typed'
import Form from '../components/Jobs/Form/Form'
import Card from '../components/Jobs/Card/Card'
import Loader from '../components/Jobs/Loader/Loader'
import Video from '../components/Jobs/Video/Video'
import NoResults from '../components/Jobs/NoResults/NoResults'
import Paginate from '../components/Jobs/Pagination/Pagination'
import ScrollContainer from 'react-indiana-drag-scroll'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

function Jobs() {
  const [jobData, setJobData] = useState(false)
  const [clickEvent, setClickEvent] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const getGrid = useRef(null)

  function formData(event, page = 1) {
    event.preventDefault()
    setClickEvent(event)
    setFormSubmitted(true)
    document.getElementById('middle').scrollIntoView()

    const formResponse = {
      zipCode: event.target[0].value,
      remote: event.target[1].checked,
      distance: event.target[2].value,
    }
    let what = 'JavaScript ReactJS Gatsby GraphQL NodeJS node.js'
    let exclude = '0000 senior sr. Senior sr Sr. principal lead master'

    let url = `https://test-vwc-job-app.netlify.app/.netlify/functions/jobs/${page}?&results_per_page=15&what_or=${what}&where=${
      formResponse.zipCode
    }&distance=${formResponse.distance}&what_exclude=${exclude}&sort_by=date&max_days_old=30${
      formResponse.remote === true ? '&what_and=remote' : ''
    }`

    fetch(url)
      .then(response => response.json())
      .then(setJobData)
      .catch(console.error)
      .then(setJobData(false))
  }

  return (
    <>
      <SEO title="Job Search" />
      <PageHeader />
      <section id="jobs" className="small-top-pad section bg-default">
        <div className="container">
          <div className="row">
            <div className="col-md-12 lead-in">
              <h1 id="main-header" className="story-title">
                JOB SEARCH
              </h1>
              <p>
                <i>
                  {' '}
                  <div className="typed-container">
                    <div id="typed-strings">
                      <p className="pt-0">
                        #VetsWhoCode{' '}
                        <span id="typed" className="typed">
                          {' '}
                          <Typed
                            strings={[
                              'provides job placement assistance.',
                              '^2000 makes a difference in the lives of veterans.',
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            startDelay={1000}
                            backDelay={3000}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </i>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="faq-short-brief container-fluid">
                <p>
                  Vets Who Code Job Search (VWC) is a tool for connecting veterans, military, and
                  military spouses with jobs. Our goal is to make every workplace fair and
                  profitable by bringing together the perfect candidate with the ideal employer. Our
                  site pairs technology and best practices in order to promote practical and gainful
                  employment.
                </p>
              </div>
            </div>
          </div>
          {/*  End Header  */}

          {/*  Search Bar  */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Form data={formData} />
              </div>
            </div>
          </div>
          {/*  Search End  */}

          {/*  Empty Grid  */}
          <div id="middle" className="middle"></div>
          <NoResults isSubmitted={formSubmitted} jobData={jobData} />
          <Loader isSubmitted={formSubmitted} jobData={jobData} />
          <div className="container" style={{ marginTop: 20 }}>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <Video isSubmitted={formSubmitted} />
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          {/*  End Empty Grid  */}

          {/*  Grid  */}
          <div className="jobgrid-container">
            <ScrollContainer
              ref={getGrid}
              hideScrollbars={false}
              className={`jobgrid hide-native-scrollbar ${jobData ? 'scroll-container' : 'hidden'}`}
            >
              {jobData &&
                jobData.results.map((job, i) => (
                  <Card isSubmitted={formSubmitted} jobData={job} key={`job data card-${i}`} />
                ))}
            </ScrollContainer>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <Paginate
            jobData={jobData}
            formData={formData}
            clickEvent={clickEvent}
            getGrid={getGrid}
          />
        </div>
      </div>
      {/*  End Grid  */}
    </>
  )
}

export default Jobs
