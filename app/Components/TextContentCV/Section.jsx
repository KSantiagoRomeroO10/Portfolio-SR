'use client'
import './Section.css'

import { useState } from 'react'

const Section = ({ Sections }) => {
  const [CurrentPage, setCurrentPage] = useState(1)

  const academyHistory = Sections.map((section) => {
    if (Array.isArray(section.Text)) {
      return section.Text.map((academic) => (
        <div key={academic.Title}>
          <h3>{academic.Title}</h3>
          <br />
          <p>- {academic.Date}</p>
          <br />
        </div>
      ))
    } else {
      return null
    }
  })
  
  return (
    <section className="paginated-div">
      <div className="pagination">
        {Sections.map((section) => (
          <button
            key={section.Id}
            className={`page-button ${section.Id === CurrentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(section.Id)}
          >
            {section.Id}
          </button>
        ))}
      </div>

      <div className="urrentt">
        {Sections.map((section) => (
          <div
            key={section.Id}
            className={`page ${section.Id === CurrentPage ? 'active' : ''}`}
          >
            <h2 className="tituloSections">{section.Title}</h2>
            <br />
            <br />
            <div>
              {!Array.isArray(section.Text) ? (
                <p>{section.Text}</p>
              ) : (
                academyHistory
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section
