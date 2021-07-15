import React, { useState, useRef } from 'react'
import Typed from 'react-typed'
import Form from '../components/JobApp/Form/Form'
import Card from '../components/JobApp/Card/Card'
import Loader from '../components/JobApp/Loader/Loader'
import Video from '../components/JobApp/Video/Video'
import NoResults from '../components/JobApp/NoResults/NoResults'
import Paginate from '../components/JobApp/Pagination/Pagination'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function JobApp(props) {
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
    <div>
      <div className="container">
        <h1 id="main-header" className={`main-header ${props.getDarkTheme}`}>
          JOB SEARCH
        </h1>
        <div className="typed-container">
          <div id="typed-strings">
            <p className={`lead-in ${props.getDarkTheme}`}>
              #VetsWhoCode{' '}
              <span id="typed" className={`typed ${props.getDarkTheme}`}>
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
        <p className="job-search-description">
          Vets Who Code Job Search (VWC) is a tool for connecting veterans, military, and military
          spouses with jobs. Our goal is to make every workplace fair and profitable by bringing
          together the perfect candidate with the ideal employer. Our site pairs technology and best
          practices in order to promote practical and gainful employment.
        </p>
        {/*  End Header  */}

        {/*  Search Bar  */}
        <Form data={formData} theme={props.theme} />
        {/*  Search End  */}

        {/*  Empty Grid  */}
        <div id="middle" className="middle"></div>
        <NoResults isSubmitted={formSubmitted} jobData={jobData} />
        <Loader isSubmitted={formSubmitted} jobData={jobData} />
        <Video isSubmitted={formSubmitted} />
        {/*  End Empty Grid  */}

        {/*  Grid  */}
        <div className={`jobgrid-container ${props.getDarkTheme}`}>
          <ScrollContainer
            ref={getGrid}
            hideScrollbars={false}
            className={`jobgrid hide-native-scrollbar ${jobData ? 'scroll-container' : 'hidden'}`}
          >
            {jobData &&
              jobData.results.map((job, i) => (
                <Card
                  isSubmitted={formSubmitted}
                  jobData={job}
                  theme={props.theme}
                  key={`job data card-${i}`}
                />
              ))}
          </ScrollContainer>
        </div>
      </div>
      <Paginate
        theme={props.theme}
        jobData={jobData}
        formData={formData}
        clickEvent={clickEvent}
        getGrid={getGrid}
      />
      {/*  End Grid  */}
    </div> // <-- render wrapper div
  )
}
