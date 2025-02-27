import React from 'react';

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow w-1/4 text-center">
      <p>{title}</p>
      <span className="font-bold text-lg">{value}</span>
    </div>
  );
}
export default StatCard;