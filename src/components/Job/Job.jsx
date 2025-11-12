import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded gorder-[#7E9FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded gorder-[#7E9FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex">
          <h2 className="flex mr-4">
            <FaLocationDot className="text-xl mr-2"></FaLocationDot>
            {location}
          </h2>
          <h2 className="flex">
            <AiOutlineDollar className="text-xl"></AiOutlineDollar> Salary :
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
