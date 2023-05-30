"use client"
import cssSkill from "./skill.module.css"
import axios from 'axios';
import React, { useEffect } from 'react';

const Page = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* ... */}
    </div>
  );
};

export default Page;
