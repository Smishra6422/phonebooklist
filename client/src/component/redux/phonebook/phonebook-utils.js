export const updateJob = (jobs, id) => {
  const isJobExist = jobs.find((job) => job._id === id);

  if (isJobExist) {
    return isJobExist;
  }
};
