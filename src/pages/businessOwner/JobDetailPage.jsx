import React from "react";
import { useGetJobByIdQuery } from "../../feature/job/jobSlide";
import { useParams } from "react-router";

export default function JobDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetJobByIdQuery(id);
  console.log(data);

  return <div>jobDetailPage</div>;
}
