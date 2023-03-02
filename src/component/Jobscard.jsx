import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Jobscard = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => setdata(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <>
    {data.map(item => {
        return (
          <Link to="/jobs" className="ml-[30%] flex mt-10 p-3 rounded-xl bg-gray-300">
            <img className="w-24" src="devchallenges.png" alt="job" />
            <div key={item.jobid} className="flex pl-2 flex-start items-start flex-col">
              <h1 className="font-extrabold">{item.companyName}</h1>
              <h2 className="font-bold p-2 text-xl">{item.title}</h2>
              <p>d gdkfg bhj b dfgdshgdgiuhd gsdfig </p>
              <div className="border-2 p-1 border-red-500 rounded-xl ">{item.category}</div>
            </div>
            <div class="flex text-right text-xs ml-auto mt-auto">
              <span>🗺️ {item.country}</span>
              <span class="text-orange-500">🕛 {item.date}</span>
            </div>
          </Link>
        )
      })
    }
    </>
  )
}

export default Jobscard