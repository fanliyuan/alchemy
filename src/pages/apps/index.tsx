import AppCard from '../../components/AppCard'
import Styled from 'styled-components'
import AppTabs from '../../components/AppTabs'

const StyleBody = Styled.div`
  background:#FAFCFD;
  padding:100px 10%;
`

export default function Apps() {
  return (
    <>
      <AppCard />
      <StyleBody>
          <AppTabs />
      </StyleBody>
    </>
  )
}