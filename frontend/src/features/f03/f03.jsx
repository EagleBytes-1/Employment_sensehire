import React, { useState } from "react";

const applicantsData = [
  { name: "Aman Sharma", skills: "React, Node", score: 85 },
  { name: "Priya Patel", skills: "Python, ML", score: 92 },
  { name: "Rahul Verma", skills: "Java, Spring", score: 78 },
  { name: "Sneha Iyer", skills: "UI/UX, Figma", score: 88 }
];

export default function F03() {
  const [sortedApplicants, setSortedApplicants] = useState([]);

  const sortApplicants = () => {
    const sorted = [...applicantsData].sort(
      (a, b) => b.score - a.score
    );
    setSortedApplicants(sorted);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Applicant Ranking Dashboard</h1>

      <button
        onClick={sortApplicants}
        style={{
          padding: "10px",
          marginBottom: "20px",
          background: "#FF9933",
          border: "none",
          cursor: "pointer"
        }}
      >
        Rank Applicants
      </button>

      {(sortedApplicants.length > 0 ? sortedApplicants : applicantsData).map(
        (applicant, index) => (
          <div
            key={index}
            style={{
              background: "#222",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px"
            }}
          >
            <h3>
              #{index + 1} {applicant.name}
            </h3>
            <p>Skills: {applicant.skills}</p>
            <p>Score: {applicant.score}</p>
          </div>
        )
      )}
    </div>
  );
}