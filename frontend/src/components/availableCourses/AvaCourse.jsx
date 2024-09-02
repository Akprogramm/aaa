import React from "react";
import "./avaCourses.css";

const AvaCourse = () => {
  const testsData = [
    {
      id: 1,
      name: "Python", 
      message:
        "Dive into the fundamentals of Python programming, from basic syntax to advanced concepts like object-oriented programming and data manipulation.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qn-GuWwc6EFc-xcy9haXoDY0YoVZEgwQ8Q&s",
    },
    { 
      id: 2,
      name: "Java",
      message:
        "Master Java, one of the most powerful programming languages, with our focused course. Learn essential concepts like OOP, data structures, and build robust applications from scratch",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKVrVcrrTL7A8B75qwwrpkAx3uOewEt9RbA&s",
    },
    {
      id: 3,
      name: "JavaScrip",
      message:
        "Unlock the full potential of web development with our JavaScript course. Learn the fundamentals of JavaScript, DOM manipulation, and modern frameworks to create dynamic, interactive websites and applications",
      image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFX9mNYv1We2nYQ2SD4cHsxBrEouMGxmwE8Q&s",
    },
    {
      id: 4,
      name: "DSA",
      message:
        "Master Data Structures and Algorithms (DSA) with our in-depth course. Learn to solve complex problems efficiently using key concepts like arrays, linked lists, trees, and algorithms to boost your coding skills",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230808160224/DSA.webp",
    },
    {
        id: 5,
        name: "blockChain",
        message:
          "Explore the revolutionary world of blockchain with our comprehensive course. Learn the fundamentals of decentralized technology, smart contracts, and how to build secure blockchain applications from the ground up.",
        image:
          "https://www.chainalysis.com/wp-content/uploads/2022/02/bloggraphic-blockchains-01-1.png",
      }
  ];
  return (
    <section className="tests">
      <h2>Recently Uploaded</h2>
      <div className="test-cards">
        {testsData.map((e) => (
          <div className="test-card" key={e.id}>
            <div className="student-image"> 
              <img src={e.image} alt="" /> 
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvaCourse;