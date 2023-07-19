import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
// import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Chrome is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">Nextjs</Link> and <Link href="https://react.dev/">Reactjs</Link> are my front end
                    Javascript libraries of choice. Each line of code I write within Nextjs or Reactjs reminds me how much I love JavaScript.
                  </ListItem>
                  <ListItem>
                    I’m also very comfortable with <Link href="https://vuejs.org/">Vuejs</Link> and <Link href="https://v2.nuxt.com/">Nuxtjs</Link>.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used css-in-js solutions like
                    styled-components, but these days I’m using  <Link href="https://tailwindcss.com/">TailwindCSS</Link>. Which offers me consistent, customizable and fast workflow.
                    I can also use ChakraUI, MaterialUI, Vuetify and Bootstrap for styling.
                  </ListItem>
                  {/* <ListItem>
                    Other development I use are
                    <div className='flex flex-col items-start justify-start'>
                      <span>Javascript/Typesctipt</span>
                      <span>Redux/RTK</span>
                      <span>VueX</span>
                      <span>Strapi</span>
                      <span>Stripe/Hyperpay</span>
                    </div>
                  </ListItem> */}
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://greensock.com/gsap/">GSAP</Link> and <Link href="https://michalsnik.github.io/aos/">AOS</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with them.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components I use{' '}
                    <Link href="https://www.cypress.io/">Cypress</Link>, <Link href="https://enzymejs.github.io/enzyme/">Enzyme</Link> and <Link href="https://jestjs.io/">JEST</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool to develop designs.
                  </ListItem>
                  <ListItem>
                    I’m also comfortable with <Link href="https://zeplin.io/">Zeplin</Link> and <Link href="https://adobexdplatform.com/">AdobeXD</Link>.
                  </ListItem>
                  <ListItem>
                    I even can freely use Photoshop to convert PSD files into code.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>AMD Ryzen 5800x</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>MSI Gaming X Trio RTX 3080</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>GSkill 32GB DDR4 3600mhz CAS 18</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>MSI B550 Tomahawk</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1440p IPS 144hz LG 27GL850</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech MX Keys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G403</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro 14″ (2022 M1 Max)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Audio Technica ATH-M50x/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
