'use client'
import Styles from './Section.module.css'

import { useState } from 'react'

const Section = ({ Sections }) => {
  const [CurrentPage, SetCurrentPage] = useState(1)

  const AcademyHistory = Sections.map((Section) => {
    if (Array.isArray(Section.Text)) {
      return Section.Text.map((Academic) => (
        <div key={Academic.Title}>
          <h3>{Academic.Title}</h3>
          <br />
          <p>- {Academic.Date}</p>
          <br />
        </div>
      ))
    }
    else {
      return null
    }
  })
  
  return (
    <section>
      <div className={Styles.Pagination}>
        {Sections.map((Section) => (
          <button
            key={Section.Id}
            className={`${Styles.PageButton} ${Section.Id === CurrentPage ? Styles.Active : ''}`}
            onClick={() => SetCurrentPage(Section.Id)}
          >
            {Section.Id}
          </button>
        ))}
      </div>

      <div>
        {Sections.map((Section) => (
          <div
            key={Section.Id}
            className={`${Styles.Page} ${Section.Id === CurrentPage ? Styles.Active : ''}`}
          >
            <h2 className={Styles.TituloSections}>{Section.Title}</h2>
            <br />
            <br />
            <div>
              {!Array.isArray(Section.Text) ? (
                <p>{Section.Text}</p>
              ) : (
                AcademyHistory
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section
