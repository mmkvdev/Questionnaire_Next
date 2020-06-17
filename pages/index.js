import Head from 'next/head'
import HomePage from './HomePage';
import fetch from 'isomorphic-fetch'
import { parseCookies } from 'nookies'

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Questionnaire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
      <div>
        {
          props.authorization && <HomePage />
        }
      </div>
      <div>
        {
          !props.authorization && 
            <div className="serverPropContainer">
                <a className= "linkContainer" href={"http://localhost:3001/auth/github"} >Click here to login</a>
            </div>
        }
      </div>
      <style jsx>{`
        .serverPropContainer {
          width: '80%';
          margin: 160px;
          height: 20px;
          text-align: center;
          padding: 20px;
          border-radius: 2px;
          background-color: #729aa2;
        },
        .linkContainer {
          width: '30%';
          text-decoration: none;
          font-family: 'Metal Mania', cursive;    
          padding: 10px;
          border-radius: 2px;
          margin: 20px;
        }
      `}</style>
    </div>
  )
}


async function getUser(authorization) {
  const res = await fetch('http://localhost:3001/user', { headers: { authorization } })
  if (res.status === 200) {
    return { authorization, user: res.data }
  }
  else return { authorization }
}

Home.getInitialProps = async (ctx) => {
  const { authorization } = parseCookies(ctx);
  const { token } = ctx.query
  const props = getUser(authorization || token)
  return props;
}
