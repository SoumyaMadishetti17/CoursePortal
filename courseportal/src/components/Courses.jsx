import React, { useEffect, useState } from 'react';
import db from './FirebaseConfig'; 

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const courseId = "-OJqlU6q8ny1K65EW2iC"; 

  useEffect(() => {
    const courseRef = db.ref(`courses/${courseId}/courses`);
    courseRef.on(
      'value',
      (snapshot) => {
        const data = snapshot.val();
        setCourse(data);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => courseRef.off();
  }, [courseId]);

  if (loading) return <h3>Loading course details...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;
  if (!course) return <h3>Course not found.</h3>;

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Course Details</h2>
      <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <p><strong>ID:</strong> {courseId}</p>
        <p><strong>Title:</strong> {course.Title || 'Untitled Course'}</p>
        <p><strong>Description:</strong> {course.Description || 'No description available'}</p>
        <p><strong>Instructor:</strong> {course.Instructor || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
