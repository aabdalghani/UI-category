import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="content">
      <h1>Detect. Understand. Instantly Act.</h1>
      <p className="par">The Chooch AI Vision platform operates with unprecedented precision and efficiency <br></br>in environments where instantly detecting and comprehending the most<br></br> nuanced visual elements can mean the difference between average <br></br>and extraordinary operational performance.</p>
      
      <button className="cn" ><Link to="/">JOIN US</Link></button>
    </div>
      
  )
}
