const getStoredJobApplication = () => {
  const storedJobAplication = localStorage.getItem("job-applications");
  if (storedJobAplication) {
    return JSON.parse(storedJobAplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};
export { getStoredJobApplication, saveJobApplication };
