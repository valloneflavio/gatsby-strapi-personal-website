import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa"
import siteConfig from '../../data/siteConfig'

import { Layout, Hero, SEO, Wrapper, About, Skills, Timeline, Articles } from '../components/index'
import Repositories from '../components/repositories'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {

  render () {
    // validate siteConfig settings
    if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
      console.error('WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.');
    }

    const title = siteConfig.authorTitle
    const siteTitle = siteConfig.siteTitle
    const {keywords} = siteConfig
    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteTitle}
          keywords={keywords}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={title}
        />

        <Wrapper className={this.props.className} >
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className='avatar'>
                <img
                  className='avatar__image'
                  src='/images/avatar.jpeg'
                  alt='user avatar'
                />
                <div className="subtitle">
                  <p dangerouslySetInnerHTML={{ __html: siteConfig.authorShortDescription }}></p>
                </div>                
                <div className="social">
                  {siteConfig.social.linkedin && <a className="social-link linkedin" href={siteConfig.social.linkedin}>
                    <FaLinkedin className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.twitter && <a className="social-link twitter" href={siteConfig.social.twitter}>
                    <FaTwitter className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.instagram && <a className="social-link instagram" href={siteConfig.social.instagram}>
                    <FaInstagram className="social-icon" size="32" />
                  </a>}                  
                  {siteConfig.social.email && <a className="social-link email" href={`mailto:${siteConfig.social.email}`}>
                    <FaEnvelope className="social-icon" size="32" />
                  </a>}
                  {siteConfig.social.github && <a className="social-link github" href={siteConfig.social.github}>
                    <FaGithub className="social-icon" size="32" />
                  </a>}                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8}>
                <About title='About' text={siteConfig.authorDescription}/>
              </Col>
              <Col xs={4} sm={4}>
                <Skills title='Tech Skills' skills={siteConfig.skills} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title='Soft Skills' skills={siteConfig.softskills} />
              </Col>              
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Articles />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 30px;
    flex-direction: column;
    margin-top: -150px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.instagram:hover {
    color: #C13584;
  }  

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  .subtitle {
    margin-top: 15px;
    margin-bottom: 15px;
  }  
`
