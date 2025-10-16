import React from 'react';

const NewspaperApp = () => {
  const navLinks = [
    'ABOUT', 'ADVERTISE', 'DONATE', 'UNIVERSITY NEWS', 'METRO', 
    'SPORTS', 'ARTS & CULTURE', 'SCIENCE & RESEARCH', 'OPINIONS', 
    'PROJECTS', 'MULTIMEDIA', 'POST: MAGAZINE'
  ];

  const opinionArticles = [
    {
      title: "Azhar '29: Friendship on College Hill shouldn't come with terms and conditions",
      author: "Dua Azhar",
      date: "October 15"
    },
    {
      title: "Leggat-Barr '28: Democrats can't win by playing it safe",
      author: "Tommy Leggat-Barr",
      date: "October 14"
    },
    {
      title: "Hudes '27: Brown's democratic gesture falls flat when democracy itself is on the line",
      author: "Paul Hudes",
      date: "October 14"
    },
    {
      title: "Lander, Davis MA'97 PhD'11: Our community deserves financial transparency",
      author: "Brian Lander and Denise Davis",
      date: "October 14"
    },
    {
      title: "Guan '27: In defense of the pre-professional first-year student",
      author: "Lucas Guan",
      date: "October 14"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.wrapper}>
          <div style={styles.topBarContent}>
            <div style={styles.topLeftLinks}>
              <span style={styles.date}>Wednesday October 15th, 2025</span>
            </div>
            <div style={styles.topRightLinks}>
              <a href="#" style={styles.topLink}>Submit a Tip</a>
              <a href="#" style={styles.topLink}>Submit an Op-Ed</a>
              <a href="#" style={styles.topLink}>Subscribe to Newsletters</a>
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div style={styles.masthead}>
        <div style={styles.wrapper}>
          <div style={styles.since}>SINCE 1891</div>
          <h1 style={styles.title}>THE BROWN DAILY HERALD</h1>
        </div>
      </div>

      {/* Breaking News */}
      <div style={styles.breakingNews}>
        <strong>Breaking News:</strong> Hadley Carr's 136th Editorial Board Proposal
      </div>

      {/* Main Content */}
      <div style={styles.wrapper}>
        <div style={styles.mainContent}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Featured Article */}
            <article style={styles.featuredArticle}>
              <h2 style={styles.featuredTitle}>
                Senior Editor of Product and Operations
              </h2>
              <div style={styles.articleMeta}>
                By <strong>Hadley Carr</strong> | October 15 | <strong>UNIVERSITY NEWS</strong>
              </div>
              
              <div className="application-content">
                <p>Dear 135,</p>

                <p>After great consideration I would be honored for the opportunity to apply to the 136th editorial board. With that, I would like to propose the role of senior editor of product and operations.</p>

                <p>The below proposal will outline three main areas that I hope to contribute to as a member of the editorial board as well as additional responsibilities that I would be excited to take on. Because of the dedicated work of the 135th editorial board, I believe the Herald is poised to become a top college newspaper — both in terms of its position as a teaching organization and a newspaper itself.</p>

                <p>In my reflection of The Herald, I have identified three main factors to evaluate the growth of the paper:</p>

                <ul>
                  <li>Engagement in the paper, both on campus and digitally</li>
                  <li>The yearly retention and individual growth of staff members</li>
                  <li>The efficiency of daily production</li>
                </ul>

                <p>Before I discuss the specific plans that I have to address these metrics, I would also like to introduce the definition of success by which I ground my daily activities:</p>

                <ul>
                  <li>Learning one new thing every day</li>
                  <li>Helping one person every day</li>
                </ul>

                <p>With this perspective, I believe I am uniquely qualified to tackle the aforementioned performance metrics. But, my desire to maintain and grow the health of the Herald goes far beyond the actionable plan that I will list below. It is instead deeply rooted in the beginnings of my time at the Herald.</p>

                <div className="aside">
                  <h3>An aside:</h3>

                  <p>Much of what I have done at the Herald has been on a whim. I second guessed going to the first new writer training where we were asked to cover Brown's newest vegan dining hall. I submitted my application to be a senior staff writer late because I had been hospitalized a week before. It was only when I became a staff writer when I realized that I wanted to actively make a change at the Herald. It was then that I realized how much impact that the Herald had already had on my college experience.</p>

                  <p>The newspaper has completely shifted my perspective at Brown. It has introduced me to people that I have never met, both on and off the staff. The Herald was my first introduction to the coffee shops on Brown's campus, and I still think of Coffee Exchange's founding story as I impatiently wait in line on a rainy Saturday morning. The Herald allowed me to meet department chairs with whom I would have never interacted with. In a way, the Herald even reminded me of the love that flows through each of the random nooks on campus. Every day, the paper reminds me of how much I love to listen to a person's story — and to tell it in a way that makes them heard.</p>

                  <p>My proposal for the 136th editorial board is not random and it is not on a whim. It is an active decision to improve the quality, product, and operations of the Herald. The changes outlined below are not only driven by metrics of success, but also by my love for the paper (and the people that make it happen).</p>
                </div>

                <h2>Product:</h2>
                <h3>The Herald continues its entry to the era of digital journalism</h3>

                <p>The responsibilities that fall within the product side of this role are largely focused at continuing the Herald's focus on amplifying its role in the field of digital journalism. As the field of journalism continues to evolve, iterative innovation is necessary to remain relevant to the paper's readership. This is best accomplished through creating an end-to-end user experience on all platforms that interact with the Herald.</p>

                <p><strong>Key Focus Areas:</strong></p>
                <ul>
                  <li>The app experience and functionality</li>
                  <li>The website design and features</li>
                  <li>Agile development methodology</li>
                </ul>

                <h3>The app:</h3>
                
                <h4>Small changes:</h4>
                <p>There are simple UI/UX changes that can be made to the app to allow for a seamless "end-to-end" experience. A couple of small changes are listed below.</p>
                <ul>
                  <li>A longer introduction screen upon opening the app that pauses on the BDH's logo before entering the app. The subtle change plays a large role in maintaining the Herald's branding.</li>
                </ul>

                <h4>Large projects:</h4>
                <ul>
                  <li>Larger changes that allow for this "end-to-end" user experience include hosting the podcast (and potentially vertical videos) on the app, creating a one-platform-fits-all to any content that the Herald produces.</li>
                  <li>In linking vertical videos to the app, this allows the possibility to link vertical videos to the articles that they discuss. This creates a curated short-form content engine that directly applies to one of the Herald's key user groups.</li>
                  <li>An intuitive navigation through the app. Currently, the only navigation of sections is in the reordering of sections on the sidebar menu. Sections should be available to view on click. This is key to user navigation.</li>
                </ul>

                <h4>Existing projects:</h4>
                <ul>
                  <li>Integrating crosswords and games into the app. In discussion with Ryan, this is an initiative that is already underway and would promote community across readers, particularly as the New York Times crossword puzzle now hides behind a pay wall.</li>
                </ul>

                <h3>The website:</h3>
                <ul>
                  <li>A potential consideration within the website is the addition of comments to articles. While this addition opens up the possibility of addressing potentially unethical comments, the feature is found to be commonly used among other popular news sources.</li>
                  <li>As discussed with Ryan, the media pages for photographers can and should be shifted to feature their media, as opposed to the stories for which the media was taken.</li>
                  <li>Another potential consideration is having a section of the website dedicated to obituaries. Having written an obituary myself, and edited two others, I am intimately aware of how vulnerable writing such pieces are and how important they are to the friends and families of the deceased.</li>
                  <li>Continued development and iteration of the home page. The homepage is well-organized and comprehensive. But, its structure does not mirror that of a typical online news organization. The Washington Post, Financial Times, New York Times, The Wall Street Journal, and The Atlantic all center their home pages on one story, with smaller items lining the sidebars.</li>
                  <li>Dynamic images: Digitally, there is also room for dynamic multimedia content that attaches to articles. For example, the Atlantic has a series of dynamic images (GIFS) as the media for the article. When scrolling through their index page, the images create a more engaging story.</li>
                  <li>Interactive graphs: the Herald's data team has already done an incredible job in displaying the data that is presented in articles. In developing and centering interactive graphs — such as those used by the Wall Street Journal — the home page of the Herald creates an interactive story telling experience.</li>
                </ul>

                <p>In order to accomplish these large changes, it will be beneficial to the Herald to restructure its current product development cycle. The first step in working with the tech team is addressing any current unresolved projects and individual ambitions among the staff. The new plan is contingent on first having a conversation with the tech team that introduces the new methodology listed below.</p>

                <h3>Centering product development on agile methodology:</h3>
                
                <p>To ensure efficient and productive change within the Herald, it is best that the tech team considers fully shifting to an agile methodology that allows for continuous and iterative development.</p>

                <p><strong>Key Components of Agile Implementation:</strong></p>
                <ul>
                  <li>Two-week sprint cycles (adjustable based on team bandwidth and ambition)</li>
                  <li>Daily scrum meetings or check-ins to track progress</li>
                  <li>Product backlog developed at the beginning of each semester</li>
                  <li>Iterative implementation, review, and refinement process</li>
                  <li>A/B testing during iteration to align with Herald's success metrics</li>
                  <li>Focus on engagement and measurable outcomes</li>
                </ul>

                <p>The underlying mission of the product role is to fully integrate the digital, data, and content that the Herald's staff produces. This continued coordination may best manifest in the form of assigning members of the data team to sections or editors and vice versa.</p>

                <p>That being said, the proposal only encapsulates a share of my plans for the app and website. Though each initiative is grounded with purpose, they will also be driven by the decision of the 136th editorial board.</p>

                <h2>Operations:</h2>
                <h3>Ensuring operational efficiencies among internal and external workflows in the Herald</h3>

                <p>When writing articles that require mass sourcing, even copying and pasting an email takes writers several minutes. In developing shortcuts for each potential bucket of mass outreach (i.e.: across departments, within departments, across deans, etc.), the time spent doing initial sourcing while reporting on breaking news is significantly reduced.</p>

                <p><strong>Example Implementation:</strong></p>
                <ul>
                  <li>Email draft automation: By clicking on the "Email Draft" button in the navigation bar, 80 emails will be generated in your drafts</li>
                  <li>This example demonstrates the optimization potential across Herald workflows</li>
                </ul>

                <p>While there are several ways that the Herald's workflows can shift to become more efficient, I have listed key initiatives below. Each implementation is dependent on agreement with the 136th Editorial Board and will only be made after considering the opportunity of the time reduced versus any potential costs.</p>

                <p><strong>Proposed Operational Improvements:</strong></p>

                <ul>
                  <li>Automating any communication after a story is pushed (i.e.: ensuring the digital team is aware, there are eight stories, etc.)</li>
                  <li>Generating a wire-framed blurb when a story idea is entered into Notion.</li>
                  <li>Automating reminders to editors to check-in with their writers on sourcing, etc.</li>
                  <li>A live source tracker for each writer that is used throughout the reporting process. This ensures that writers begin sourcing early and often. This data can be synced through the source tracking structure on the blurb's template.</li>
                  <li>Developing a retrieval augmented generation chat engine that ensures that the Herald is reporting on new content. This product would require far more ethical consideration in terms of what the model is trained on, and would require a proposal of this length to speak for itself. That being said, the internal centralization of Herald data provides a major opportunity for fast and exhaustive reporting.</li>
                </ul>

                <h2>Additional responsibilities:</h2>
                <h3>Community</h3>

                <p>While the Herald should certainly focus on creating a quality product, it is also a teaching paper at its core. Though community does not fall within the category of products and operations, they are essential building blocks. The Herald can explore other opportunities to engage mentorship across roles as outlined below:</p>

                <ul>
                  <li>Create peer buddies within the contributing writer class.</li>
                  <li>Create "step-mentors," connecting members of the staff within one degree of positions on the Herald's staff hierarchy. For example, contributing writers may be paired with SSWs; SSWs may be paired with a given section editor, etc.</li>
                  <li>Implement intentional five minute breaks during production. The time allows each staff member a moment to reset.</li>
                  <li>Allow senior staff writers the opportunity to shadow section editors for a production shift. This not only aims to make the role seem manageable and attainable, but also potentially reduces the workload of a section editor during production. This should only be implemented towards the end of an SSW's tenure.</li>
                </ul>

                <h2>Conclusion:</h2>

                <p>The Herald has and will continue to give invaluable lessons to hundreds of undergraduate students. It is an organization that tells stories at scale — and does it well. The plan outlined in the proposal above aims to maintain this level of excellence.</p>

                <p><strong>Vision for the Future:</strong></p>
                <ul>
                  <li>In ten years, I believe the Herald has the potential to be the top college newspaper</li>
                  <li>The plan above fills the gap in the Herald's current product and operational components that lay this foundation</li>
                  <li>Success will be driven by the dedication of 400+ staff members who care deeply about the organization</li>
                </ul>

                <p>I believe this for many reasons, but the main one is the dedication that I have seen within each staff member of the Herald. It is rare to find a net average of 400 people who care deeply about something. I would be honored to contribute to being a part of such an organization.</p>

                <p className="signature">
                  Thank you for your consideration,<br />
                  Hadley
                </p>
              </div>
            </article>
          </div>

          {/* Right Column (Sidebar) */}
          <aside style={styles.rightColumn}>
            {/* PhD Admissions Article */}
            <div style={styles.sidebarSection}>
              <article style={styles.sidebarImageArticle}>
                <h4 style={styles.sidebarTitle}>
                  <a href="#" style={styles.sidebarLink}>
                    PhD admissions paused in at least six humanities, social science departments
                  </a>
                </h4>
                <div style={styles.sidebarMeta}>
                  By <strong>Ethan Schenker</strong> and <strong>Claire Song</strong> | October 15 | <strong>UNIVERSITY NEWS</strong>
                </div>
                <div style={styles.sidebarImage}></div>
                <p style={styles.sidebarText}>
                  Faculty and graduate students expressed disappointment and frustration at the decision.
                </p>
              </article>

              <article style={styles.sidebarArticle}>
                <h4 style={styles.sidebarTitle}>
                  <a href="#" style={styles.sidebarLink}>
                    New 176-unit permanent supportive housing complex opens in Providence
                  </a>
                </h4>
                <div style={styles.sidebarMeta}>
                  By <strong>Pavani Durbhakula</strong> | October 15 | <strong>METRO</strong>
                </div>
                <p style={styles.sidebarTextSmall}>
                  The state has set a goal of permitting 375 new permanent supportive housing units by 2030.
                </p>
              </article>
            </div>

            {/* Opinions Section */}
            <div style={styles.sidebarSection}>
              <h3 style={styles.sidebarSectionTitle}>OPINIONS</h3>
              
              {opinionArticles.map((article, index) => (
                <article key={index} style={styles.sidebarArticle}>
                  <h4 style={styles.sidebarTitle}>
                    <a href="#" style={styles.sidebarLink}>{article.title}</a>
                  </h4>
                  <div style={styles.sidebarMeta}>
                    By <strong>{article.author}</strong> | {article.date}
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Times New Roman', Times, serif",
    lineHeight: '1.6',
    color: '#333',
  },
  wrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  topBar: {
    background: '#fff',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
  },
  topBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  topLeftLinks: {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
  },
  date: {
    color: '#666',
  },
  topRightLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '5px',
    fontSize: '14px',
  },
  topLink: {
    color: '#d32f2f',
    textDecoration: 'none',
  },
  masthead: {
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: '3px solid #000',
  },
  since: {
    fontSize: '11px',
    letterSpacing: '3px',
    marginBottom: '5px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'normal',
    letterSpacing: '2px',
    margin: '10px 0',
  },
  breakingNews: {
    background: '#d32f2f',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontSize: '18px',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '30px',
    padding: '30px 0',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  featuredArticle: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '30px',
  },
  featuredTitle: {
    fontSize: '36px',
    fontWeight: 'normal',
    lineHeight: '1.3',
    marginBottom: '10px',
  },
  articleMeta: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '20px',
  },
  rightColumn: {
    borderLeft: '1px solid #ddd',
    paddingLeft: '30px',
  },
  sidebarSection: {
    marginBottom: '40px',
  },
  sidebarSectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #000',
  },
  sidebarImageArticle: {
    marginBottom: '20px',
  },
  sidebarArticle: {
    marginBottom: '25px',
    paddingBottom: '25px',
    borderBottom: '1px solid #eee',
  },
  sidebarTitle: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '1.4',
    marginBottom: '8px',
  },
  sidebarLink: {
    color: '#333',
    textDecoration: 'none',
  },
  sidebarMeta: {
    fontSize: '12px',
    color: '#666',
  },
  sidebarImage: {
    width: '100%',
    height: '200px',
    background: '#e0e0e0',
    margin: '10px 0',
  },
  sidebarText: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#666',
  },
  sidebarTextSmall: {
    fontSize: '13px',
    marginTop: '8px',
    color: '#666',
  },
};

export default NewspaperApp;