import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import './pagination.css'

function Paginate({ theme, jobData, formData, clickEvent, getGrid }) {
  const pageChange = (event, value) => {
    formData(clickEvent, value)
    getGrid.current.container.current.scrollTop = 0
  }

  const useStyles = makeStyles({
    root:
      theme === 'light'
        ? ''
        : {
            '& ul > li > button:not(.Mui-selected)': {
              color: '#ffffff',
            },
            '& .MuiPaginationItem-ellipsis': { color: 'white' },
            '& ul > li button:not(.Mui-selected):hover': {
              backgroundColor: '#496288',
            },
          },
  })

  const classes = useStyles()

  return (
    <div className={`pagination-wrapper ${jobData ? '' : 'hidden'}`}>
      <div className={classes.root}>
        <Pagination
          count={Math.floor(jobData.count / 15)}
          showFirstButton
          showLastButton
          color={theme === 'light' ? 'primary' : 'secondary'}
          onChange={pageChange}
          className="inner-pagination"
        />
        <div className={`adzuna ${theme === 'light' ? '' : 'dark-theme'}`}>
          Powered By{' '}
          <a href="https://www.adzuna.com/" target="_blank" rel="noopener noreferrer">
            Adzuna{' '}
          </a>
          <StaticImage
            width={12}
            height={12}
            className="adzuna-logo"
            src="../../../images/adzuna.png"
            alt="Adzuna Logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Paginate

Paginate.propTypes = {
  jobData: PropTypes.bool,
  formData: PropTypes.bool,
  clickEvent: PropTypes.object,
  getGrid: PropTypes.string,
  theme: PropTypes.string,
}
