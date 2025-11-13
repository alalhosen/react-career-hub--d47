import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);
  console.log(id, jobs);
  return (
    <div>
      <h2>Job Details Of: </h2>
    </div>
  );
};

export default JobDetails;
