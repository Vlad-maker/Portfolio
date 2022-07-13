import React from 'react';
import styled from 'styled-components';

function PetProjects() {

  // const data = [
  //   {name: 'test', link: 'link', linkName: 'linkName', description: 'description'},
  //   {name: 'test2', link: 'link2', linkName: 'linkName2', description: 'description2'}
  // ];

  return (
    <PetProjectMainBlock>

      <Warning>
        In this section you can see my educational projects.
        Some of the projects are posted on Github Pages,
        and some have their own backend and require renting a cloud server,
        unfortunately, now I'm not able to pay for a cloud server for pet projects,
        so, in these cases it will only be possible to get acquainted with the project code,
        thank you for your understanding.
      </Warning>

      <PetProjectFlexBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>

        <PetProjectBlock>
          <PetProjectHeading>
            Test
          </PetProjectHeading>
          <PetProjectLink>
            Test
          </PetProjectLink>
          <PetProjectDescription>
            Lores input test
          </PetProjectDescription>
        </PetProjectBlock>


      </PetProjectFlexBlock>



    </PetProjectMainBlock>
  )
}

export default PetProjects;

const PetProjectMainBlock = styled.section`
  max-width: 1440px;
  width:100%;
  margin: 80px 0 0 0;
`
const Warning = styled.p`
  // opacity: 0.5;
  // max-width: 640px;
  font-size: 18px;
  background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`

const PetProjectFlexBlock = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PetProjectBlock = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 0 20px 0;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),
              linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
  border-radius: 18px;
  text-align: center;
  :hover {
    transform: scale(1.05);
    transition: 0.2s linear;
    cursor: pointer;
  }
`

const PetProjectHeading = styled.div`

`

const PetProjectDescription = styled.p`

`

const PetProjectLink = styled.a`

`
